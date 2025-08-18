const fs = require('fs').promises;

async function integrateBookData() {
    try {
        console.log('Integrating Book 3 and Book 4 data into flashcard application...');
        
        // Read the parsed data
        const book3Data = JSON.parse(await fs.readFile('book3_parsed.json', 'utf8'));
        const book4Data = JSON.parse(await fs.readFile('book4_parsed.json', 'utf8'));
        
        console.log('Book 3 units found:', Object.keys(book3Data).length);
        console.log('Book 4 units found:', Object.keys(book4Data).length);
        
        // Create the updated data structure
        const updatedData = createUpdatedDataStructure(book3Data, book4Data);
        
        // Generate the new data.js content
        const newDataJsContent = generateDataJsContent(updatedData);
        
        // Write the updated data.js file
        await fs.writeFile('data.js', newDataJsContent);
        
        console.log('Successfully integrated Book 3 and Book 4 data!');
        console.log('Updated data.js with real unit titles and complete word lists.');
        
    } catch (error) {
        console.error('Error integrating book data:', error);
    }
}

function createUpdatedDataStructure(book3Data, book4Data) {
    const vocabularyData = {
        books: {}
    };
    
    // Add Book 3 with real data and titles
    vocabularyData.books[3] = {
        title: "Book 3 - Pre-Intermediate Level",
        units: {}
    };
    
    // Add Book 3 units with real titles and words
    Object.keys(book3Data).forEach(unitNum => {
        const unitData = book3Data[unitNum];
        vocabularyData.books[3].units[unitNum] = {
            title: unitData.title,
            words: unitData.words
        };
    });
    
    // Add Book 4 with real data and titles
    vocabularyData.books[4] = {
        title: "Book 4 - Intermediate Level",
        units: {}
    };
    
    // Add Book 4 units with real titles and words
    Object.keys(book4Data).forEach(unitNum => {
        const unitData = book4Data[unitNum];
        vocabularyData.books[4].units[unitNum] = {
            title: unitData.title,
            words: unitData.words
        };
    });
    
    // Add empty Books 5-6 (waiting for upload)
    for (let book = 5; book <= 6; book++) {
        vocabularyData.books[book] = {
            title: `Book ${book} - ${getBookLevel(book)}`,
            units: {}
        };
        
        // Create 30 units for each book with empty word slots
        for (let unit = 1; unit <= 30; unit++) {
            vocabularyData.books[book].units[unit] = {
                title: `Unit ${unit}: ${getUnitTheme(unit)}`,
                words: Array(20).fill().map(() => ({ word: "", partOfSpeech: "", meaning: "", example: "" }))
            };
        }
    }
    
    return vocabularyData;
}

function getBookLevel(book) {
    const levels = [
        "Beginner Level",
        "Elementary Level", 
        "Pre-Intermediate Level",
        "Intermediate Level",
        "Upper-Intermediate Level",
        "Advanced Level"
    ];
    return levels[book - 1] || "Advanced Level";
}

function getUnitTheme(unit) {
    const themes = [
        "Basic Words", "Family and Home", "Daily Activities", "Food and Cooking",
        "Clothing and Fashion", "Transportation", "Work and Jobs", "Education",
        "Health and Medicine", "Sports and Exercise", "Entertainment", "Technology",
        "Nature and Environment", "Travel and Tourism", "Business and Money",
        "Emotions and Feelings", "Time and Calendar", "Weather and Seasons",
        "Shopping and Services", "Communication", "Hobbies and Interests",
        "Social Life", "Culture and Arts", "Science and Discovery",
        "History and Politics", "Religion and Philosophy", "Law and Justice",
        "Media and News", "Relationships", "Personal Development"
    ];
    return themes[(unit - 1) % themes.length];
}

function generateDataJsContent(vocabularyData) {
    let content = `// 4000 Essential English Words Data Structure
const vocabularyData = {
    books: {}
};

// Book 3 data with real unit titles and complete word lists
const book3Data = ${JSON.stringify(vocabularyData.books[3], null, 2)};

// Book 4 data with real unit titles and complete word lists
const book4Data = ${JSON.stringify(vocabularyData.books[4], null, 2)};

// Generate books with actual data (Books 3-4) and empty structure (Books 5-6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = book3Data;
    
    // Add Book 4 with actual data
    vocabularyData.books[4] = book4Data;
    
    // Add empty Books 5-6 (waiting for file uploads)
    for (let book = 5; book <= 6; book++) {
        vocabularyData.books[book] = {
            title: \`Book \${book} - \${getBookLevel(book)}\`,
            units: {}
        };
        
        // Create 30 units for each book with empty word slots
        for (let unit = 1; unit <= 30; unit++) {
            vocabularyData.books[book].units[unit] = {
                title: \`Unit \${unit}: \${getUnitTheme(unit)}\`,
                words: Array(20).fill().map(() => ({ word: "", partOfSpeech: "", meaning: "", example: "" }))
            };
        }
    }
}

function getBookLevel(book) {
    const levels = [
        "Beginner Level",
        "Elementary Level", 
        "Pre-Intermediate Level",
        "Intermediate Level",
        "Upper-Intermediate Level",
        "Advanced Level"
    ];
    return levels[book - 1] || "Advanced Level";
}

function getUnitTheme(unit) {
    const themes = [
        "Basic Words", "Family and Home", "Daily Activities", "Food and Cooking",
        "Clothing and Fashion", "Transportation", "Work and Jobs", "Education",
        "Health and Medicine", "Sports and Exercise", "Entertainment", "Technology",
        "Nature and Environment", "Travel and Tourism", "Business and Money",
        "Emotions and Feelings", "Time and Calendar", "Weather and Seasons",
        "Shopping and Services", "Communication", "Hobbies and Interests",
        "Social Life", "Culture and Arts", "Science and Discovery",
        "History and Politics", "Religion and Philosophy", "Law and Justice",
        "Media and News", "Relationships", "Personal Development"
    ];
    return themes[(unit - 1) % themes.length];
}

// Initialize the data
generateSampleData();

// Export the data
window.vocabularyData = vocabularyData;`;

    return content;
}

// Run the integration
integrateBookData()
    .then(() => {
        console.log('Integration completed successfully!');
        console.log('Your flashcard application now has:');
        console.log('- Book 3 with real unit titles and complete word lists');
        console.log('- Book 4 with real unit titles and complete word lists');
        console.log('- Empty Books 5-6 (waiting for file uploads)');
    })
    .catch(error => {
        console.error('Integration failed:', error);
    });
