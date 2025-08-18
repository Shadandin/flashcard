const mammoth = require('mammoth');
const fs = require('fs').promises;
const path = require('path');

async function extractBookData() {
    try {
        console.log('Extracting data from Book 3 and Book 4...');
        
        // Extract Book 3 data
        const book3Buffer = await fs.readFile('Book 3.docx');
        const book3Result = await mammoth.extractRawText({ buffer: book3Buffer });
        const book3Text = book3Result.value;
        
        console.log('Book 3 extracted successfully');
        console.log('Book 3 content length:', book3Text.length);
        
        // Extract Book 4 data
        const book4Buffer = await fs.readFile('Book 4.docx');
        const book4Result = await mammoth.extractRawText({ buffer: book4Buffer });
        const book4Text = book4Result.value;
        
        console.log('Book 4 extracted successfully');
        console.log('Book 4 content length:', book4Text.length);
        
        // Save raw extracted text for analysis
        await fs.writeFile('book3_raw.txt', book3Text);
        await fs.writeFile('book4_raw.txt', book4Text);
        
        console.log('Raw text files saved for analysis');
        
        // Parse the extracted data
        const book3Data = parseBookData(book3Text, 3);
        const book4Data = parseBookData(book4Text, 4);
        
        // Save parsed data
        await fs.writeFile('book3_parsed.json', JSON.stringify(book3Data, null, 2));
        await fs.writeFile('book4_parsed.json', JSON.stringify(book4Data, null, 2));
        
        console.log('Parsed data saved to JSON files');
        
        return { book3Data, book4Data };
        
    } catch (error) {
        console.error('Error extracting book data:', error);
        throw error;
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

function parseBookData(text, bookNumber) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const units = {};
    let currentUnit = null;
    let currentUnitTitle = '';
    let currentWords = [];
    
    console.log(`Parsing Book ${bookNumber} with ${lines.length} lines`);
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for unit headers (Unit X: Title or Unit X - Title)
        const unitMatch = line.match(/^Unit\s+(\d+)[:\-]\s*(.+)$/i);
        if (unitMatch) {
            // Save previous unit if exists
            if (currentUnit && currentWords.length > 0) {
                units[currentUnit] = {
                    title: currentUnitTitle || `Unit ${currentUnit}: ${getUnitTitle(currentUnit, bookNumber)}`,
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
        // The meaning and example are separated by a period but no space
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
            title: currentUnitTitle || `Unit ${currentUnit}: ${getUnitTitle(currentUnit, bookNumber)}`,
            words: currentWords
        };
    }
    
    console.log(`Book ${bookNumber} parsed: ${Object.keys(units).length} units found`);
    return units;
}

function getUnitTitle(unitNumber, bookNumber) {
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
    return themes[(unitNumber - 1) % themes.length];
}

// Run the extraction
extractBookData()
    .then(data => {
        console.log('Extraction completed successfully!');
        console.log('Book 3 units:', Object.keys(data.book3Data).length);
        console.log('Book 4 units:', Object.keys(data.book4Data).length);
        
        // Print summary of extracted data
        Object.keys(data.book3Data).forEach(unit => {
            console.log(`Book 3 Unit ${unit}: ${data.book3Data[unit].words.length} words`);
        });
        
        Object.keys(data.book4Data).forEach(unit => {
            console.log(`Book 4 Unit ${unit}: ${data.book4Data[unit].words.length} words`);
        });
    })
    .catch(error => {
        console.error('Extraction failed:', error);
    });
