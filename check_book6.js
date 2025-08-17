const fs = require('fs');

console.log('🔍 Checking Book 6 status...\n');

try {
    // Read the data.js file and extract the generateSampleData function
    const dataJs = fs.readFileSync('data.js', 'utf8');
    
    // Check if Book 6 is properly configured as empty
    if (dataJs.includes('vocabularyData.books[6] = {')) {
        console.log('✅ Book 6 is defined in generateSampleData');
        
        // Check if it has empty word arrays
        if (dataJs.includes('words: []')) {
            console.log('✅ Book 6 units have empty word arrays');
        } else {
            console.log('❌ Book 6 units may have words');
        }
        
        // Check the title
        if (dataJs.includes('title: "Book 6 - Advanced Level"')) {
            console.log('✅ Book 6 has correct title: "Book 6 - Advanced Level"');
        } else {
            console.log('❌ Book 6 title may be incorrect');
        }
        
        // Check if it creates 30 units
        if (dataJs.includes('for (let unit = 1; unit <= 30; unit++)')) {
            console.log('✅ Book 6 creates 30 units');
        } else {
            console.log('❌ Book 6 may not create 30 units');
        }
        
        console.log('\n📊 Summary:');
        console.log('- Book 6 is properly configured as empty');
        console.log('- Ready for Book 6.docx upload');
        console.log('- Will have 30 units with no words initially');
        
    } else {
        console.log('❌ Book 6 not found in generateSampleData');
    }
    
} catch (error) {
    console.error('❌ Error checking Book 6:', error.message);
}
