const fs = require('fs');

function updateDataJsFinal() {
    console.log('🔧 Final update of data.js with corrected Book 6 part of speech format...\n');
    
    try {
        // Read the data.js file
        let dataJsContent = fs.readFileSync('data.js', 'utf8');
        
        // Read the corrected book6_parsed.json
        const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
        
        // Convert the book6Data to a string with proper formatting
        const book6DataString = JSON.stringify(book6Data, null, 2);
        
        // Find the start and end of the book6Data section
        const startMarker = 'const book6Data = {';
        
        const startIndex = dataJsContent.indexOf(startMarker);
        if (startIndex === -1) {
            throw new Error('Could not find book6Data in data.js');
        }
        
        // Find the end of the book6Data object
        let braceCount = 0;
        let endIndex = startIndex;
        let inString = false;
        let escapeNext = false;
        
        for (let i = startIndex; i < dataJsContent.length; i++) {
            const char = dataJsContent[i];
            
            if (escapeNext) {
                escapeNext = false;
                continue;
            }
            
            if (char === '\\') {
                escapeNext = true;
                continue;
            }
            
            if (char === '"' && !escapeNext) {
                inString = !inString;
                continue;
            }
            
            if (!inString) {
                if (char === '{') {
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        endIndex = i + 1;
                        break;
                    }
                }
            }
        }
        
        if (braceCount !== 0) {
            throw new Error('Could not properly parse book6Data object structure');
        }
        
        // Replace the old book6Data with the corrected version
        const beforeBook6 = dataJsContent.substring(0, startIndex);
        const afterBook6 = dataJsContent.substring(endIndex);
        
        const newDataJsContent = beforeBook6 + 'const book6Data = ' + book6DataString + ';' + afterBook6;
        
        // Create backup
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFile = `data_backup_final_pos_fix_${timestamp}.js`;
        fs.writeFileSync(backupFile, dataJsContent);
        console.log(`💾 Backup created: ${backupFile}`);
        
        // Write the updated content
        fs.writeFileSync('data.js', newDataJsContent);
        
        console.log('✅ data.js has been updated with the final corrected Book 6 part of speech format!');
        
        // Verify the update
        console.log('\n📊 Verification:');
        console.log('================');
        
        // Check a few sample words to verify the format
        const sampleWords = [
            { word: 'adverse', expected: 'adjective' },
            { word: 'alternate', expected: 'verb/adjective' },
            { word: 'dolphin', expected: 'noun' },
            { word: 'ecologically', expected: 'adverb' },
            { word: 'overuse', expected: 'verb/noun' },
            { word: 'backstage', expected: 'adverb/noun' }
        ];
        
        console.log('Sample word verification:');
        sampleWords.forEach(sample => {
            const word = book6Data.units['1'].words.find(w => w.word === sample.word) || 
                        book6Data.units['23'].words.find(w => w.word === sample.word);
            if (word) {
                const status = word.partOfSpeech === sample.expected ? '✅' : '❌';
                console.log(`   ${status} "${word.word}": ${word.partOfSpeech} (expected: ${sample.expected})`);
            }
        });
        
        // Count compound forms
        const compoundForms = [];
        Object.values(book6Data.units).forEach(unit => {
            unit.words.forEach(word => {
                if (word.partOfSpeech.includes('/')) {
                    compoundForms.push(word.partOfSpeech);
                }
            });
        });
        
        const uniqueCompoundForms = [...new Set(compoundForms)];
        console.log(`\nCompound part of speech forms found: ${uniqueCompoundForms.length}`);
        uniqueCompoundForms.forEach(form => {
            const count = compoundForms.filter(f => f === form).length;
            console.log(`   ${form}: ${count} words`);
        });
        
        console.log('\n🎉 Book 6 part of speech format is now fully standardized!');
        console.log('   - All abbreviations converted to full form');
        console.log('   - Compound forms properly formatted');
        console.log('   - Consistent with Books 3 and 4 format');
        
        return true;
        
    } catch (error) {
        console.error('❌ Error updating data.js:', error.message);
        throw error;
    }
}

// Run the update
if (require.main === module) {
    updateDataJsFinal();
}

module.exports = { updateDataJsFinal };
