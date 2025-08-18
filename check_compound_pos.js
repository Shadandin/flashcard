const fs = require('fs');

// Extended part of speech mapping for compound forms
const compoundPosMapping = {
    // Single forms
    'n': 'noun',
    'v': 'verb',
    'adj': 'adjective',
    'adv': 'adverb',
    'prep': 'preposition',
    'conj': 'conjunction',
    'interj': 'interjection',
    'pron': 'pronoun',
    'det': 'determiner',
    'aux': 'auxiliary',
    
    // Compound forms
    'n/adj': 'noun/adjective',
    'adj/n': 'adjective/noun',
    'v/n': 'verb/noun',
    'n/v': 'noun/verb',
    'v/adj': 'verb/adjective',
    'adj/v': 'adjective/verb',
    'adv/adj': 'adverb/adjective',
    'adj/adv': 'adjective/adverb',
    'adv/n': 'adverb/noun',
    'n/adv': 'noun/adverb',
    'v/adv': 'verb/adverb',
    'adv/v': 'adverb/verb',
    'prep/n': 'preposition/noun',
    'n/prep': 'noun/preposition',
    'conj/n': 'conjunction/noun',
    'n/conj': 'noun/conjunction',
    'interj/n': 'interjection/noun',
    'n/interj': 'noun/interjection'
};

function checkAndFixCompoundPOS() {
    console.log('🔍 Checking for compound part of speech abbreviations...\n');
    
    try {
        // Read Book 6 data
        const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
        
        let totalWords = 0;
        let fixedWords = 0;
        let unchangedWords = 0;
        let problematicWords = [];
        
        // Process each unit
        Object.entries(book6Data.units).forEach(([unitNum, unit]) => {
            console.log(`Processing Unit ${unitNum}: ${unit.title}`);
            
            unit.words.forEach((word, wordIndex) => {
                totalWords++;
                const originalPOS = word.partOfSpeech;
                
                // Check if POS needs to be converted
                if (compoundPosMapping[originalPOS]) {
                    const newPOS = compoundPosMapping[originalPOS];
                    if (newPOS !== originalPOS) {
                        word.partOfSpeech = newPOS;
                        fixedWords++;
                        console.log(`  ✅ Fixed: "${word.word}" (${originalPOS} → ${word.partOfSpeech})`);
                    } else {
                        unchangedWords++;
                        console.log(`  ✓ Already correct: "${word.word}" (${originalPOS})`);
                    }
                } else if (Object.values(compoundPosMapping).includes(originalPOS)) {
                    // Already in correct format
                    unchangedWords++;
                    console.log(`  ✓ Already correct: "${word.word}" (${originalPOS})`);
                } else {
                    // Check if it's a compound form that needs fixing
                    const parts = originalPOS.split('/');
                    if (parts.length === 2) {
                        const part1 = compoundPosMapping[parts[0]];
                        const part2 = compoundPosMapping[parts[1]];
                        
                        if (part1 && part2) {
                            const newCompoundPOS = `${part1}/${part2}`;
                            word.partOfSpeech = newCompoundPOS;
                            fixedWords++;
                            console.log(`  ✅ Fixed compound: "${word.word}" (${originalPOS} → ${word.partOfSpeech})`);
                        } else {
                            problematicWords.push({
                                unit: unitNum,
                                word: word.word,
                                pos: originalPOS,
                                reason: 'Unknown compound parts'
                            });
                            console.log(`  ⚠️  Unknown compound POS: "${word.word}" (${originalPOS})`);
                        }
                    } else {
                        problematicWords.push({
                            unit: unitNum,
                            word: word.word,
                            pos: originalPOS,
                            reason: 'Unknown format'
                        });
                        console.log(`  ⚠️  Unknown POS: "${word.word}" (${originalPOS})`);
                    }
                }
            });
        });
        
        // Save the updated data
        fs.writeFileSync('book6_parsed.json', JSON.stringify(book6Data, null, 2));
        
        // Print summary
        console.log('\n📊 Compound POS Fix Summary:');
        console.log('=============================');
        console.log(`Total words processed: ${totalWords}`);
        console.log(`Words fixed: ${fixedWords}`);
        console.log(`Words already correct: ${unchangedWords}`);
        console.log(`Problematic words: ${problematicWords.length}`);
        
        if (problematicWords.length > 0) {
            console.log('\n⚠️  Words with problematic part of speech:');
            problematicWords.forEach(item => {
                console.log(`  Unit ${item.unit}: "${item.word}" (${item.pos}) - ${item.reason}`);
            });
        }
        
        // Show examples of compound forms
        console.log('\n📝 Examples of compound part of speech forms:');
        console.log('=============================================');
        const compoundExamples = [];
        
        Object.values(book6Data.units).forEach(unit => {
            unit.words.forEach(word => {
                if (word.partOfSpeech.includes('/')) {
                    compoundExamples.push(word);
                }
            });
        });
        
        // Show unique compound forms
        const uniqueCompoundForms = [...new Set(compoundExamples.map(w => w.partOfSpeech))];
        uniqueCompoundForms.forEach(form => {
            const examples = compoundExamples.filter(w => w.partOfSpeech === form).slice(0, 3);
            console.log(`\n   ${form}:`);
            examples.forEach(example => {
                console.log(`     - "${example.word}"`);
            });
        });
        
        // Create a backup
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFile = `book6_backup_compound_pos_fix_${timestamp}.json`;
        fs.writeFileSync(backupFile, JSON.stringify(book6Data, null, 2));
        console.log(`\n💾 Backup created: ${backupFile}`);
        
        console.log('\n✅ Compound part of speech forms have been checked and fixed!');
        
        return {
            totalWords,
            fixedWords,
            unchangedWords,
            problematicWords,
            compoundExamples
        };
        
    } catch (error) {
        console.error('❌ Error checking compound part of speech:', error.message);
        throw error;
    }
}

// Run the check and fix
if (require.main === module) {
    checkAndFixCompoundPOS();
}

module.exports = { checkAndFixCompoundPOS, compoundPosMapping };
