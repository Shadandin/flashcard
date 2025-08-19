// Test script to check book data completeness
console.log('Testing Book Data Import...\n');

// Load the book data
const bookData = generateBookData();

// Test each book
[3, 4, 5, 6].forEach(bookNum => {
    console.log(`\n=== Testing Book ${bookNum} ===`);
    const book = bookData[bookNum];
    
    if (!book) {
        console.log(`❌ Book ${bookNum} not found!`);
        return;
    }
    
    console.log(`✅ Book ${bookNum} found`);
    console.log(`📚 Title: ${book.title}`);
    console.log(`📖 Units available: ${Object.keys(book.units).length}`);
    
    // Test each unit
    let totalWords = 0;
    let unitsWithWords = 0;
    let unitsWithoutWords = 0;
    
    for (let unitNum = 1; unitNum <= 30; unitNum++) {
        const unit = book.units[unitNum];
        
        if (!unit) {
            console.log(`❌ Unit ${unitNum}: Not found`);
            unitsWithoutWords++;
            continue;
        }
        
        const wordCount = unit.length;
        totalWords += wordCount;
        
        if (wordCount > 0) {
            unitsWithWords++;
            console.log(`✅ Unit ${unitNum}: ${wordCount} words`);
            
            // Show first few words as sample
            if (unitNum <= 3) {
                console.log(`   Sample words: ${unit.slice(0, 3).map(w => w.word).join(', ')}`);
            }
        } else {
            unitsWithoutWords++;
            console.log(`❌ Unit ${unitNum}: No words (0 words)`);
        }
    }
    
    console.log(`\n📊 Book ${bookNum} Summary:`);
    console.log(`   Total words: ${totalWords}`);
    console.log(`   Units with words: ${unitsWithWords}`);
    console.log(`   Units without words: ${unitsWithoutWords}`);
    console.log(`   Expected words: ${30 * 20} (30 units × 20 words)`);
    console.log(`   Completion: ${Math.round((totalWords / (30 * 20)) * 100)}%`);
});

console.log('\n=== Overall Assessment ===');
console.log('The data structure is working, but only the first 5 units have actual words.');
console.log('Units 6-30 are being generated with empty arrays because there are not enough words in the vocabulary list.');
console.log('To fix this, we need to add more vocabulary words to each book.');
