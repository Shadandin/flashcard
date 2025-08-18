const readline = require('readline');
const { WordReplacementManager } = require('./word_replacement_manager.js');

class WordReplacementInterface {
    constructor() {
        this.manager = new WordReplacementManager();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Main menu
    async showMainMenu() {
        console.clear();
        console.log('📚 Book 6 Word Replacement Interface');
        console.log('=====================================\n');
        
        console.log('1. 🔍 Find and review words');
        console.log('2. ✏️  Replace individual word');
        console.log('3. 📝 Batch replace words in unit');
        console.log('4. 🔄 Find and replace by criteria');
        console.log('5. 📊 View replacement statistics');
        console.log('6. 💾 Manage backups');
        console.log('7. 📋 Export replacement log');
        console.log('8. 🧪 Run tests');
        console.log('9. ❌ Exit\n');

        const choice = await this.askQuestion('Select an option (1-9): ');
        
        switch (choice) {
            case '1':
                await this.findAndReviewWords();
                break;
            case '2':
                await this.replaceIndividualWord();
                break;
            case '3':
                await this.batchReplaceWords();
                break;
            case '4':
                await this.findAndReplaceByCriteria();
                break;
            case '5':
                await this.viewStatistics();
                break;
            case '6':
                await this.manageBackups();
                break;
            case '7':
                await this.exportReplacementLog();
                break;
            case '8':
                await this.runTests();
                break;
            case '9':
                console.log('👋 Goodbye!');
                this.rl.close();
                return;
            default:
                console.log('❌ Invalid option. Please try again.');
                await this.waitForEnter();
                await this.showMainMenu();
        }
    }

    // Find and review words
    async findAndReviewWords() {
        console.clear();
        console.log('🔍 Find and Review Words');
        console.log('========================\n');

        console.log('Search criteria:');
        console.log('1. By word text');
        console.log('2. By part of speech');
        console.log('3. By meaning content');
        console.log('4. Words with missing examples');
        console.log('5. Back to main menu\n');

        const choice = await this.askQuestion('Select search type (1-5): ');
        
        let criteria = {};
        
        switch (choice) {
            case '1':
                const wordText = await this.askQuestion('Enter word text to search: ');
                criteria.word = wordText;
                break;
            case '2':
                console.log('Available parts of speech: adj, adv, n, v, prep, conj, interj');
                const pos = await this.askQuestion('Enter part of speech: ');
                criteria.partOfSpeech = pos;
                break;
            case '3':
                const meaning = await this.askQuestion('Enter text to search in meanings: ');
                criteria.meaning = meaning;
                break;
            case '4':
                criteria.missingExample = true;
                break;
            case '5':
                await this.showMainMenu();
                return;
            default:
                console.log('❌ Invalid option.');
                await this.waitForEnter();
                await this.findAndReviewWords();
                return;
        }

        const matches = this.manager.findWords(criteria);
        
        if (matches.length === 0) {
            console.log('\n❌ No words found matching the criteria.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        console.log(`\n✅ Found ${matches.length} words:\n`);
        
        // Display matches with pagination
        const pageSize = 10;
        let currentPage = 0;
        const totalPages = Math.ceil(matches.length / pageSize);

        while (currentPage < totalPages) {
            const startIndex = currentPage * pageSize;
            const endIndex = Math.min(startIndex + pageSize, matches.length);
            const pageMatches = matches.slice(startIndex, endIndex);

            console.log(`Page ${currentPage + 1} of ${totalPages}:`);
            console.log('─'.repeat(80));

            pageMatches.forEach((match, index) => {
                const globalIndex = startIndex + index;
                const word = match.originalWord;
                console.log(`${globalIndex + 1}. Unit ${match.unitNumber}, Word ${match.wordIndex + 1}:`);
                console.log(`   Word: ${word.word} (${word.partOfSpeech})`);
                console.log(`   Meaning: ${word.meaning}`);
                console.log(`   Example: ${word.example}`);
                console.log('');
            });

            if (totalPages > 1) {
                console.log('Navigation: n (next), p (previous), q (quit), or enter word number to replace');
                const navChoice = await this.askQuestion('Enter choice: ');
                
                if (navChoice.toLowerCase() === 'q') {
                    break;
                } else if (navChoice.toLowerCase() === 'n') {
                    currentPage = Math.min(currentPage + 1, totalPages - 1);
                    console.clear();
                    continue;
                } else if (navChoice.toLowerCase() === 'p') {
                    currentPage = Math.max(currentPage - 1, 0);
                    console.clear();
                    continue;
                } else {
                    const wordIndex = parseInt(navChoice) - 1;
                    if (wordIndex >= 0 && wordIndex < matches.length) {
                        await this.replaceWordFromList(matches[wordIndex]);
                        break;
                    }
                }
            } else {
                const wordChoice = await this.askQuestion('Enter word number to replace (or q to quit): ');
                if (wordChoice.toLowerCase() === 'q') {
                    break;
                }
                
                const wordIndex = parseInt(wordChoice) - 1;
                if (wordIndex >= 0 && wordIndex < matches.length) {
                    await this.replaceWordFromList(matches[wordIndex]);
                    break;
                }
            }
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Replace word from search results
    async replaceWordFromList(match) {
        console.log('\n✏️  Replace Word');
        console.log('===============\n');
        
        const word = match.originalWord;
        console.log(`Current word: ${word.word} (${word.partOfSpeech})`);
        console.log(`Meaning: ${word.meaning}`);
        console.log(`Example: ${word.example}`);
        console.log(`Location: Unit ${match.unitNumber}, Word ${match.wordIndex + 1}\n`);

        const proceed = await this.askQuestion('Do you want to replace this word? (y/n): ');
        if (proceed.toLowerCase() !== 'y') {
            return;
        }

        const newWord = await this.getNewWordDetails();
        const reason = await this.askQuestion('Reason for replacement: ');

        newWord.reason = reason;

        const success = this.manager.replaceWord(match.unitNumber, match.wordIndex, newWord);
        
        if (success) {
            console.log('✅ Word replaced successfully!');
        } else {
            console.log('❌ Failed to replace word.');
        }
    }

    // Replace individual word
    async replaceIndividualWord() {
        console.clear();
        console.log('✏️  Replace Individual Word');
        console.log('==========================\n');

        const unitNumber = await this.askQuestion('Enter unit number (1-30): ');
        const wordIndex = await this.askQuestion('Enter word index (0-based): ');

        if (!this.manager.book6Data.units[unitNumber]) {
            console.log('❌ Unit does not exist.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        const unit = this.manager.book6Data.units[unitNumber];
        if (wordIndex < 0 || wordIndex >= unit.words.length) {
            console.log('❌ Word index is out of range.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        const currentWord = unit.words[wordIndex];
        console.log(`\nCurrent word: ${currentWord.word} (${currentWord.partOfSpeech})`);
        console.log(`Meaning: ${currentWord.meaning}`);
        console.log(`Example: ${currentWord.example}\n`);

        const newWord = await this.getNewWordDetails();
        const reason = await this.askQuestion('Reason for replacement: ');
        newWord.reason = reason;

        const success = this.manager.replaceWord(unitNumber, wordIndex, newWord);
        
        if (success) {
            console.log('✅ Word replaced successfully!');
        } else {
            console.log('❌ Failed to replace word.');
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Batch replace words in unit
    async batchReplaceWords() {
        console.clear();
        console.log('📝 Batch Replace Words in Unit');
        console.log('==============================\n');

        const unitNumber = await this.askQuestion('Enter unit number (1-30): ');
        
        if (!this.manager.book6Data.units[unitNumber]) {
            console.log('❌ Unit does not exist.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        const unit = this.manager.book6Data.units[unitNumber];
        console.log(`\nUnit ${unitNumber}: ${unit.title}`);
        console.log(`Total words: ${unit.words.length}\n`);

        // Show current words
        unit.words.forEach((word, index) => {
            console.log(`${index + 1}. ${word.word} (${word.partOfSpeech}) - ${word.meaning}`);
        });

        console.log('\nEnter replacements in format: "index:new_word,part_of_speech,meaning,example"');
        console.log('Example: "0:test,n,a test word,This is a test example."');
        console.log('Enter "done" when finished\n');

        const replacements = [];
        
        while (true) {
            const input = await this.askQuestion('Enter replacement (or "done"): ');
            
            if (input.toLowerCase() === 'done') {
                break;
            }

            const parts = input.split(':');
            if (parts.length !== 2) {
                console.log('❌ Invalid format. Use "index:word,pos,meaning,example"');
                continue;
            }

            const wordIndex = parseInt(parts[0]);
            const wordData = parts[1].split(',');
            
            if (wordData.length < 3) {
                console.log('❌ Invalid word data. Need at least word, part of speech, and meaning.');
                continue;
            }

            if (wordIndex < 0 || wordIndex >= unit.words.length) {
                console.log('❌ Word index is out of range.');
                continue;
            }

            replacements.push({
                wordIndex: wordIndex,
                newWord: {
                    word: wordData[0],
                    partOfSpeech: wordData[1],
                    meaning: wordData[2],
                    example: wordData[3] || 'Example not provided.',
                    reason: 'Batch replacement'
                }
            });

            console.log(`✅ Added replacement for word ${wordIndex}`);
        }

        if (replacements.length > 0) {
            const successCount = this.manager.replaceWordsInUnit(unitNumber, replacements);
            console.log(`\n✅ Successfully replaced ${successCount} words in Unit ${unitNumber}`);
        } else {
            console.log('\n❌ No replacements specified.');
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Find and replace by criteria
    async findAndReplaceByCriteria() {
        console.clear();
        console.log('🔄 Find and Replace by Criteria');
        console.log('===============================\n');

        console.log('Search criteria:');
        console.log('1. By word text');
        console.log('2. By part of speech');
        console.log('3. By meaning content');
        console.log('4. Words with missing examples');
        console.log('5. Back to main menu\n');

        const choice = await this.askQuestion('Select search type (1-5): ');
        
        let criteria = {};
        
        switch (choice) {
            case '1':
                const wordText = await this.askQuestion('Enter word text to search: ');
                criteria.word = wordText;
                break;
            case '2':
                const pos = await this.askQuestion('Enter part of speech: ');
                criteria.partOfSpeech = pos;
                break;
            case '3':
                const meaning = await this.askQuestion('Enter text to search in meanings: ');
                criteria.meaning = meaning;
                break;
            case '4':
                criteria.missingExample = true;
                break;
            case '5':
                await this.showMainMenu();
                return;
            default:
                console.log('❌ Invalid option.');
                await this.waitForEnter();
                await this.findAndReplaceByCriteria();
                return;
        }

        const matches = this.manager.findWords(criteria);
        
        if (matches.length === 0) {
            console.log('\n❌ No words found matching the criteria.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        console.log(`\n✅ Found ${matches.length} words matching criteria.`);
        console.log('Sample matches:');
        matches.slice(0, 5).forEach(match => {
            console.log(`   - ${match.originalWord.word} (Unit ${match.unitNumber})`);
        });

        const proceed = await this.askQuestion('\nDo you want to replace all matching words? (y/n): ');
        if (proceed.toLowerCase() !== 'y') {
            await this.showMainMenu();
            return;
        }

        const newWord = await this.getNewWordDetails();
        const reason = await this.askQuestion('Reason for replacement: ');
        newWord.reason = reason;

        const successCount = this.manager.findAndReplace(criteria, newWord);
        console.log(`\n✅ Successfully replaced ${successCount} words`);

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // View statistics
    async viewStatistics() {
        console.clear();
        console.log('📊 Replacement Statistics');
        console.log('=========================\n');

        const stats = this.manager.getReplacementStats();
        
        console.log(`Total replacements: ${stats.totalReplacements}`);
        console.log(`Units affected: ${stats.unitsAffected}`);
        
        if (Object.keys(stats.reasons).length > 0) {
            console.log('\nReplacement reasons:');
            Object.entries(stats.reasons).forEach(([reason, count]) => {
                console.log(`   ${reason}: ${count}`);
            });
        }

        if (stats.recentReplacements.length > 0) {
            console.log('\nRecent replacements:');
            stats.recentReplacements.forEach(record => {
                console.log(`   ${record.timestamp}: "${record.originalWord.word}" → "${record.newWord.word}" (Unit ${record.unitNumber})`);
            });
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Manage backups
    async manageBackups() {
        console.clear();
        console.log('💾 Backup Management');
        console.log('===================\n');

        const backups = this.manager.listBackups();
        
        if (backups.length === 0) {
            console.log('No backups available.');
            await this.waitForEnter();
            await this.showMainMenu();
            return;
        }

        console.log('Available backups:');
        backups.forEach((backup, index) => {
            console.log(`${index + 1}. ${backup.filename} (${backup.timestamp})`);
        });

        console.log('\n1. Restore from backup');
        console.log('2. Delete backup');
        console.log('3. Back to main menu\n');

        const choice = await this.askQuestion('Select option (1-3): ');
        
        switch (choice) {
            case '1':
                const restoreIndex = await this.askQuestion('Enter backup number to restore: ');
                const restoreBackup = backups[parseInt(restoreIndex) - 1];
                if (restoreBackup) {
                    const confirm = await this.askQuestion(`Restore from ${restoreBackup.filename}? (y/n): `);
                    if (confirm.toLowerCase() === 'y') {
                        this.manager.restoreFromBackup(restoreBackup.path);
                    }
                }
                break;
            case '2':
                const deleteIndex = await this.askQuestion('Enter backup number to delete: ');
                const deleteBackup = backups[parseInt(deleteIndex) - 1];
                if (deleteBackup) {
                    const confirm = await this.askQuestion(`Delete ${deleteBackup.filename}? (y/n): `);
                    if (confirm.toLowerCase() === 'y') {
                        // Implementation for deleting backup
                        console.log('Backup deletion not implemented yet.');
                    }
                }
                break;
            case '3':
                await this.showMainMenu();
                return;
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Export replacement log
    async exportReplacementLog() {
        console.clear();
        console.log('📋 Export Replacement Log');
        console.log('=========================\n');

        const outputPath = await this.askQuestion('Enter output file path (default: replacement_log_export.json): ');
        const finalPath = outputPath || 'replacement_log_export.json';

        const success = this.manager.exportReplacementLog(finalPath);
        
        if (success) {
            console.log('✅ Replacement log exported successfully!');
        } else {
            console.log('❌ Failed to export replacement log.');
        }

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Run tests
    async runTests() {
        console.clear();
        console.log('🧪 Running Tests');
        console.log('================\n');

        const { runAllTests } = require('./test_book6.js');
        runAllTests();

        await this.waitForEnter();
        await this.showMainMenu();
    }

    // Helper methods
    async getNewWordDetails() {
        const word = await this.askQuestion('New word: ');
        const partOfSpeech = await this.askQuestion('Part of speech: ');
        const meaning = await this.askQuestion('Meaning: ');
        const example = await this.askQuestion('Example (optional): ');

        return {
            word: word,
            partOfSpeech: partOfSpeech,
            meaning: meaning,
            example: example || 'Example not provided.'
        };
    }

    async askQuestion(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    async waitForEnter() {
        await this.askQuestion('\nPress Enter to continue...');
    }
}

// Start the interface
function startInterface() {
    const interface = new WordReplacementInterface();
    interface.showMainMenu().catch(error => {
        console.error('❌ Error in interface:', error);
        process.exit(1);
    });
}

// Export for use in other scripts
module.exports = {
    WordReplacementInterface,
    startInterface
};

// Start if this script is executed directly
if (require.main === module) {
    startInterface();
}
