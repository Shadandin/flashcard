const mammoth = require('mammoth');
const fs = require('fs').promises;
const path = require('path');

async function extractBook5Data() {
    try {
        console.log('Extracting data from Book 5...');
        
        // Check if Book 5 file exists
        const book5Path = 'Book 5.docx';
        try {
            await fs.access(book5Path);
        } catch (error) {
            console.error('Book 5.docx not found. Please upload the file first.');
            return null;
        }
        
        // Extract Book 5 data
        const book5Buffer = await fs.readFile(book5Path);
        const book5Result = await mammoth.extractRawText({ buffer: book5Buffer });
        const book5Text = book5Result.value;
        
        console.log('Book 5 extracted successfully');
        console.log('Book 5 content length:', book5Text.length);
        
        // Save raw extracted text for analysis
        await fs.writeFile('book5_raw.txt', book5Text);
        
        console.log('Raw text file saved for analysis');
        
        // Parse the extracted data
        const book5Data = parseBookData(book5Text, 5);
        
        // Save parsed data
        await fs.writeFile('book5_parsed.json', JSON.stringify(book5Data, null, 2));
        
        console.log('Parsed data saved to JSON file');
        
        return book5Data;
        
    } catch (error) {
        console.error('Error extracting Book 5 data:', error);
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
            continue;
        }
        
        // Alternative word format: word (partOfSpeech) – meaning
        const altWordMatch = line.match(/^([A-Za-z]+)\s*\(([A-Za-z\/]+)\)\s*[-–]\s*(.+)$/);
        if (altWordMatch && currentUnit) {
            const word = {
                word: altWordMatch[1].trim(),
                partOfSpeech: normalizePartOfSpeech(altWordMatch[2].trim()),
                meaning: altWordMatch[3].trim(),
                example: "Example sentence not provided."
            };
            currentWords.push(word);
            continue;
        }
    }
    
    // Save the last unit
    if (currentUnit && currentWords.length > 0) {
        units[currentUnit] = {
            title: currentUnitTitle || `Unit ${currentUnit}: ${getUnitTitle(currentUnit, bookNumber)}`,
            words: currentWords
        };
    }
    
    console.log(`Parsed ${Object.keys(units).length} units for Book ${bookNumber}`);
    
    return {
        title: `Book ${bookNumber} - ${getBookLevel(bookNumber)}`,
        units: units
    };
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

function getUnitTitle(unit, book) {
    // Default unit themes for Book 5 (Upper-Intermediate Level)
    const themes = [
        "Academic Vocabulary", "Business and Economics", "Science and Technology", 
        "Medicine and Health", "Law and Politics", "Arts and Literature",
        "Psychology and Behavior", "Environment and Ecology", "Media and Communication",
        "Education and Learning", "Social Issues", "Cultural Studies",
        "Philosophy and Ethics", "History and Archaeology", "Geography and Travel",
        "Sports and Recreation", "Food and Nutrition", "Fashion and Design",
        "Music and Entertainment", "Religion and Spirituality", "Mathematics and Logic",
        "Chemistry and Physics", "Biology and Genetics", "Engineering and Architecture",
        "Finance and Investment", "Marketing and Advertising", "Human Resources",
        "International Relations", "Climate and Weather", "Space and Astronomy"
    ];
    return themes[(unit - 1) % themes.length];
}

// Run the extraction
if (require.main === module) {
    extractBook5Data()
        .then(data => {
            if (data) {
                console.log('Book 5 extraction completed successfully!');
                console.log(`Found ${Object.keys(data.units).length} units`);
                console.log('Total words:', Object.values(data.units).reduce((sum, unit) => sum + unit.words.length, 0));
            }
        })
        .catch(error => {
            console.error('Extraction failed:', error);
            process.exit(1);
        });
}

module.exports = { extractBook5Data };
