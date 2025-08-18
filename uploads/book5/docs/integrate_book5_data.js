const fs = require('fs').promises;
const { extractBook5Data } = require('./extract_book5_data.js');

async function integrateBook5Data() {
    try {
        console.log('Starting Book 5 integration process...');
        
        // First, extract Book 5 data
        const book5Data = await extractBook5Data();
        if (!book5Data) {
            console.log('No Book 5 data to integrate. Please ensure Book 5.docx is uploaded.');
            return;
        }
        
        // Read the current data.js file
        const dataJsPath = 'data.js';
        let dataJsContent = await fs.readFile(dataJsPath, 'utf8');
        
        // Create Book 5 data structure
        const book5DataString = JSON.stringify(book5Data, null, 2);
        
        // Find the position to insert Book 5 data (before the generateSampleData function)
        const generateSampleDataIndex = dataJsContent.indexOf('// Generate books with actual data');
        if (generateSampleDataIndex === -1) {
            throw new Error('Could not find generateSampleData function in data.js');
        }
        
        // Create the Book 5 data variable
        const book5Variable = `\n// Book 5 data with real unit titles and complete word lists\nconst book5Data = ${book5DataString};\n\n`;
        
        // Insert Book 5 data before the generateSampleData function
        const beforeGenerateSampleData = dataJsContent.substring(0, generateSampleDataIndex);
        const afterGenerateSampleData = dataJsContent.substring(generateSampleDataIndex);
        
        dataJsContent = beforeGenerateSampleData + book5Variable + afterGenerateSampleData;
        
        // Update the generateSampleData function to include Book 5
        const updatedGenerateSampleData = `// Generate books with actual data (Books 3-5) and empty structure (Book 6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = book3Data;
    
    // Add Book 4 with actual data
    vocabularyData.books[4] = book4Data;
    
    // Add Book 5 with actual data
    vocabularyData.books[5] = book5Data;
    
    // Add empty Book 6 (waiting for file upload)
    vocabularyData.books[6] = {
        title: \`Book 6 - \${getBookLevel(6)}\`,
        units: {}
    };
    
    // Create 30 units for Book 6 with completely empty word lists
    for (let unit = 1; unit <= 30; unit++) {
        vocabularyData.books[6].units[unit] = {
            title: \`Unit \${unit}: \${getUnitTheme(unit)}\`,
            words: []
        };
    }
}`;
        
        // Replace the generateSampleData function
        const generateSampleDataRegex = /\/\/ Generate books with actual data.*?function generateSampleData\(\) \{[\s\S]*?\}/;
        dataJsContent = dataJsContent.replace(generateSampleDataRegex, updatedGenerateSampleData);
        
        // Write the updated data.js file
        await fs.writeFile(dataJsPath, dataJsContent, 'utf8');
        
        console.log('Book 5 data successfully integrated into data.js');
        console.log(`Integrated ${Object.keys(book5Data.units).length} units`);
        console.log('Total words integrated:', Object.values(book5Data.units).reduce((sum, unit) => sum + unit.words.length, 0));
        
        // Also update the index.html to show Book 5 is available
        await updateIndexHtml();
        
    } catch (error) {
        console.error('Error integrating Book 5 data:', error);
        throw error;
    }
}

async function updateIndexHtml() {
    try {
        const indexPath = 'index.html';
        let indexContent = await fs.readFile(indexPath, 'utf8');
        
        // Check if Book 5 section already exists
        if (indexContent.includes('Book 5')) {
            console.log('Book 5 section already exists in index.html');
            return;
        }
        
        // Find the position to insert Book 5 (after Book 4)
        const book4SectionIndex = indexContent.indexOf('<h3>Book 4</h3>');
        if (book4SectionIndex === -1) {
            console.log('Could not find Book 4 section in index.html');
            return;
        }
        
        // Find the end of Book 4 section
        const book4EndIndex = indexContent.indexOf('<h3>', book4SectionIndex + 1);
        const insertIndex = book4EndIndex !== -1 ? book4EndIndex : indexContent.length;
        
        // Create Book 5 section
        const book5Section = `
        <h3>Book 5</h3>
        <div class="book-container">
            <div class="book-info">
                <h4>Upper-Intermediate Level</h4>
                <p>Advanced vocabulary for academic and professional contexts</p>
            </div>
            <div class="units-grid" id="book5-units">
                <!-- Units will be populated by JavaScript -->
            </div>
        </div>`;
        
        // Insert Book 5 section
        const beforeInsert = indexContent.substring(0, insertIndex);
        const afterInsert = indexContent.substring(insertIndex);
        indexContent = beforeInsert + book5Section + afterInsert;
        
        // Write the updated index.html file
        await fs.writeFile(indexPath, indexContent, 'utf8');
        
        console.log('Book 5 section added to index.html');
        
    } catch (error) {
        console.error('Error updating index.html:', error);
    }
}

// Run the integration
if (require.main === module) {
    integrateBook5Data()
        .then(() => {
            console.log('Book 5 integration completed successfully!');
        })
        .catch(error => {
            console.error('Integration failed:', error);
            process.exit(1);
        });
}

module.exports = { integrateBook5Data };
