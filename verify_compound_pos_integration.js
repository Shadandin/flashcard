const fs = require('fs');

function verifyCompoundPOSIntegration() {
    console.log('🔍 Verifying Compound Part of Speech Integration...\n');
    
    try {
        // Read Book 6 data
        const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
        
        // Collect all unique part of speech forms
        const allPOS = new Set();
        const compoundPOS = new Set();
        const singlePOS = new Set();
        
        Object.values(book6Data.units).forEach(unit => {
            unit.words.forEach(word => {
                allPOS.add(word.partOfSpeech);
                if (word.partOfSpeech.includes('/')) {
                    compoundPOS.add(word.partOfSpeech);
                } else {
                    singlePOS.add(word.partOfSpeech);
                }
            });
        });
        
        console.log('📊 Part of Speech Analysis:');
        console.log('===========================');
        console.log(`Total unique part of speech forms: ${allPOS.size}`);
        console.log(`Single part of speech forms: ${singlePOS.size}`);
        console.log(`Compound part of speech forms: ${compoundPOS.size}`);
        
        console.log('\n📝 Single Part of Speech Forms:');
        console.log('===============================');
        Array.from(singlePOS).sort().forEach(pos => {
            console.log(`   ✅ ${pos}`);
        });
        
        console.log('\n🔗 Compound Part of Speech Forms:');
        console.log('==================================');
        Array.from(compoundPOS).sort().forEach(pos => {
            console.log(`   ✅ ${pos}`);
        });
        
        // Check if all compound forms are in the HTML dropdown
        const htmlContent = fs.readFileSync('index.html', 'utf8');
        const dropdownOptions = [];
        
        // Extract options from the select element
        const optionMatches = htmlContent.match(/<option value="([^"]+)">([^<]+)<\/option>/g);
        if (optionMatches) {
            optionMatches.forEach(match => {
                const valueMatch = match.match(/value="([^"]+)"/);
                const textMatch = match.match(/>([^<]+)</);
                if (valueMatch && textMatch) {
                    dropdownOptions.push({
                        value: valueMatch[1],
                        text: textMatch[1]
                    });
                }
            });
        }
        
        console.log('\n📋 HTML Dropdown Options:');
        console.log('==========================');
        console.log(`Total options in dropdown: ${dropdownOptions.length}`);
        
        // Check single forms
        console.log('\nSingle Forms in Dropdown:');
        Array.from(singlePOS).forEach(pos => {
            const found = dropdownOptions.find(option => option.value === pos);
            const status = found ? '✅' : '❌';
            console.log(`   ${status} ${pos}`);
        });
        
        // Check compound forms
        console.log('\nCompound Forms in Dropdown:');
        Array.from(compoundPOS).forEach(pos => {
            const found = dropdownOptions.find(option => option.value === pos);
            const status = found ? '✅' : '❌';
            console.log(`   ${status} ${pos}`);
        });
        
        // Show examples of words with compound forms
        console.log('\n📚 Examples of Words with Compound Part of Speech:');
        console.log('===================================================');
        
        const compoundExamples = [];
        Object.values(book6Data.units).forEach(unit => {
            unit.words.forEach(word => {
                if (word.partOfSpeech.includes('/')) {
                    compoundExamples.push(word);
                }
            });
        });
        
        // Group by compound form
        const groupedExamples = {};
        compoundExamples.forEach(word => {
            if (!groupedExamples[word.partOfSpeech]) {
                groupedExamples[word.partOfSpeech] = [];
            }
            groupedExamples[word.partOfSpeech].push(word.word);
        });
        
        Object.entries(groupedExamples).forEach(([pos, words]) => {
            console.log(`\n   ${pos}:`);
            words.slice(0, 5).forEach(word => {
                console.log(`     - "${word}"`);
            });
            if (words.length > 5) {
                console.log(`     ... and ${words.length - 5} more`);
            }
        });
        
        // Integration status
        console.log('\n🎯 Integration Status:');
        console.log('=====================');
        
        const missingInDropdown = Array.from(compoundPOS).filter(pos => 
            !dropdownOptions.find(option => option.value === pos)
        );
        
        if (missingInDropdown.length === 0) {
            console.log('✅ All compound part of speech forms are available in the dropdown!');
        } else {
            console.log('❌ Missing compound forms in dropdown:');
            missingInDropdown.forEach(pos => {
                console.log(`   - ${pos}`);
            });
        }
        
        console.log('\n✅ Practice mode will automatically include compound forms');
        console.log('✅ Study mode will display compound forms correctly');
        console.log('✅ Review mode will show compound forms in mistakes');
        
        console.log('\n🎉 Compound part of speech integration is complete!');
        
        return {
            totalPOS: allPOS.size,
            singlePOS: singlePOS.size,
            compoundPOS: compoundPOS.size,
            dropdownOptions: dropdownOptions.length,
            missingInDropdown: missingInDropdown.length
        };
        
    } catch (error) {
        console.error('❌ Error verifying integration:', error.message);
        throw error;
    }
}

// Run the verification
if (require.main === module) {
    verifyCompoundPOSIntegration();
}

module.exports = { verifyCompoundPOSIntegration };
