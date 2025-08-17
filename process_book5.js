const fs = require('fs').promises;
const { extractBook5Data } = require('./extract_book5_data.js');
const { integrateBook5Data } = require('./integrate_book5_data.js');

async function processBook5() {
    try {
        console.log('=== Book 5 Processing Workflow ===');
        console.log('Step 1: Checking for Book 5 file...');
        
        // Check if Book 5 file exists
        const book5Path = 'Book 5.docx';
        try {
            await fs.access(book5Path);
            console.log('✓ Book 5.docx found');
        } catch (error) {
            console.error('✗ Book 5.docx not found in the repository');
            console.log('\nTo process Book 5:');
            console.log('1. Upload "Book 5.docx" to the repository');
            console.log('2. Run this script again: node process_book5.js');
            console.log('\nThe script will automatically:');
            console.log('- Extract text from the Word document');
            console.log('- Parse units and words with correct titles');
            console.log('- Integrate the data into the main application');
            return;
        }
        
        console.log('\nStep 2: Extracting and parsing Book 5 data...');
        const book5Data = await extractBook5Data();
        
        if (!book5Data) {
            console.error('✗ Failed to extract Book 5 data');
            return;
        }
        
        console.log('✓ Book 5 data extracted successfully');
        console.log(`  - Found ${Object.keys(book5Data.units).length} units`);
        console.log(`  - Total words: ${Object.values(book5Data.units).reduce((sum, unit) => sum + unit.words.length, 0)}`);
        
        // Display unit information
        console.log('\nUnit breakdown:');
        Object.entries(book5Data.units).forEach(([unitNum, unit]) => {
            console.log(`  Unit ${unitNum}: ${unit.title} (${unit.words.length} words)`);
        });
        
        console.log('\nStep 3: Integrating Book 5 data into main application...');
        await integrateBook5Data();
        
        console.log('✓ Book 5 integration completed successfully');
        
        console.log('\nStep 4: Verifying integration...');
        
        // Read the updated data.js to verify
        const dataJsContent = await fs.readFile('data.js', 'utf8');
        if (dataJsContent.includes('book5Data')) {
            console.log('✓ Book 5 data found in data.js');
        } else {
            console.log('✗ Book 5 data not found in data.js');
        }
        
        // Check if Book 5 is referenced in generateSampleData
        if (dataJsContent.includes('vocabularyData.books[5] = book5Data')) {
            console.log('✓ Book 5 properly integrated into vocabulary data');
        } else {
            console.log('✗ Book 5 not properly integrated into vocabulary data');
        }
        
        console.log('\n=== Book 5 Processing Complete ===');
        console.log('\nNext steps:');
        console.log('1. Refresh your browser to see Book 5 in the application');
        console.log('2. Test the Book 5 units to ensure they display correctly');
        console.log('3. Verify that all words and unit titles are correct');
        
    } catch (error) {
        console.error('Error processing Book 5:', error);
        throw error;
    }
}

// Function to validate Book 5 data structure
async function validateBook5Data() {
    try {
        console.log('Validating Book 5 data structure...');
        
        const book5DataPath = 'book5_parsed.json';
        const book5Data = JSON.parse(await fs.readFile(book5DataPath, 'utf8'));
        
        let isValid = true;
        const issues = [];
        
        // Check basic structure
        if (!book5Data.title || !book5Data.units) {
            issues.push('Missing title or units in Book 5 data');
            isValid = false;
        }
        
        // Check each unit
        Object.entries(book5Data.units).forEach(([unitNum, unit]) => {
            if (!unit.title) {
                issues.push(`Unit ${unitNum}: Missing title`);
                isValid = false;
            }
            
            if (!Array.isArray(unit.words)) {
                issues.push(`Unit ${unitNum}: Words is not an array`);
                isValid = false;
            }
            
            // Check each word
            unit.words.forEach((word, wordIndex) => {
                if (!word.word || !word.partOfSpeech || !word.meaning) {
                    issues.push(`Unit ${unitNum}, Word ${wordIndex + 1}: Missing required fields`);
                    isValid = false;
                }
            });
        });
        
        if (isValid) {
            console.log('✓ Book 5 data structure is valid');
        } else {
            console.log('✗ Book 5 data structure has issues:');
            issues.forEach(issue => console.log(`  - ${issue}`));
        }
        
        return isValid;
        
    } catch (error) {
        console.error('Error validating Book 5 data:', error);
        return false;
    }
}

// Run the processing
if (require.main === module) {
    processBook5()
        .then(async () => {
            // Validate the data after processing
            await validateBook5Data();
        })
        .catch(error => {
            console.error('Processing failed:', error);
            process.exit(1);
        });
}

module.exports = { processBook5, validateBook5Data };
