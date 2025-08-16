const fs = require('fs').promises;

async function completeBook4Update() {
    try {
        console.log('Adding all remaining Book 4 units (8-30)...');
        
        // Read the raw Book 4 text
        const book4Text = await fs.readFile('book4_raw.txt', 'utf8');
        
        // Parse all remaining units (8-30)
        const remainingUnits = parseRemainingUnits(book4Text);
        
        // Read current data.js
        const dataJsContent = await fs.readFile('data.js', 'utf8');
        
        // Add all remaining units to data.js
        const updatedDataJs = addRemainingUnitsToDataJs(dataJsContent, remainingUnits);
        
        // Write the updated data.js
        await fs.writeFile('data.js', updatedDataJs);
        
        console.log('All remaining Book 4 units added successfully!');
        console.log('Total units added:', Object.keys(remainingUnits).length);
        
        // Print summary
        Object.keys(remainingUnits).forEach(unitNum => {
            const unit = remainingUnits[unitNum];
            console.log(`Unit ${unitNum}: ${unit.words.length} words - ${unit.title}`);
        });
        
    } catch (error) {
        console.error('Error adding remaining Book 4 units:', error);
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

function parseRemainingUnits(text) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const units = {};
    let currentUnit = null;
    let currentUnitTitle = '';
    let currentWords = [];
    
    console.log(`Parsing remaining Book 4 units with ${lines.length} lines`);
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for unit headers (Unit X - Title or Unit X – Title)
        const unitMatch = line.match(/^Unit\s+(\d+)\s*[-–]\s*(.+)$/i);
        if (unitMatch) {
            const unitNum = parseInt(unitMatch[1]);
            
            // Only process units 8-30
            if (unitNum >= 8 && unitNum <= 30) {
                // Save previous unit if exists
                if (currentUnit && currentWords.length > 0) {
                    units[currentUnit] = {
                        title: currentUnitTitle,
                        words: currentWords
                    };
                }
                
                currentUnit = unitNum.toString();
                currentUnitTitle = line.trim();
                currentWords = [];
                console.log(`Found Unit ${currentUnit}: ${unitMatch[2]}`);
            }
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
    
    console.log(`Remaining units parsed: ${Object.keys(units).length} units found`);
    
    return units;
}

function addRemainingUnitsToDataJs(dataJsContent, remainingUnits) {
    // Find the end of the Book 4 units section
    const book4EndPattern = /(\s+]\s*\}\s*\}\s*,\s*"5":\s*\{)/;
    const match = dataJsContent.match(book4EndPattern);
    
    if (!match) {
        throw new Error('Could not find the end of Book 4 units section');
    }
    
    // Create the remaining units string
    let remainingUnitsString = '';
    Object.keys(remainingUnits).sort((a, b) => parseInt(a) - parseInt(b)).forEach(unitNum => {
        const unit = remainingUnits[unitNum];
        remainingUnitsString += `,\n    "${unitNum}": {\n      "title": "${unit.title}",\n      "words": [\n`;
        
        unit.words.forEach((word, index) => {
            remainingUnitsString += `        {\n          "word": "${word.word}",\n          "partOfSpeech": "${word.partOfSpeech}",\n          "meaning": "${word.meaning}",\n          "example": "${word.example}"\n        }`;
            if (index < unit.words.length - 1) {
                remainingUnitsString += ',';
            }
            remainingUnitsString += '\n';
        });
        
        remainingUnitsString += `      ]\n    }`;
    });
    
    // Insert the remaining units before the Book 5 section
    const updatedContent = dataJsContent.replace(
        book4EndPattern,
        remainingUnitsString + match[1]
    );
    
    return updatedContent;
}

// Run the update
completeBook4Update()
    .then(() => {
        console.log('Complete Book 4 update finished!');
    })
    .catch(error => {
        console.error('Complete Book 4 update failed:', error);
    });
