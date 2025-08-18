const fs = require('fs');
const path = require('path');

class WordReplacementManager {
    constructor() {
        this.book6Data = null;
        this.replacementLog = [];
        this.backupPath = 'backups/';
        this.logPath = 'logs/word_replacements.json';
        this.initialize();
    }

    initialize() {
        // Create necessary directories
        this.ensureDirectories();
        
        // Load Book 6 data
        this.loadBook6Data();
        
        // Load existing replacement log
        this.loadReplacementLog();
    }

    ensureDirectories() {
        const directories = ['backups', 'logs'];
        directories.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    loadBook6Data() {
        try {
            const data = fs.readFileSync('book6_parsed.json', 'utf8');
            this.book6Data = JSON.parse(data);
            console.log('✅ Book 6 data loaded successfully');
        } catch (error) {
            console.error('❌ Error loading Book 6 data:', error.message);
            throw error;
        }
    }

    loadReplacementLog() {
        try {
            if (fs.existsSync(this.logPath)) {
                const logData = fs.readFileSync(this.logPath, 'utf8');
                this.replacementLog = JSON.parse(logData);
                console.log(`✅ Loaded ${this.replacementLog.length} replacement records`);
            } else {
                this.replacementLog = [];
                console.log('✅ Created new replacement log');
            }
        } catch (error) {
            console.error('❌ Error loading replacement log:', error.message);
            this.replacementLog = [];
        }
    }

    // Create backup before making changes
    createBackup() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFile = path.join(this.backupPath, `book6_backup_${timestamp}.json`);
        
        try {
            fs.writeFileSync(backupFile, JSON.stringify(this.book6Data, null, 2));
            console.log(`✅ Backup created: ${backupFile}`);
            return backupFile;
        } catch (error) {
            console.error('❌ Error creating backup:', error.message);
            throw error;
        }
    }

    // Replace a specific word
    replaceWord(unitNumber, wordIndex, newWord) {
        try {
            // Validate inputs
            if (!this.book6Data.units[unitNumber]) {
                throw new Error(`Unit ${unitNumber} does not exist`);
            }

            const unit = this.book6Data.units[unitNumber];
            if (wordIndex < 0 || wordIndex >= unit.words.length) {
                throw new Error(`Word index ${wordIndex} is out of range for unit ${unitNumber}`);
            }

            // Validate new word structure
            if (!newWord.word || !newWord.meaning) {
                throw new Error('New word must have at least "word" and "meaning" fields');
            }

            // Create backup
            this.createBackup();

            // Store original word for logging
            const originalWord = { ...unit.words[wordIndex] };

            // Replace the word
            unit.words[wordIndex] = {
                word: newWord.word,
                partOfSpeech: newWord.partOfSpeech || originalWord.partOfSpeech,
                meaning: newWord.meaning,
                example: newWord.example || originalWord.example
            };

            // Log the replacement
            this.logReplacement({
                timestamp: new Date().toISOString(),
                unitNumber: parseInt(unitNumber),
                wordIndex: wordIndex,
                originalWord: originalWord,
                newWord: unit.words[wordIndex],
                reason: newWord.reason || 'Manual replacement'
            });

            // Save changes
            this.saveBook6Data();

            console.log(`✅ Successfully replaced "${originalWord.word}" with "${newWord.word}" in Unit ${unitNumber}`);
            return true;

        } catch (error) {
            console.error('❌ Error replacing word:', error.message);
            return false;
        }
    }

    // Replace multiple words in a unit
    replaceWordsInUnit(unitNumber, replacements) {
        try {
            if (!this.book6Data.units[unitNumber]) {
                throw new Error(`Unit ${unitNumber} does not exist`);
            }

            // Create backup
            this.createBackup();

            let successCount = 0;
            const unit = this.book6Data.units[unitNumber];

            replacements.forEach(replacement => {
                const { wordIndex, newWord } = replacement;
                
                if (wordIndex >= 0 && wordIndex < unit.words.length) {
                    const originalWord = { ...unit.words[wordIndex] };
                    
                    unit.words[wordIndex] = {
                        word: newWord.word,
                        partOfSpeech: newWord.partOfSpeech || originalWord.partOfSpeech,
                        meaning: newWord.meaning,
                        example: newWord.example || originalWord.example
                    };

                    // Log the replacement
                    this.logReplacement({
                        timestamp: new Date().toISOString(),
                        unitNumber: parseInt(unitNumber),
                        wordIndex: wordIndex,
                        originalWord: originalWord,
                        newWord: unit.words[wordIndex],
                        reason: newWord.reason || 'Batch replacement'
                    });

                    successCount++;
                }
            });

            // Save changes
            this.saveBook6Data();

            console.log(`✅ Successfully replaced ${successCount} words in Unit ${unitNumber}`);
            return successCount;

        } catch (error) {
            console.error('❌ Error replacing words in unit:', error.message);
            return 0;
        }
    }

    // Find and replace words by criteria
    findAndReplace(criteria, newWord) {
        try {
            const matches = this.findWords(criteria);
            
            if (matches.length === 0) {
                console.log('No words found matching the criteria');
                return 0;
            }

            console.log(`Found ${matches.length} words matching criteria. Replacing...`);

            // Create backup
            this.createBackup();

            let successCount = 0;

            matches.forEach(match => {
                const { unitNumber, wordIndex, originalWord } = match;
                
                this.book6Data.units[unitNumber].words[wordIndex] = {
                    word: newWord.word,
                    partOfSpeech: newWord.partOfSpeech || originalWord.partOfSpeech,
                    meaning: newWord.meaning,
                    example: newWord.example || originalWord.example
                };

                // Log the replacement
                this.logReplacement({
                    timestamp: new Date().toISOString(),
                    unitNumber: parseInt(unitNumber),
                    wordIndex: wordIndex,
                    originalWord: originalWord,
                    newWord: this.book6Data.units[unitNumber].words[wordIndex],
                    reason: newWord.reason || 'Find and replace'
                });

                successCount++;
            });

            // Save changes
            this.saveBook6Data();

            console.log(`✅ Successfully replaced ${successCount} words`);
            return successCount;

        } catch (error) {
            console.error('❌ Error in find and replace:', error.message);
            return 0;
        }
    }

    // Find words by criteria
    findWords(criteria) {
        const matches = [];
        
        Object.entries(this.book6Data.units).forEach(([unitNumber, unit]) => {
            unit.words.forEach((word, wordIndex) => {
                let match = true;

                // Check word text
                if (criteria.word && !word.word.toLowerCase().includes(criteria.word.toLowerCase())) {
                    match = false;
                }

                // Check part of speech
                if (criteria.partOfSpeech && word.partOfSpeech !== criteria.partOfSpeech) {
                    match = false;
                }

                // Check meaning
                if (criteria.meaning && !word.meaning.toLowerCase().includes(criteria.meaning.toLowerCase())) {
                    match = false;
                }

                // Check if example is missing
                if (criteria.missingExample && word.example !== 'Example not provided.') {
                    match = false;
                }

                if (match) {
                    matches.push({
                        unitNumber,
                        wordIndex,
                        originalWord: { ...word }
                    });
                }
            });
        });

        return matches;
    }

    // Log replacement activity
    logReplacement(replacementRecord) {
        this.replacementLog.push(replacementRecord);
        this.saveReplacementLog();
    }

    // Save replacement log
    saveReplacementLog() {
        try {
            fs.writeFileSync(this.logPath, JSON.stringify(this.replacementLog, null, 2));
        } catch (error) {
            console.error('❌ Error saving replacement log:', error.message);
        }
    }

    // Save Book 6 data
    saveBook6Data() {
        try {
            fs.writeFileSync('book6_parsed.json', JSON.stringify(this.book6Data, null, 2));
            console.log('✅ Book 6 data saved successfully');
        } catch (error) {
            console.error('❌ Error saving Book 6 data:', error.message);
            throw error;
        }
    }

    // Get replacement statistics
    getReplacementStats() {
        const stats = {
            totalReplacements: this.replacementLog.length,
            unitsAffected: new Set(this.replacementLog.map(r => r.unitNumber)).size,
            recentReplacements: this.replacementLog.slice(-10),
            reasons: {}
        };

        // Count reasons
        this.replacementLog.forEach(record => {
            const reason = record.reason;
            stats.reasons[reason] = (stats.reasons[reason] || 0) + 1;
        });

        return stats;
    }

    // Restore from backup
    restoreFromBackup(backupFile) {
        try {
            if (!fs.existsSync(backupFile)) {
                throw new Error(`Backup file ${backupFile} does not exist`);
            }

            const backupData = fs.readFileSync(backupFile, 'utf8');
            this.book6Data = JSON.parse(backupData);
            this.saveBook6Data();

            console.log(`✅ Successfully restored from backup: ${backupFile}`);
            return true;

        } catch (error) {
            console.error('❌ Error restoring from backup:', error.message);
            return false;
        }
    }

    // List available backups
    listBackups() {
        try {
            const files = fs.readdirSync(this.backupPath);
            const backups = files
                .filter(file => file.startsWith('book6_backup_') && file.endsWith('.json'))
                .map(file => ({
                    filename: file,
                    path: path.join(this.backupPath, file),
                    timestamp: file.replace('book6_backup_', '').replace('.json', '')
                }))
                .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

            return backups;
        } catch (error) {
            console.error('❌ Error listing backups:', error.message);
            return [];
        }
    }

    // Export replacement log
    exportReplacementLog(outputPath) {
        try {
            const exportData = {
                exportDate: new Date().toISOString(),
                totalReplacements: this.replacementLog.length,
                replacements: this.replacementLog
            };

            fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
            console.log(`✅ Replacement log exported to: ${outputPath}`);
            return true;

        } catch (error) {
            console.error('❌ Error exporting replacement log:', error.message);
            return false;
        }
    }
}

// Example usage and testing functions
function testWordReplacementManager() {
    console.log('🧪 Testing Word Replacement Manager...\n');

    const manager = new WordReplacementManager();

    // Test 1: Replace a single word
    console.log('Test 1: Single word replacement');
    const testReplacement = {
        word: 'test_word',
        partOfSpeech: 'n',
        meaning: 'A test word for replacement',
        example: 'This is a test example.',
        reason: 'Testing replacement functionality'
    };

    const success = manager.replaceWord('1', 0, testReplacement);
    console.log(`Single word replacement: ${success ? '✅ PASSED' : '❌ FAILED'}`);

    // Test 2: Find words with missing examples
    console.log('\nTest 2: Find words with missing examples');
    const missingExamples = manager.findWords({ missingExample: true });
    console.log(`Found ${missingExamples.length} words with missing examples`);

    // Test 3: Get replacement statistics
    console.log('\nTest 3: Replacement statistics');
    const stats = manager.getReplacementStats();
    console.log(`Total replacements: ${stats.totalReplacements}`);
    console.log(`Units affected: ${stats.unitsAffected}`);

    // Test 4: List backups
    console.log('\nTest 4: Backup listing');
    const backups = manager.listBackups();
    console.log(`Available backups: ${backups.length}`);

    console.log('\n✅ Word Replacement Manager testing complete');
}

// Export the class and test function
module.exports = {
    WordReplacementManager,
    testWordReplacementManager
};

// Run tests if this script is executed directly
if (require.main === module) {
    testWordReplacementManager();
}
