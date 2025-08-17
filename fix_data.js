const fs = require('fs');

// Load the complete Book 5 data
const book5Data = JSON.parse(fs.readFileSync('book5_parsed.json', 'utf8'));
console.log('✅ Loaded Book 5 data:', Object.keys(book5Data.units).length, 'units');

// Read the current data.js file
const dataJs = fs.readFileSync('data.js', 'utf8');

// Find the start of book5Data declaration
const book5StartIndex = dataJs.indexOf('const book5Data = {');
if (book5StartIndex === -1) {
    console.error('❌ Could not find book5Data declaration');
    process.exit(1);
}

// Find the end of the file (or next declaration)
const book5EndIndex = dataJs.indexOf('const book5Data = {', book5StartIndex + 1);
const endIndex = book5EndIndex !== -1 ? book5EndIndex : dataJs.length;

// Get the content before book5Data
const beforeBook5 = dataJs.substring(0, book5StartIndex);

// Create the new book5Data with complete data
const newBook5Data = 'const book5Data = ' + JSON.stringify(book5Data, null, 2) + ';';

// Create the integration code
const integrationCode = `

// Generate books with actual data (Books 3-5) and empty structure (Book 6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = book3Data;
    
    // Add Book 4 with actual data
    vocabularyData.books[4] = book4Data;
    
    // Add Book 5 with actual data
    vocabularyData.books[5] = book5Data;
    
    // Add empty Book 6 (waiting for file upload)
    vocabularyData.books[6] = {
        title: "Book 6 - Advanced Level",
        units: {}
    };
    
    // Create 30 units for Book 6 with completely empty word lists
    for (let unit = 1; unit <= 30; unit++) {
        vocabularyData.books[6].units[unit] = {
            title: "Unit " + unit + ": Basic Words",
            words: []
        };
    }
}

// Initialize the data
generateSampleData();

// Export the data
window.vocabularyData = vocabularyData;`;

// Combine all parts
const newContent = beforeBook5 + newBook5Data + integrationCode;

// Write the updated file
fs.writeFileSync('data.js', newContent);

console.log('✅ data.js updated successfully with complete Book 5 data and integration code');
console.log('📊 Book 5 now has', Object.keys(book5Data.units).length, 'units with', 
    Object.values(book5Data.units).reduce((sum, unit) => sum + unit.words.length, 0), 'total words');
