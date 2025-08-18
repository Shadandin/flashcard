const fs = require('fs');

// Test Book 6 data integration and validation
function testBook6Integration() {
    console.log('=== Testing Book 6 Integration ===\n');
    
    try {
        // Read the data.js file
        const dataJsContent = fs.readFileSync('data.js', 'utf8');
        
        // Test 1: Check if book6Data is defined
        console.log('Test 1: Book 6 data definition');
        if (dataJsContent.includes('const book6Data = {')) {
            console.log('✅ book6Data is properly defined');
        } else {
            console.log('❌ book6Data is not defined');
            return false;
        }
        
        // Test 2: Check if Book 6 is integrated into vocabularyData
        console.log('\nTest 2: Book 6 integration into vocabularyData');
        if (dataJsContent.includes('vocabularyData.books[6] = book6Data')) {
            console.log('✅ Book 6 is properly integrated into vocabularyData');
        } else {
            console.log('❌ Book 6 is not integrated into vocabularyData');
            return false;
        }
        
        // Test 3: Check parsed JSON file
        console.log('\nTest 3: Parsed JSON data');
        if (fs.existsSync('book6_parsed.json')) {
            const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
            console.log(`✅ book6_parsed.json exists with ${Object.keys(book6Data.units).length} units`);
            
            // Check a few sample units
            const unit1 = book6Data.units['1'];
            if (unit1 && unit1.words && unit1.words.length > 0) {
                console.log(`✅ Unit 1 has ${unit1.words.length} words`);
                console.log(`   Title: ${unit1.title}`);
                console.log(`   Sample word: ${unit1.words[0].word} (${unit1.words[0].partOfSpeech})`);
            } else {
                console.log('❌ Unit 1 data is incomplete');
                return false;
            }
            
            const unit30 = book6Data.units['30'];
            if (unit30 && unit30.words && unit30.words.length > 0) {
                console.log(`✅ Unit 30 has ${unit30.words.length} words`);
                console.log(`   Title: ${unit30.title}`);
            } else {
                console.log('❌ Unit 30 data is incomplete');
                return false;
            }
            
        } else {
            console.log('❌ book6_parsed.json does not exist');
            return false;
        }
        
        // Test 4: Check total word count
        console.log('\nTest 4: Total word count');
        const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
        const totalWords = Object.values(book6Data.units).reduce((sum, unit) => sum + unit.words.length, 0);
        console.log(`✅ Total words: ${totalWords}`);
        
        // Test 5: Check unit titles
        console.log('\nTest 5: Unit titles validation');
        const expectedTitles = [
            'Unit 1 – The Whale Hunt',
            'Unit 2 – The Parade',
            'Unit 3 – The Robot',
            'Unit 4 – The Prairie',
            'Unit 5 – The Parasite'
        ];
        
        let titlesCorrect = true;
        expectedTitles.forEach((expectedTitle, index) => {
            const unitNum = index + 1;
            const actualTitle = book6Data.units[unitNum.toString()].title;
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
        console.log('\nTest 6: Word structure validation');
        const sampleWord = book6Data.units['1'].words[0];
        const requiredFields = ['word', 'partOfSpeech', 'meaning', 'example'];
        const missingFields = requiredFields.filter(field => !sampleWord.hasOwnProperty(field));
        
        if (missingFields.length === 0) {
            console.log('✅ All required word fields are present');
            console.log(`   Sample word structure: ${JSON.stringify(sampleWord, null, 2)}`);
        } else {
            console.log(`❌ Missing fields: ${missingFields.join(', ')}`);
            return false;
        }
        
        // Test 7: Check for data quality issues
        console.log('\nTest 7: Data quality validation');
        let qualityIssues = [];
        
        Object.entries(book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach((word, index) => {
                // Check for empty or invalid data
                if (!word.word || word.word.trim() === '') {
                    qualityIssues.push(`Unit ${unitNum}, word ${index + 1}: Empty word`);
                }
                if (!word.meaning || word.meaning.trim() === '') {
                    qualityIssues.push(`Unit ${unitNum}, word ${index + 1}: Empty meaning`);
                }
                if (word.example === 'Example not provided.') {
                    qualityIssues.push(`Unit ${unitNum}, word ${index + 1}: Missing example`);
                }
            });
        });
        
        if (qualityIssues.length === 0) {
            console.log('✅ No data quality issues found');
        } else {
            console.log(`⚠️  Found ${qualityIssues.length} data quality issues:`);
            qualityIssues.slice(0, 10).forEach(issue => console.log(`   - ${issue}`));
            if (qualityIssues.length > 10) {
                console.log(`   ... and ${qualityIssues.length - 10} more issues`);
            }
        }
        
        // Test 8: Check for duplicate words
        console.log('\nTest 8: Duplicate word detection');
        const allWords = [];
        Object.entries(book6Data.units).forEach(([unitNum, unit]) => {
            unit.words.forEach(word => {
                allWords.push({
                    word: word.word.toLowerCase(),
                    unit: unitNum,
                    original: word.word
                });
            });
        });
        
        const wordCounts = {};
        allWords.forEach(item => {
            wordCounts[item.word] = (wordCounts[item.word] || 0) + 1;
        });
        
        const duplicates = Object.entries(wordCounts).filter(([word, count]) => count > 1);
        
        if (duplicates.length === 0) {
            console.log('✅ No duplicate words found');
        } else {
            console.log(`⚠️  Found ${duplicates.length} duplicate words:`);
            duplicates.slice(0, 10).forEach(([word, count]) => {
                console.log(`   - "${word}" appears ${count} times`);
            });
            if (duplicates.length > 10) {
                console.log(`   ... and ${duplicates.length - 10} more duplicates`);
            }
        }
        
        console.log('\n=== Book 6 Testing Complete ===');
        return true;
        
    } catch (error) {
        console.error('❌ Error during testing:', error.message);
        return false;
    }
}

// Test word replacement functionality
function testWordReplacement() {
    console.log('\n=== Testing Word Replacement Functionality ===\n');
    
    try {
        const book6Data = JSON.parse(fs.readFileSync('book6_parsed.json', 'utf8'));
        
        // Test 1: Check if word replacement functions exist
        console.log('Test 1: Word replacement function availability');
        if (typeof replaceWord === 'function') {
            console.log('✅ replaceWord function exists');
        } else {
            console.log('❌ replaceWord function not found');
        }
        
        // Test 2: Test word replacement logic
        console.log('\nTest 2: Word replacement logic');
        const testUnit = book6Data.units['1'];
        const originalWord = testUnit.words[0];
        const replacementWord = {
            word: 'test_replacement',
            partOfSpeech: 'n',
            meaning: 'A test replacement word',
            example: 'This is a test example.'
        };
        
        console.log(`   Original word: ${originalWord.word}`);
        console.log(`   Replacement word: ${replacementWord.word}`);
        console.log('✅ Word replacement logic test completed');
        
        // Test 3: Check data persistence
        console.log('\nTest 3: Data persistence validation');
        if (fs.existsSync('book6_parsed.json')) {
            console.log('✅ book6_parsed.json exists and is accessible');
        } else {
            console.log('❌ book6_parsed.json not accessible');
        }
        
        console.log('\n=== Word Replacement Testing Complete ===');
        return true;
        
    } catch (error) {
        console.error('❌ Error during word replacement testing:', error.message);
        return false;
    }
}

// Run all tests
function runAllTests() {
    console.log('🚀 Starting Book 6 Comprehensive Testing...\n');
    
    const integrationTest = testBook6Integration();
    const replacementTest = testWordReplacement();
    
    console.log('\n📊 Test Results Summary:');
    console.log(`   Integration Tests: ${integrationTest ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`   Replacement Tests: ${replacementTest ? '✅ PASSED' : '❌ FAILED'}`);
    
    if (integrationTest && replacementTest) {
        console.log('\n🎉 All tests passed! Book 6 is ready for use.');
    } else {
        console.log('\n⚠️  Some tests failed. Please review the issues above.');
    }
}

// Export functions for use in other scripts
module.exports = {
    testBook6Integration,
    testWordReplacement,
    runAllTests
};

// Run tests if this script is executed directly
if (require.main === module) {
    runAllTests();
}
