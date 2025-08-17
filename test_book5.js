const fs = require('fs');

// Test Book 5 data integration
function testBook5Integration() {
    console.log('=== Testing Book 5 Integration ===\n');
    
    try {
        // Read the data.js file
        const dataJsContent = fs.readFileSync('data.js', 'utf8');
        
        // Test 1: Check if book5Data is defined
        console.log('Test 1: Book 5 data definition');
        if (dataJsContent.includes('const book5Data = {')) {
            console.log('✅ book5Data is properly defined');
        } else {
            console.log('❌ book5Data is not defined');
            return false;
        }
        
        // Test 2: Check if Book 5 is integrated into vocabularyData
        console.log('\nTest 2: Book 5 integration into vocabularyData');
        if (dataJsContent.includes('vocabularyData.books[5] = book5Data')) {
            console.log('✅ Book 5 is properly integrated into vocabularyData');
        } else {
            console.log('❌ Book 5 is not integrated into vocabularyData');
            return false;
        }
        
        // Test 3: Check parsed JSON file
        console.log('\nTest 3: Parsed JSON data');
        if (fs.existsSync('book5_parsed.json')) {
            const book5Data = JSON.parse(fs.readFileSync('book5_parsed.json', 'utf8'));
            console.log(`✅ book5_parsed.json exists with ${Object.keys(book5Data.units).length} units`);
            
            // Check a few sample units
            const unit1 = book5Data.units['1'];
            if (unit1 && unit1.words && unit1.words.length === 20) {
                console.log(`✅ Unit 1 has ${unit1.words.length} words`);
                console.log(`   Title: ${unit1.title}`);
                console.log(`   Sample word: ${unit1.words[0].word} (${unit1.words[0].partOfSpeech})`);
            } else {
                console.log('❌ Unit 1 data is incomplete');
                return false;
            }
            
            const unit30 = book5Data.units['30'];
            if (unit30 && unit30.words && unit30.words.length === 20) {
                console.log(`✅ Unit 30 has ${unit30.words.length} words`);
                console.log(`   Title: ${unit30.title}`);
            } else {
                console.log('❌ Unit 30 data is incomplete');
                return false;
            }
            
        } else {
            console.log('❌ book5_parsed.json does not exist');
            return false;
        }
        
        // Test 4: Check total word count
        console.log('\nTest 4: Total word count');
        const book5Data = JSON.parse(fs.readFileSync('book5_parsed.json', 'utf8'));
        const totalWords = Object.values(book5Data.units).reduce((sum, unit) => sum + unit.words.length, 0);
        if (totalWords === 600) {
            console.log(`✅ Total words: ${totalWords} (expected: 600)`);
        } else {
            console.log(`❌ Total words: ${totalWords} (expected: 600)`);
            return false;
        }
        
        // Test 5: Check unit titles
        console.log('\nTest 5: Unit titles');
        const expectedTitles = [
            'Unit 1 – The Big Match',
            'Unit 2 – The Drought',
            'Unit 3 – A Great Scientist',
            'Unit 4 – The Auditor',
            'Unit 5 – The Pharmaceutical Company'
        ];
        
        let titlesCorrect = true;
        expectedTitles.forEach((expectedTitle, index) => {
            const unitNum = index + 1;
            const actualTitle = book5Data.units[unitNum.toString()].title;
            if (actualTitle === expectedTitle) {
                console.log(`✅ Unit ${unitNum}: "${actualTitle}"`);
            } else {
                console.log(`❌ Unit ${unitNum}: Expected "${expectedTitle}", got "${actualTitle}"`);
                titlesCorrect = false;
            }
        });
        
        if (!titlesCorrect) {
            return false;
        }
        
        // Test 6: Check word structure
        console.log('\nTest 6: Word structure');
        const sampleWord = book5Data.units['1'].words[0];
        const requiredFields = ['word', 'partOfSpeech', 'meaning', 'example'];
        const missingFields = requiredFields.filter(field => !sampleWord[field]);
        
        if (missingFields.length === 0) {
            console.log('✅ Word structure is correct');
            console.log(`   Sample: "${sampleWord.word}" (${sampleWord.partOfSpeech}) - ${sampleWord.meaning}`);
        } else {
            console.log(`❌ Missing fields: ${missingFields.join(', ')}`);
            return false;
        }
        
        console.log('\n=== All Tests Passed! ===');
        console.log('Book 5 is ready for use in the application.');
        return true;
        
    } catch (error) {
        console.error('❌ Test failed with error:', error.message);
        return false;
    }
}

// Run the test
if (require.main === module) {
    const success = testBook5Integration();
    process.exit(success ? 0 : 1);
}

module.exports = { testBook5Integration };
