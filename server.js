const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Data storage file
const FLASHCARDS_FILE = 'flashcards_repository.json';

// Git configuration
const GIT_ENABLED = process.env.GIT_SYNC !== 'false'; // Enable by default
const GIT_AUTO_COMMIT = process.env.GIT_AUTO_COMMIT !== 'false'; // Enable by default

// Initialize repository file if it doesn't exist
async function initializeRepository() {
    try {
        await fs.access(FLASHCARDS_FILE);
    } catch (error) {
        // File doesn't exist, create it with empty structure
        const initialData = {
            flashcards: [],
            lastUpdated: new Date().toISOString()
        };
        await fs.writeFile(FLASHCARDS_FILE, JSON.stringify(initialData, null, 2));
        console.log('Repository file created');
    }
}

// Git operations
async function gitCommand(command) {
    try {
        const { stdout, stderr } = await execAsync(command, { cwd: process.cwd() });
        if (stderr) {
            console.log('Git stderr:', stderr);
        }
        return stdout.trim();
    } catch (error) {
        console.error(`Git command failed: ${command}`, error.message);
        throw error;
    }
}

async function isGitRepository() {
    try {
        await gitCommand('git rev-parse --git-dir');
        return true;
    } catch (error) {
        return false;
    }
}

async function gitAddAndCommit(message) {
    if (!GIT_ENABLED) return;
    
    try {
        const isGit = await isGitRepository();
        if (!isGit) {
            console.log('Not a Git repository, skipping Git operations');
            return;
        }

        // Add the flashcards file
        await gitCommand(`git add ${FLASHCARDS_FILE}`);
        
        // Check if there are changes to commit
        const status = await gitCommand('git status --porcelain');
        if (status.includes(FLASHCARDS_FILE)) {
            // Commit the changes
            await gitCommand(`git commit -m "${message}"`);
            console.log('Git commit successful:', message);
            
            // Try to push to remote (if configured)
            try {
                await gitCommand('git push');
                console.log('Git push successful');
            } catch (pushError) {
                console.log('Git push failed (remote may not be configured):', pushError.message);
            }
        } else {
            console.log('No changes to commit');
        }
    } catch (error) {
        console.error('Git operation failed:', error.message);
    }
}

async function gitPull() {
    if (!GIT_ENABLED) return;
    
    try {
        const isGit = await isGitRepository();
        if (!isGit) {
            console.log('Not a Git repository, skipping Git pull');
            return;
        }

        await gitCommand('git pull');
        console.log('Git pull successful');
    } catch (error) {
        console.error('Git pull failed:', error.message);
    }
}

// Load flashcards from repository
async function loadFlashcards() {
    try {
        const data = await fs.readFile(FLASHCARDS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading flashcards:', error);
        return { flashcards: [], lastUpdated: new Date().toISOString() };
    }
}

// Save flashcards to repository
async function saveFlashcards(data) {
    try {
        data.lastUpdated = new Date().toISOString();
        await fs.writeFile(FLASHCARDS_FILE, JSON.stringify(data, null, 2));
        
        // Auto-commit to Git if enabled
        if (GIT_AUTO_COMMIT) {
            await gitAddAndCommit('Auto-save flashcards');
        }
        
        return true;
    } catch (error) {
        console.error('Error saving flashcards:', error);
        return false;
    }
}

// Routes

// GET /api/flashcards - Get all flashcards
app.get('/api/flashcards', async (req, res) => {
    try {
        // Pull latest changes from Git first
        await gitPull();
        
        const data = await loadFlashcards();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load flashcards' });
    }
});

// POST /api/flashcards - Save a new flashcard
app.post('/api/flashcards', async (req, res) => {
    try {
        const { word, partOfSpeech, meaning, example, book, unit, wordIndex } = req.body;
        
        // Validate required fields
        if (!word || !meaning) {
            return res.status(400).json({ error: 'Word and meaning are required' });
        }

        const data = await loadFlashcards();
        
        // Create new flashcard entry
        const newFlashcard = {
            id: Date.now().toString(), // Simple ID generation
            word: word.trim(),
            partOfSpeech: partOfSpeech?.trim() || '',
            meaning: meaning.trim(),
            example: example?.trim() || '',
            book: book,
            unit: unit,
            wordIndex: wordIndex,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // Add to repository
        data.flashcards.push(newFlashcard);
        
        // Save to file
        const saved = await saveFlashcards(data);
        
        if (saved) {
            res.status(201).json({
                message: 'Flashcard saved successfully',
                flashcard: newFlashcard
            });
        } else {
            res.status(500).json({ error: 'Failed to save flashcard' });
        }
    } catch (error) {
        console.error('Error saving flashcard:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /api/flashcards/:id - Update an existing flashcard
app.put('/api/flashcards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { word, partOfSpeech, meaning, example } = req.body;
        
        const data = await loadFlashcards();
        const flashcardIndex = data.flashcards.findIndex(f => f.id === id);
        
        if (flashcardIndex === -1) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }

        // Update flashcard
        data.flashcards[flashcardIndex] = {
            ...data.flashcards[flashcardIndex],
            word: word?.trim() || data.flashcards[flashcardIndex].word,
            partOfSpeech: partOfSpeech?.trim() || data.flashcards[flashcardIndex].partOfSpeech,
            meaning: meaning?.trim() || data.flashcards[flashcardIndex].meaning,
            example: example?.trim() || data.flashcards[flashcardIndex].example,
            updatedAt: new Date().toISOString()
        };

        const saved = await saveFlashcards(data);
        
        if (saved) {
            res.json({
                message: 'Flashcard updated successfully',
                flashcard: data.flashcards[flashcardIndex]
            });
        } else {
            res.status(500).json({ error: 'Failed to update flashcard' });
        }
    } catch (error) {
        console.error('Error updating flashcard:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE /api/flashcards/:id - Delete a flashcard
app.delete('/api/flashcards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const data = await loadFlashcards();
        const flashcardIndex = data.flashcards.findIndex(f => f.id === id);
        
        if (flashcardIndex === -1) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }

        // Remove flashcard
        const deletedFlashcard = data.flashcards.splice(flashcardIndex, 1)[0];
        
        const saved = await saveFlashcards(data);
        
        if (saved) {
            res.json({
                message: 'Flashcard deleted successfully',
                flashcard: deletedFlashcard
            });
        } else {
            res.status(500).json({ error: 'Failed to delete flashcard' });
        }
    } catch (error) {
        console.error('Error deleting flashcard:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/flashcards/search - Search flashcards
app.get('/api/flashcards/search', async (req, res) => {
    try {
        const { q, book, unit } = req.query;
        
        const data = await loadFlashcards();
        let filteredFlashcards = data.flashcards;

        // Filter by search query
        if (q) {
            const searchTerm = q.toLowerCase();
            filteredFlashcards = filteredFlashcards.filter(f => 
                f.word.toLowerCase().includes(searchTerm) ||
                f.meaning.toLowerCase().includes(searchTerm) ||
                f.example.toLowerCase().includes(searchTerm)
            );
        }

        // Filter by book
        if (book) {
            filteredFlashcards = filteredFlashcards.filter(f => f.book == book);
        }

        // Filter by unit
        if (unit) {
            filteredFlashcards = filteredFlashcards.filter(f => f.unit == unit);
        }

        res.json({
            flashcards: filteredFlashcards,
            total: filteredFlashcards.length
        });
    } catch (error) {
        console.error('Error searching flashcards:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/stats - Get repository statistics
app.get('/api/stats', async (req, res) => {
    try {
        const data = await loadFlashcards();
        
        const stats = {
            totalFlashcards: data.flashcards.length,
            books: {},
            lastUpdated: data.lastUpdated,
            gitEnabled: GIT_ENABLED,
            gitAutoCommit: GIT_AUTO_COMMIT
        };

        // Count flashcards by book
        data.flashcards.forEach(f => {
            if (f.book) {
                if (!stats.books[f.book]) {
                    stats.books[f.book] = { total: 0, units: {} };
                }
                stats.books[f.book].total++;
                
                if (f.unit) {
                    if (!stats.books[f.book].units[f.unit]) {
                        stats.books[f.book].units[f.unit] = 0;
                    }
                    stats.books[f.book].units[f.unit]++;
                }
            }
        });

        res.json(stats);
    } catch (error) {
        console.error('Error getting stats:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/git/status - Get Git status
app.get('/api/git/status', async (req, res) => {
    try {
        const isGit = await isGitRepository();
        if (!isGit) {
            return res.json({
                isGitRepository: false,
                message: 'Not a Git repository'
            });
        }

        const status = await gitCommand('git status --porcelain');
        const branch = await gitCommand('git branch --show-current');
        const lastCommit = await gitCommand('git log -1 --pretty=format:"%h - %s (%cr)"');

        res.json({
            isGitRepository: true,
            branch: branch,
            lastCommit: lastCommit,
            hasChanges: status.length > 0,
            changes: status
        });
    } catch (error) {
        console.error('Error getting Git status:', error);
        res.status(500).json({ error: 'Failed to get Git status' });
    }
});

// POST /api/git/sync - Manual Git sync
app.post('/api/git/sync', async (req, res) => {
    try {
        const isGit = await isGitRepository();
        if (!isGit) {
            return res.status(400).json({ error: 'Not a Git repository' });
        }

        // Pull latest changes
        await gitPull();
        
        // Add and commit any local changes
        await gitAddAndCommit('Manual sync - flashcards update');
        
        res.json({ message: 'Git sync completed successfully' });
    } catch (error) {
        console.error('Error during Git sync:', error);
        res.status(500).json({ error: 'Git sync failed' });
    }
});

// Initialize repository and start server
initializeRepository().then(() => {
    app.listen(PORT, () => {
        console.log(`Flashcard repository server running on port ${PORT}`);
        console.log(`Repository file: ${FLASHCARDS_FILE}`);
        console.log(`Git sync: ${GIT_ENABLED ? 'Enabled' : 'Disabled'}`);
        console.log(`Auto-commit: ${GIT_AUTO_COMMIT ? 'Enabled' : 'Disabled'}`);
    });
}).catch(error => {
    console.error('Failed to initialize repository:', error);
    process.exit(1);
});