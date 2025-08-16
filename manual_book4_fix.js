const fs = require('fs').promises;

async function fixBook4Data() {
    try {
        console.log('Fixing Book 4 data manually...');
        
        // Read the raw Book 4 text
        const book4Text = await fs.readFile('book4_raw.txt', 'utf8');
        
        // Parse Book 4 data
        const book4Data = parseBook4Data(book4Text);
        
        // Read current data.js
        const dataJsContent = await fs.readFile('data.js', 'utf8');
        
        // Update the Book 4 data in data.js
        const updatedDataJs = updateDataJsWithBook4(dataJsContent, book4Data);
        
        // Write the updated data.js
        await fs.writeFile('data.js', updatedDataJs);
        
        console.log('Book 4 data fixed successfully!');
        console.log('Units found:', Object.keys(book4Data).length);
        
    } catch (error) {
        console.error('Error fixing Book 4 data:', error);
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

function parseBook4Data(text) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const units = {};
    let currentUnit = null;
    let currentUnitTitle = '';
    let currentWords = [];
    
    console.log(`Parsing Book 4 with ${lines.length} lines`);
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for unit headers (Unit X - Title)
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
            console.log(`  Added word: ${word.word} (${word.partOfSpeech})`);
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
    return units;
}

function updateDataJsWithBook4(dataJsContent, book4Data) {
    // Create the Book 4 data string
    const book4DataString = JSON.stringify(book4Data, null, 2);
    
    // Replace the empty Book 4 data with the real data
    const updatedContent = dataJsContent.replace(
        /const book4Data = \{[^}]*\};/s,
        `const book4Data = ${book4DataString};`
    );
    
    return updatedContent;
}

// Run the fix
fixBook4Data()
    .then(() => {
        console.log('Book 4 data integration completed successfully!');
    })
    .catch(error => {
        console.error('Book 4 data integration failed:', error);
    });
