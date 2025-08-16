const fs = require('fs').promises;

async function extractAllBook4Units() {
    try {
        console.log('Extracting all 30 units from Book 4...');
        
        // Read the raw Book 4 text
        const book4Text = await fs.readFile('book4_raw.txt', 'utf8');
        
        // Parse all Book 4 units
        const book4Data = parseAllBook4Units(book4Text);
        
        // Read current data.js
        const dataJsContent = await fs.readFile('data.js', 'utf8');
        
        // Update the Book 4 data in data.js
        const updatedDataJs = updateDataJsWithCompleteBook4(dataJsContent, book4Data);
        
        // Write the updated data.js
        await fs.writeFile('data.js', updatedDataJs);
        
        console.log('All Book 4 units extracted successfully!');
        console.log('Total units found:', Object.keys(book4Data.units).length);
        
        // Print summary
        Object.keys(book4Data.units).forEach(unitNum => {
            const unit = book4Data.units[unitNum];
            console.log(`Unit ${unitNum}: ${unit.words.length} words - ${unit.title}`);
        });
        
    } catch (error) {
        console.error('Error extracting Book 4 units:', error);
    }
}

function normalizePartOfSpeech(pos) {
    const posMap = {
        'adj': 'adjective',
        'adv': 'adverb',
        'noun': 'noun',
        'verb': 'verb',
        'prep': 'preposition',
        'conj': 'conjunction',
        'interj': 'interjection'
    };
    return posMap[pos.toLowerCase()] || pos;
}

function parseAllBook4Units(text) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const units = {};
    let currentUnit = null;
    let currentUnitTitle = '';
    let currentWords = [];
    
    console.log(`Parsing Book 4 with ${lines.length} lines`);
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for unit headers (Unit X - Title or Unit X – Title)
        const unitMatch = line.match(/^Unit\s+(\d+)\s*[-–]\s*(.+)$/i);
        if (unitMatch) {
            // Save previous unit if exists
            if (currentUnit && currentWords.length > 0) {
                units[currentUnit] = {
                    title: currentUnitTitle,
                    words: currentWords
                };
            }
            
            currentUnit = unitMatch[1];
            currentUnitTitle = line.trim();
            currentWords = [];
            console.log(`Found Unit ${currentUnit}: ${unitMatch[2]}`);
            continue;
        }
        
        // Look for word entries with the format: word (partOfSpeech) – meaning.Example
        const wordMatch = line.match(/^([A-Za-z]+)\s*\(([A-Za-z\/]+)\)\s*[-–]\s*(.+?)\.(.+)$/);
        if (wordMatch && currentUnit) {
            const word = {
                word: wordMatch[1].trim(),
                partOfSpeech: normalizePartOfSpeech(wordMatch[2].trim()),
                meaning: wordMatch[3].trim(),
                example: wordMatch[4].trim()
            };
            currentWords.push(word);
        }
        
        // Alternative pattern for word entries without parentheses
        const altWordMatch = line.match(/^([A-Za-z]+)\s*[-–]\s*(.+?)\.(.+)$/);
        if (altWordMatch && currentUnit && !line.includes('(')) {
            const word = {
                word: altWordMatch[1].trim(),
                partOfSpeech: "Noun", // Default to Noun if not specified
                meaning: altWordMatch[2].trim(),
                example: altWordMatch[3].trim()
            };
            currentWords.push(word);
        }
    }
    
    // Save the last unit
    if (currentUnit && currentWords.length > 0) {
        units[currentUnit] = {
            title: currentUnitTitle,
            words: currentWords
        };
    }
    
    console.log(`Book 4 parsed: ${Object.keys(units).length} units found`);
    
    return {
        title: "Book 4 - Intermediate Level",
        units: units
    };
}

function updateDataJsWithCompleteBook4(dataJsContent, book4Data) {
    // Create the Book 4 data string
    const book4DataString = JSON.stringify(book4Data, null, 2);
    
    // Replace the existing Book 4 data with the complete data
    const updatedContent = dataJsContent.replace(
        /const book4Data = \{[^}]*\};/s,
        `const book4Data = ${book4DataString};`
    );
    
    return updatedContent;
}

// Run the extraction
extractAllBook4Units()
    .then(() => {
        console.log('Complete Book 4 integration finished!');
    })
    .catch(error => {
        console.error('Complete Book 4 integration failed:', error);
    });
