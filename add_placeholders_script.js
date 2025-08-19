// Add Placeholders to Flashcard App - Console Script
// Copy and paste this entire script into your browser console on the flashcard app page

(function() {
    console.log('🚀 Starting Placeholder Addition Script...');
    
    // Check if bookData exists
    if (typeof bookData === 'undefined') {
        console.error('❌ bookData not found. Make sure you are on the flashcard app page.');
        return;
    }
    
    console.log('✅ Found bookData, starting analysis...');
    
    let totalPlaceholdersAdded = 0;
    let incompleteUnits = 0;
    
    // Process each book
    for (const [bookNum, bookInfo] of Object.entries(bookData)) {
        console.log(`📚 Processing Book ${bookNum}...`);
        
        // Process each unit
        for (const [unitNum, unitWords] of Object.entries(bookInfo.units)) {
            const currentCount = unitWords.length;
            
            if (currentCount < 20) {
                incompleteUnits++;
                const placeholdersNeeded = 20 - currentCount;
                console.log(`  📝 Unit ${unitNum}: ${currentCount}/20 words, adding ${placeholdersNeeded} placeholders`);
                
                // Add placeholders
                for (let i = 0; i < placeholdersNeeded; i++) {
                    const placeholderNum = currentCount + i + 1;
                    const placeholderWord = `placeholder_${unitNum}_${placeholderNum}`;
                    
                    unitWords.push({
                        word: placeholderWord,
                        partOfSpeech: "noun",
                        meaning: `Placeholder word ${placeholderNum} for Unit ${unitNum}`,
                        example: `This is placeholder ${placeholderNum} for learning purposes.`
                    });
                }
                
                totalPlaceholdersAdded += placeholdersNeeded;
            } else {
                console.log(`  ✅ Unit ${unitNum}: ${currentCount}/20 words (complete)`);
            }
        }
    }
    
    console.log(`\n🎉 Placeholder Addition Complete!`);
    console.log(`📊 Statistics:`);
    console.log(`   - Total placeholders added: ${totalPlaceholdersAdded}`);
    console.log(`   - Units that needed placeholders: ${incompleteUnits}`);
    
    // Try to update the app display
    if (typeof updateDisplay === 'function') {
        console.log('🔄 Updating app display...');
        updateDisplay();
        console.log('✅ App display updated successfully!');
    } else {
        console.log('⚠️ updateDisplay function not found. Please refresh the page to see changes.');
    }
    
    // Save to localStorage if available
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('flashcardData', JSON.stringify(bookData));
            console.log('💾 Data saved to localStorage');
        } catch (error) {
            console.log('⚠️ Could not save to localStorage:', error.message);
        }
    }
    
    console.log('\n🎯 Next steps:');
    console.log('1. Refresh the page to see all changes');
    console.log('2. Check that all units now have 20 words');
    console.log('3. You can manually edit placeholder words later');
    
})();
