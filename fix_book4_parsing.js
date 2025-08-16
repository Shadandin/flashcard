const mammoth = require('mammoth');
const fs = require('fs').promises;

async function fixBook4Parsing() {
    try {
        console.log('Fixing Book 4 parsing...');
        
        // Extract Book 4 data again
        const book4Buffer = await fs.readFile('Book 4.docx');
        const book4Result = await mammoth.extractRawText({ buffer: book4Buffer });
        const book4Text = book4Result.value;
        
        console.log('Book 4 extracted successfully');
        console.log('Book 4 content length:', book4Text.length);
        
        // Parse Book 4 with improved parsing
        const book4Data = parseBook4Data(book4Text);
        
        // Save parsed data
        await fs.writeFile('book4_parsed.json', JSON.stringify(book4Data, null, 2));
        
        console.log('Book 4 parsing completed!');
        console.log('Units found:', Object.keys(book4Data).length);
        
        return book4Data;
        
    } catch (error) {
        console.error('Error fixing Book 4 parsing:', error);
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
            console.log(`  Added word (alt): ${word.word}`);
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

// Run the fix
fixBook4Parsing()
    .then(data => {
        console.log('Book 4 parsing fixed successfully!');
        Object.keys(data).forEach(unit => {
            console.log(`Book 4 Unit ${unit}: ${data[unit].words.length} words`);
        });
    })
    .catch(error => {
        console.error('Book 4 parsing fix failed:', error);
    });
