// Test script to verify Book 1 vocabulary
console.log("Testing 4000 Essential English Words Book 1 vocabulary...");

// Check if vocabulary data is available
if (typeof vocabularyData !== 'undefined') {
    console.log("✓ Vocabulary data loaded successfully");
    
    // Check Book 1
    if (vocabularyData.books && vocabularyData.books[1]) {
        const book1 = vocabularyData.books[1];
        console.log(`✓ Book 1: ${book1.title}`);
        
        // Count units
        const unitCount = Object.keys(book1.units).length;
        console.log(`✓ Units in Book 1: ${unitCount}`);
        
        // Count total words
        let totalWords = 0;
        Object.values(book1.units).forEach(unit => {
            totalWords += unit.words.length;
        });
        console.log(`✓ Total words in Book 1: ${totalWords}`);
        
        // Show first few units
        console.log("\nFirst few units:");
        Object.entries(book1.units).slice(0, 3).forEach(([unitNum, unit]) => {
            console.log(`  Unit ${unitNum}: ${unit.title} (${unit.words.length} words)`);
        });
        
        // Show sample words from Unit 1
        if (book1.units[1]) {
            console.log("\nSample words from Unit 1:");
            book1.units[1].words.slice(0, 5).forEach(word => {
                console.log(`  - ${word.word}: ${word.meaning}`);
            });
        }
        
    } else {
        console.log("✗ Book 1 not found in vocabulary data");
    }
} else {
    console.log("✗ Vocabulary data not loaded");
}

console.log("\nTest completed!");