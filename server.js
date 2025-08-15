const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Data storage file
const FLASHCARDS_FILE = 'flashcards_repository.json';

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
            lastUpdated: data.lastUpdated
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

// Initialize repository and start server
initializeRepository().then(() => {
    app.listen(PORT, () => {
        console.log(`Flashcard repository server running on port ${PORT}`);
        console.log(`Repository file: ${FLASHCARDS_FILE}`);
    });
}).catch(error => {
    console.error('Failed to initialize repository:', error);
    process.exit(1);
});