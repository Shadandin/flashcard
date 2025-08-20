// Enhanced Flashcard App with Study Statistics, Spaced Repetition, and Progress Tracking
let currentBook = null;
let currentUnit = null;
let currentCardIndex = 0;
let studyMode = 'normal'; // 'normal', 'review', 'difficult'
let isCardFlipped = false;

// Enhanced user progress with study statistics
let userProgress = {
    books: {
        3: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 }, wordDifficulties: {} },
        4: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 }, wordDifficulties: {} },
        5: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 }, wordDifficulties: {} },
        6: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 }, wordDifficulties: {} }
    },
    globalStats: {
        totalStudyTime: 0,
        totalSessions: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: null,
        wordsLearned: 0,
        difficultWords: []
    },
    spacedRepetition: {},
    sessionStartTime: null
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadBookDataFromLocalStorage(); // Load any locally saved words
    initializeApp();
    loadUserProgress();
    setupEventListeners();
    updateGlobalStats();
});

function initializeApp() {
    loadProgressFromStorage();
    updateProgressDisplay();
    generateUnitCards();
    updateGlobalStats();
}

function setupEventListeners() {
    // Book selection
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', function() {
            const bookNumber = parseInt(this.dataset.book);
            selectBook(bookNumber);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Touch/swipe support
    setupTouchSupport();
}

// Enhanced Book Selection
function selectBook(bookNumber) {
    currentBook = bookNumber;
    document.getElementById('currentBookNumber').textContent = bookNumber;
    showUnitSelection();
    generateUnitCards();
}

function showBookSelection() {
    hideAllScreens();
    document.getElementById('bookSelection').classList.add('active');
    updateBookProgress();
    updateGlobalStats();
}

function showUnitSelection() {
    hideAllScreens();
    document.getElementById('unitSelection').classList.add('active');
}

function showFlashcardScreen() {
    hideAllScreens();
    document.getElementById('flashcardScreen').classList.add('active');
    startStudySession();
    loadCurrentCard();
    generateIndicatorDots();
    
    // Hide difficulty controls when in difficult words mode
    const difficultyControls = document.querySelector('.difficulty-controls');
    if (difficultyControls) {
        if (studyMode === 'difficult') {
            difficultyControls.style.display = 'none';
        } else {
            difficultyControls.style.display = 'block';
        }
    }
}

function showUnitPreviewScreen() {
    hideAllScreens();
    document.getElementById('unitPreviewScreen').classList.add('active');
    document.getElementById('previewUnitNumber').textContent = currentUnit;
    updatePreviewProgress();
    displayCurrentWords();
}



function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Enhanced Unit Management
function generateUnitCards() {
    const unitsGrid = document.getElementById('unitsGrid');
    unitsGrid.innerHTML = '';
    
    for (let i = 1; i <= 30; i++) {
        const unitCard = createUnitCard(i);
        unitsGrid.appendChild(unitCard);
    }
}

function createUnitCard(unitNumber) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.dataset.unit = unitNumber;
    
    const isUnlocked = isUnitUnlocked(unitNumber);
    const progress = getUnitProgress(unitNumber);
    const difficulty = getUnitDifficulty(unitNumber);
    
    let wordCount = 20; // Default
    if (currentBook && bookData[currentBook] && bookData[currentBook].units[unitNumber]) {
        wordCount = bookData[currentBook].units[unitNumber].length;
    }
    
    if (!isUnlocked) {
        card.classList.add('locked');
    }
    
    // Add difficulty indicator
    const difficultyClass = difficulty > 0.7 ? 'difficult' : difficulty > 0.4 ? 'medium' : 'easy';
    
    card.innerHTML = `
        <div class="unit-number">Unit ${unitNumber}</div>
        <div class="unit-title">Vocabulary Practice</div>
        <div class="unit-progress">${progress}/${wordCount} words</div>
        <div class="difficulty-indicator ${difficultyClass}">
            <span class="difficulty-text">${difficulty > 0.7 ? 'Hard' : difficulty > 0.4 ? 'Medium' : 'Easy'}</span>
        </div>
        ${progress > 0 ? `<div class="completion-badge">${Math.round((progress/wordCount)*100)}%</div>` : ''}
        <div class="unit-actions">
            <button class="action-btn study-btn" onclick="event.stopPropagation(); selectUnit(${unitNumber})">
                <i class="fas fa-play"></i> Study
            </button>
            <button class="action-btn preview-btn" onclick="event.stopPropagation(); selectUnitForPreview(${unitNumber})">
                <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn practice-btn" onclick="event.stopPropagation(); startPractice(${unitNumber})">
                <i class="fas fa-question-circle"></i>
            </button>
        </div>
    `;
    
    if (isUnlocked) {
        card.addEventListener('click', () => selectUnit(unitNumber));
    }
    
    return card;
}

function isUnitUnlocked(unitNumber) {
    if (unitNumber === 1) return true;
    
    const previousUnitProgress = getUnitProgress(unitNumber - 1);
    let requiredProgress = 20; // Default
    if (currentBook && bookData[currentBook] && bookData[currentBook].units[unitNumber - 1]) {
        requiredProgress = bookData[currentBook].units[unitNumber - 1].length;
    }
    
    return previousUnitProgress >= requiredProgress * 0.8; // 80% completion to unlock next unit
}

function getUnitProgress(unitNumber) {
    if (!currentBook || !userProgress.books[currentBook] || !userProgress.books[currentBook].units[unitNumber]) {
        return 0;
    }
    return userProgress.books[currentBook].units[unitNumber].completed || 0;
}

function getUnitDifficulty(unitNumber) {
    if (!currentBook || !userProgress.books[currentBook] || !userProgress.books[currentBook].units[unitNumber]) {
        return 0;
    }
    const unitData = userProgress.books[currentBook].units[unitNumber];
    if (!unitData.attempts || unitData.attempts === 0) return 0;
    
    return unitData.incorrect / unitData.attempts;
}

function selectUnit(unitNumber) {
    currentUnit = unitNumber;
    currentCardIndex = 0;
    studyMode = 'normal';
    document.getElementById('currentUnitNumber').textContent = unitNumber;
    showFlashcardScreen();
}

function selectUnitForPreview(unitNumber) {
    currentUnit = unitNumber;
    showUnitPreviewScreen();
}

// Enhanced Flashcard Management
function loadCurrentCard() {
    if (studyMode === 'difficult') {
        loadDifficultWordCard();
        return;
    }
    
    const card = getCurrentCard();
    if (!card) return;
    
    // Reset card state
    isCardFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');
    
    // Update front side
    document.getElementById('wordText').textContent = card.word;
    document.getElementById('partOfSpeech').textContent = card.partOfSpeech;
    
    // Update back side
    document.getElementById('meaningTextBack').textContent = card.meaning;
    document.getElementById('exampleTextBack').textContent = card.example;
    
    // Update progress display
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    document.getElementById('currentCardIndex').textContent = currentCardIndex + 1;
    document.getElementById('totalCards').textContent = maxCards;
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Show difficulty indicator if available
    updateCardDifficultyIndicator();
    
    // Update keyboard shortcuts display based on study mode
    updateKeyboardShortcuts();
}

function getCurrentCard() {
    if (!currentBook || !currentUnit || !bookData[currentBook] || !bookData[currentBook].units[currentUnit]) {
        return {
            word: `Word ${currentCardIndex + 1}`,
            partOfSpeech: 'noun',
            meaning: 'This is a placeholder meaning for the word.',
            example: 'This is a placeholder example sentence using the word.'
        };
    }
    
    const unitWords = bookData[currentBook].units[currentUnit];
    if (currentCardIndex >= unitWords.length) {
        return {
            word: `Word ${currentCardIndex + 1}`,
            partOfSpeech: 'noun',
            meaning: 'This is a placeholder meaning for the word.',
            example: 'This is a placeholder example sentence using the word.'
        };
    }
    
    return unitWords[currentCardIndex];
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    isCardFlipped = !isCardFlipped;
    flashcard.classList.toggle('flipped');
    
    // Track card interaction
    if (isCardFlipped) {
        trackCardInteraction('flip');
    }
}

function nextCard() {
    if (studyMode === 'difficult') {
        const difficultWords = window.currentDifficultWords || [];
        if (currentCardIndex < difficultWords.length - 1) {
            currentCardIndex++;
            loadCurrentCard();
            updateIndicatorDots();
        } else {
            showDifficultWordsPracticeResults();
        }
        return;
    }
    
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    if (currentCardIndex < maxCards - 1) {
        currentCardIndex++;
        loadCurrentCard();
        updateIndicatorDots();
    } else {
        completeUnit();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCurrentCard();
        updateIndicatorDots();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.textContent = currentCardIndex === maxCards - 1 ? 'Complete Unit' : 'Next';
}

// Study Statistics and Tracking
function startStudySession() {
    userProgress.sessionStartTime = Date.now();
    if (!userProgress.books[currentBook].stats.sessions) {
        userProgress.books[currentBook].stats.sessions = 0;
    }
    userProgress.books[currentBook].stats.sessions++;
    userProgress.globalStats.totalSessions++;
}

function trackCardInteraction(action) {
    if (!currentBook || !currentUnit) return;
    
    // Initialize unit progress if it doesn't exist
    if (!userProgress.books[currentBook].units[currentUnit]) {
        userProgress.books[currentBook].units[currentUnit] = {
            completed: 0,
            attempts: 0,
            incorrect: 0,
            lastStudied: null,
            difficulty: 0
        };
    }
    
    const unitData = userProgress.books[currentBook].units[currentUnit];
    unitData.attempts = (unitData.attempts || 0) + 1;
    unitData.lastStudied = Date.now();
    
    if (action === 'incorrect') {
        unitData.incorrect = (unitData.incorrect || 0) + 1;
        addToDifficultWords();
    }
    
    saveUserProgress();
}

function addToDifficultWords() {
    const currentCard = getCurrentCard();
    const wordKey = `${currentBook}-${currentUnit}-${currentCardIndex}`;
    
    if (!userProgress.globalStats.difficultWords.includes(wordKey)) {
        userProgress.globalStats.difficultWords.push(wordKey);
    }
}

function updateCardDifficultyIndicator() {
    const difficultyIndicator = document.querySelector('.card-difficulty');
    const difficultyBtn = document.getElementById('difficultyToggleBtn');
    const difficultyBtnText = document.getElementById('difficultyBtnText');
    
    if (!difficultyIndicator || !difficultyBtn || !difficultyBtnText) return;
    
    if (!currentBook || !currentUnit) return;
    
    const wordKey = `${currentUnit}-${currentCardIndex}`;
    const isDifficult = userProgress.books[currentBook].wordDifficulties?.[wordKey] === 3;
    
    // Update difficulty indicator on the card
    difficultyIndicator.className = 'card-difficulty';
    
    if (isDifficult) {
        difficultyIndicator.classList.add('difficult');
        difficultyIndicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Difficult';
        
        // Update button to show "Remove from Difficult"
        difficultyBtn.classList.add('active');
        difficultyBtnText.textContent = 'Remove from Difficult';
    } else {
        difficultyIndicator.classList.add('normal');
        difficultyIndicator.innerHTML = '';
        
        // Update button to show "Mark as Difficult"
        difficultyBtn.classList.remove('active');
        difficultyBtnText.textContent = 'Mark as Difficult';
    }
}

// Enhanced Progress Management
function completeUnit() {
    if (!currentBook || !currentUnit) return;
    
    // Calculate session time
    const sessionTime = Date.now() - userProgress.sessionStartTime;
    userProgress.books[currentBook].stats.totalTime += sessionTime;
    userProgress.globalStats.totalStudyTime += sessionTime;
    
    // Update streak
    updateStudyStreak();
    
    // Initialize unit progress if it doesn't exist
    if (!userProgress.books[currentBook].units[currentUnit]) {
        userProgress.books[currentBook].units[currentUnit] = { completed: 0 };
    }
    
    // Get the actual number of words in the current unit
    let maxCards = 20; // Default
    if (bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    // Mark unit as completed
    userProgress.books[currentBook].units[currentUnit].completed = maxCards;
    
    // Save progress
    saveUserProgress();
    updateProgressDisplay();
    
    // Show completion modal
    showCompletionModal();
}

function updateStudyStreak() {
    const today = new Date().toDateString();
    const lastStudy = userProgress.globalStats.lastStudyDate;
    
    if (lastStudy === today) {
        // Already studied today, no change
        return;
    } else if (lastStudy === new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()) {
        // Studied yesterday, continue streak
        userProgress.globalStats.currentStreak++;
    } else {
        // Break in streak, reset
        userProgress.globalStats.currentStreak = 1;
    }
    
    userProgress.globalStats.lastStudyDate = today;
    
    // Update longest streak
    if (userProgress.globalStats.currentStreak > userProgress.globalStats.longestStreak) {
        userProgress.globalStats.longestStreak = userProgress.globalStats.currentStreak;
    }
}

function showCompletionModal() {
    const modal = document.createElement('div');
    modal.className = 'completion-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>🎉 Unit Completed!</h2>
            <div class="completion-stats">
                <div class="stat-item">
                    <span class="stat-label">Study Time:</span>
                    <span class="stat-value">${formatTime(Date.now() - userProgress.sessionStartTime)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Current Streak:</span>
                    <span class="stat-value">${userProgress.globalStats.currentStreak} days</span>
                </div>
            </div>
            <div class="modal-actions">
                <button onclick="continueToNextUnit()" class="btn-primary">Continue to Next Unit</button>
                <button onclick="returnToUnits()" class="btn-secondary">Back to Units</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function continueToNextUnit() {
    const modal = document.querySelector('.completion-modal');
    if (modal) modal.remove();
    
    if (currentUnit < 30) {
        selectUnit(currentUnit + 1);
    } else {
        returnToUnits();
    }
}

function returnToUnits() {
    const modal = document.querySelector('.completion-modal');
    if (modal) modal.remove();
    showUnitSelection();
}

// Progress Display
function updateProgressDisplay() {
    updateBookProgress();
    updateGlobalStats();
}

function updateBookProgress() {
    document.querySelectorAll('.book-card').forEach(card => {
        const bookNumber = parseInt(card.dataset.book);
        const progress = calculateBookProgress(bookNumber);
        const progressBar = card.querySelector('.progress');
        const progressText = card.querySelector('.progress-text');
        
        // Get difficult words count
        const difficultWords = getDifficultWordsForBook(bookNumber);
        const difficultCount = difficultWords.length;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}% Complete`;
        
        // Show/hide difficult words button based on count
        const difficultWordsBtn = card.querySelector('.difficult-words-btn');
        if (difficultWordsBtn) {
            if (difficultCount > 0) {
                difficultWordsBtn.style.display = 'flex';
                difficultWordsBtn.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    Practice ${difficultCount} Difficult Words
                `;
            } else {
                difficultWordsBtn.style.display = 'none';
            }
        }
    });
}

function calculateBookProgress(bookNumber) {
    if (!userProgress.books[bookNumber]) return 0;
    
    const units = userProgress.books[bookNumber].units;
    let completedUnits = 0;
    
    for (let i = 1; i <= 30; i++) {
        let requiredProgress = 20; // Default
        if (bookData[bookNumber] && bookData[bookNumber].units[i]) {
            requiredProgress = bookData[bookNumber].units[i].length;
        }
        
        if (units[i] && units[i].completed >= requiredProgress) {
            completedUnits++;
        }
    }
    
    return Math.round((completedUnits / 30) * 100);
}

function updateGlobalStats() {
    const statsContainer = document.querySelector('.global-stats');
    if (!statsContainer) return;
    
    statsContainer.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">🔥</div>
            <div class="stat-info">
                <div class="stat-value">${userProgress.globalStats.currentStreak}</div>
                <div class="stat-label">Day Streak</div>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-info">
                <div class="stat-value">${formatTime(userProgress.globalStats.totalStudyTime)}</div>
                <div class="stat-label">Total Time</div>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-info">
                <div class="stat-value">${userProgress.globalStats.totalSessions}</div>
                <div class="stat-label">Sessions</div>
            </div>
        </div>
    `;
}

// Indicator Dots
function generateIndicatorDots() {
    const dotsContainer = document.getElementById('indicatorDots');
    dotsContainer.innerHTML = '';
    
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    for (let i = 0; i < maxCards; i++) {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        dot.dataset.index = i;
        
        if (i === currentCardIndex) {
            dot.classList.add('active');
        }
        
        dot.addEventListener('click', () => {
            currentCardIndex = i;
            loadCurrentCard();
            updateIndicatorDots();
        });
        
        dotsContainer.appendChild(dot);
    }
}

function updateIndicatorDots() {
    document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        
        if (index === currentCardIndex) {
            dot.classList.add('active');
        } else if (index < currentCardIndex) {
            dot.classList.add('completed');
        }
    });
}

// Enhanced Data Persistence
function saveUserProgress() {
    localStorage.setItem('flashcardProgress', JSON.stringify(userProgress));
}

function loadProgressFromStorage() {
    const savedProgress = localStorage.getItem('flashcardProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
        
        // Ensure wordDifficulties structure exists for all books
        [3, 4, 5, 6].forEach(bookNumber => {
            if (!userProgress.books[bookNumber]) {
                userProgress.books[bookNumber] = { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 }, wordDifficulties: {} };
            } else if (!userProgress.books[bookNumber].wordDifficulties) {
                userProgress.books[bookNumber].wordDifficulties = {};
            }
        });
    }
}

function loadUserProgress() {
    loadProgressFromStorage();
    updateProgressDisplay();
    updateBookProgress();
}

// Export/Import Functionality
function exportProgress() {
    const dataStr = JSON.stringify(userProgress, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `flashcard-progress-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    userProgress = importedData;
                    saveUserProgress();
                    updateProgressDisplay();
                    alert('Progress imported successfully!');
                } catch (error) {
                    alert('Error importing progress. Please check the file format.');
                }
            };
            reader.readAsText(file);
        }
    };
    
    input.click();
}

// Utility Functions
function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else {
        return `${minutes}m`;
    }
}

// Keyboard Navigation
function handleKeyboardNavigation(event) {
    if (!document.getElementById('flashcardScreen').classList.contains('active')) {
        return;
    }
    
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    switch(event.key) {
        case 'ArrowLeft':
            if (currentCardIndex > 0) {
                previousCard();
            }
            break;
        case 'ArrowRight':
        case ' ':
            if (currentCardIndex < maxCards - 1) {
                nextCard();
            } else {
                completeUnit();
            }
            break;
        case 'f':
        case 'F':
            flipCard();
            break;
        case '3':
            // Mark as difficult (disabled in difficult words mode)
            if (studyMode !== 'difficult') {
                markCardDifficulty(3);
            }
            break;
    }
}

function markCardDifficulty(difficulty) {
    if (!currentBook || !currentUnit) return;
    
    // Initialize wordDifficulties if it doesn't exist
    if (!userProgress.books[currentBook].wordDifficulties) {
        userProgress.books[currentBook].wordDifficulties = {};
    }
    
    const wordKey = `${currentUnit}-${currentCardIndex}`;
    const globalWordKey = `${currentBook}-${currentUnit}-${currentCardIndex}`;
    
    // Check if word is already marked as difficult
    const isCurrentlyDifficult = userProgress.books[currentBook].wordDifficulties[wordKey] === 3;
    
    if (isCurrentlyDifficult) {
        // Remove difficult marking (toggle off)
        delete userProgress.books[currentBook].wordDifficulties[wordKey];
        
        // Remove from global difficult words list
        const index = userProgress.globalStats.difficultWords.indexOf(globalWordKey);
        if (index > -1) {
            userProgress.globalStats.difficultWords.splice(index, 1);
        }
        
        showNotification('Removed from Difficult Words', 'info');
    } else {
        // Mark as difficult (toggle on)
        userProgress.books[currentBook].wordDifficulties[wordKey] = 3;
        
        // Add to global difficult words list
        if (!userProgress.globalStats.difficultWords.includes(globalWordKey)) {
            userProgress.globalStats.difficultWords.push(globalWordKey);
        }
        
        showNotification('Marked as Difficult', 'info');
    }
    
    saveUserProgress();
    updateCardDifficultyIndicator();
}

// Touch/Swipe Support
let touchStartX = 0;
let touchEndX = 0;

function setupTouchSupport() {
    document.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    let maxCards = 20; // Default
    if (currentBook && currentUnit && bookData[currentBook] && bookData[currentBook].units[currentUnit]) {
        maxCards = bookData[currentBook].units[currentUnit].length;
    }
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next card
            if (currentCardIndex < maxCards - 1) {
                nextCard();
            } else {
                completeUnit();
            }
        } else {
            // Swipe right - previous card
            if (currentCardIndex > 0) {
                previousCard();
            }
        }
    }
}

// Initialize the app when the page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Global functions for HTML onclick handlers
window.showBookSelection = showBookSelection;
window.showUnitSelection = showUnitSelection;
window.exportProgress = exportProgress;
window.importProgress = importProgress;

// Preview and Word Input Functions
function updatePreviewProgress() {
    if (!currentBook || !currentUnit) return;
    
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const currentCount = unitWords.length;
    const progressPercentage = (currentCount / 20) * 100;
    
    document.getElementById('previewProgressText').textContent = `${currentCount}/20 words completed`;
    document.getElementById('previewProgressBar').style.width = `${progressPercentage}%`;
}

function displayCurrentWords() {
    if (!currentBook || !currentUnit) return;
    
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const wordsList = document.getElementById('currentWordsList');
    
    if (unitWords.length === 0) {
        wordsList.innerHTML = `
            <div class="empty-unit-message">
                <p style="color: #666; text-align: center; padding: 2rem;">No words in this unit yet. Add your first word!</p>
                <button class="btn btn-primary" onclick="addMissingWords()">
                    <i class="fas fa-plus"></i>
                    Add 20 Words
                </button>
            </div>
        `;
        return;
    }
    
    let wordsHTML = '';
    unitWords.forEach((word, index) => {
        wordsHTML += `
            <div class="word-item">
                <div class="word-header">
                <div class="word">${word.word}</div>
                    <div class="word-actions">
                        <button class="edit-word-btn" onclick="editWord(${index})" title="Edit word">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-word-btn" onclick="deleteWord(${index})" title="Delete word">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="pos">${word.partOfSpeech}</div>
                <div class="meaning">${word.meaning}</div>
                <div class="example">${word.example}</div>
            </div>
        `;
    });
    
    // Add missing words button if unit has fewer than 20 words
    if (unitWords.length < 20) {
        const missingCount = 20 - unitWords.length;
        wordsHTML += `
            <div class="add-words-section">
                <div class="missing-words-info">
                    <p>This unit has ${unitWords.length} words. Need ${missingCount} more to reach 20 words.</p>
                </div>
                <button class="btn btn-primary" onclick="addMissingWords()">
                    <i class="fas fa-plus"></i>
                    Add ${missingCount} Words
                </button>
            </div>
        `;
    }
    
    wordsList.innerHTML = wordsHTML;
}


// Add preview and word input functions to global scope
window.showUnitPreviewScreen = showUnitPreviewScreen;
window.selectUnitForPreview = selectUnitForPreview;
window.startStudying = startStudying;

function startStudying() {
    showFlashcardScreen();
}

// Word Management Functions
function addMissingWords() {
    if (!currentBook || !currentUnit) return;
    
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const currentCount = unitWords.length;
    const missingCount = 20 - currentCount;
    
    if (missingCount <= 0) {
        alert('This unit already has 20 words!');
        return;
    }
    
    // Show manual word input form
    showWordInputForm(missingCount);
}

function showWordInputForm(wordCount) {
    const formHTML = `
        <div class="word-input-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Add ${wordCount} Words to Unit ${currentUnit}</h3>
                    <button class="close-btn" onclick="closeWordInputForm()">×</button>
                </div>
                <div class="modal-body">
                    <p class="form-description">Please add ${wordCount} words with their complete information:</p>
                    <div id="wordInputForms">
                        ${generateWordInputForms(wordCount)}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeWordInputForm()">Cancel</button>
                    <button class="btn btn-primary" onclick="saveWords()">Save Words</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
}

function generateWordInputForms(wordCount) {
    let formsHTML = '';
    for (let i = 0; i < wordCount; i++) {
        formsHTML += `
            <div class="word-input-form-group">
                <h4>Word ${i + 1}</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="word${i}">Word:</label>
                        <input type="text" id="word${i}" placeholder="Enter word" required>
                    </div>
                    <div class="form-group">
                        <label for="pos${i}">Part of Speech:</label>
                        <select id="pos${i}" required>
                            <option value="">Select part of speech</option>
                            <option value="noun">Noun</option>
                            <option value="verb">Verb</option>
                            <option value="adjective">Adjective</option>
                            <option value="adverb">Adverb</option>
                            <option value="preposition">Preposition</option>
                            <option value="conjunction">Conjunction</option>
                            <option value="pronoun">Pronoun</option>
                            <option value="interjection">Interjection</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="meaning${i}">Meaning:</label>
                    <textarea id="meaning${i}" placeholder="Enter the meaning of the word" required></textarea>
                </div>
                <div class="form-group">
                    <label for="example${i}">Example Sentence:</label>
                    <textarea id="example${i}" placeholder="Enter an example sentence using the word" required></textarea>
                </div>
            </div>
        `;
    }
    return formsHTML;
}

function saveWords() {
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const currentCount = unitWords.length;
    const missingCount = 20 - currentCount;
    const newWords = [];
    
    // Validate and collect all word data
    for (let i = 0; i < missingCount; i++) {
        const word = document.getElementById(`word${i}`).value.trim();
        const pos = document.getElementById(`pos${i}`).value;
        const meaning = document.getElementById(`meaning${i}`).value.trim();
        const example = document.getElementById(`example${i}`).value.trim();
        
        // Validate required fields
        if (!word || !pos || !meaning || !example) {
            alert(`Please fill in all fields for Word ${i + 1}`);
            return;
        }
        
        // Check for duplicate words in the unit
        const isDuplicate = unitWords.some(existingWord => 
            existingWord.word.toLowerCase() === word.toLowerCase()
        );
        
        if (isDuplicate) {
            alert(`The word "${word}" already exists in this unit. Please use a different word.`);
            return;
        }
        
        newWords.push({
            word: word,
            partOfSpeech: pos,
            meaning: meaning,
            example: example
        });
    }
    
    // Add new words to the unit
    if (!bookData[currentBook].units[currentUnit]) {
        bookData[currentBook].units[currentUnit] = [];
    }
    
    bookData[currentBook].units[currentUnit].push(...newWords);
    
    // Save to localStorage
    saveBookDataToLocalStorage();
    
    // Close form and update display
    closeWordInputForm();
    displayCurrentWords();
    updatePreviewProgress();
    
    // Show success message
    showNotification(`Successfully added ${missingCount} words to Unit ${currentUnit}!`, 'success');
}

function closeWordInputForm() {
    const modal = document.querySelector('.word-input-modal');
    if (modal) {
        modal.remove();
    }
}

function editWord(wordIndex) {
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const word = unitWords[wordIndex];
    
    if (!word) return;
    
    showEditWordForm(wordIndex, word);
}

function showEditWordForm(wordIndex, word) {
    const formHTML = `
        <div class="word-input-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Edit Word: ${word.word}</h3>
                    <button class="close-btn" onclick="closeWordInputForm()">×</button>
                </div>
                <div class="modal-body">
                    <p class="form-description">Edit the word information:</p>
                    <div class="word-input-form-group">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="editWord">Word:</label>
                                <input type="text" id="editWord" value="${word.word}" required>
                            </div>
                            <div class="form-group">
                                <label for="editPos">Part of Speech:</label>
                                <select id="editPos" required>
                                    <option value="noun" ${word.partOfSpeech === 'noun' ? 'selected' : ''}>Noun</option>
                                    <option value="verb" ${word.partOfSpeech === 'verb' ? 'selected' : ''}>Verb</option>
                                    <option value="adjective" ${word.partOfSpeech === 'adjective' ? 'selected' : ''}>Adjective</option>
                                    <option value="adverb" ${word.partOfSpeech === 'adverb' ? 'selected' : ''}>Adverb</option>
                                    <option value="preposition" ${word.partOfSpeech === 'preposition' ? 'selected' : ''}>Preposition</option>
                                    <option value="conjunction" ${word.partOfSpeech === 'conjunction' ? 'selected' : ''}>Conjunction</option>
                                    <option value="pronoun" ${word.partOfSpeech === 'pronoun' ? 'selected' : ''}>Pronoun</option>
                                    <option value="interjection" ${word.partOfSpeech === 'interjection' ? 'selected' : ''}>Interjection</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="editMeaning">Meaning:</label>
                            <textarea id="editMeaning" required>${word.meaning}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="editExample">Example Sentence:</label>
                            <textarea id="editExample" required>${word.example}</textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeWordInputForm()">Cancel</button>
                    <button class="btn btn-primary" onclick="saveEditedWord(${wordIndex})">Save Changes</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
}

function saveEditedWord(wordIndex) {
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const originalWord = unitWords[wordIndex];
    
    const newWord = document.getElementById('editWord').value.trim();
    const newPos = document.getElementById('editPos').value;
    const newMeaning = document.getElementById('editMeaning').value.trim();
    const newExample = document.getElementById('editExample').value.trim();
    
    // Validate required fields
    if (!newWord || !newPos || !newMeaning || !newExample) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check for duplicate words (excluding the current word being edited)
    const isDuplicate = unitWords.some((existingWord, index) => 
        index !== wordIndex && existingWord.word.toLowerCase() === newWord.toLowerCase()
    );
    
    if (isDuplicate) {
        alert(`The word "${newWord}" already exists in this unit. Please use a different word.`);
        return;
    }
    
    // Update the word
    unitWords[wordIndex] = {
        word: newWord,
        partOfSpeech: newPos,
        meaning: newMeaning,
        example: newExample
    };
    
    // Save to localStorage
    saveBookDataToLocalStorage();
    
    // Close form and update display
    closeWordInputForm();
    displayCurrentWords();
    updatePreviewProgress();
    
    // Show success message
    showNotification(`Successfully updated "${newWord}"!`, 'success');
}

function deleteWord(wordIndex) {
    const unitWords = bookData[currentBook].units[currentUnit] || [];
    const word = unitWords[wordIndex];
    
    if (!word) return;
    
    const confirmDelete = confirm(`Are you sure you want to delete the word "${word.word}"?`);
    
    if (confirmDelete) {
        // Remove the word
        unitWords.splice(wordIndex, 1);
        
        // Save to localStorage
        saveBookDataToLocalStorage();
        
        // Update display
        displayCurrentWords();
        updatePreviewProgress();
        
        // Show success message
        showNotification(`Successfully deleted "${word.word}"!`, 'success');
    }
}



function saveBookDataToLocalStorage() {
    try {
        localStorage.setItem('bookData', JSON.stringify(bookData));
        console.log('Book data saved to localStorage');
        
        // Auto-commit to Git repository
        commitToGit();
    } catch (error) {
        console.error('Error saving book data:', error);
    }
}

function commitToGit() {
    // Create a data file with the updated book data
    const dataToSave = JSON.stringify(bookData, null, 2);
    const blob = new Blob([dataToSave], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create download link for the updated data
    const a = document.createElement('a');
    a.href = url;
    a.download = 'updated-book-data.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show instructions for manual Git commit
    showGitCommitInstructions();
}

function showGitCommitInstructions() {
    const instructions = `
        <div class="git-instructions-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📁 Git Upload Instructions</h3>
                    <button class="close-btn" onclick="closeGitInstructions()">×</button>
                </div>
                <div class="modal-body">
                    <p><strong>Your changes have been saved locally and a file has been downloaded.</strong></p>
                    
                    <div class="git-steps">
                        <h4>To upload to Git repository:</h4>
                        <ol>
                            <li>Replace the <code>bookData.js</code> file with the downloaded <code>updated-book-data.json</code></li>
                            <li>Open terminal/command prompt in your project folder</li>
                            <li>Run these commands:</li>
                        </ol>
                        
                        <div class="git-commands">
                            <code>git add .</code><br>
                            <code>git commit -m "Update vocabulary data - ${new Date().toLocaleString()}"</code><br>
                            <code>git push origin main</code>
                        </div>
                        
                        <div class="git-note">
                            <p><strong>Note:</strong> For automatic Git uploads, you can:</p>
                            <ul>
                                <li>Set up a webhook in your repository</li>
                                <li>Use GitHub Actions for automated commits</li>
                                <li>Configure a local Git hook</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="closeGitInstructions()">Got it!</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', instructions);
}

function closeGitInstructions() {
    const modal = document.querySelector('.git-instructions-modal');
    if (modal) {
        modal.remove();
    }
}

// Difficult Words Practice Functions
function getDifficultWordsForBook(bookNumber) {
    const difficultWords = [];
    
    if (!bookData[bookNumber] || !userProgress.books[bookNumber]) {
        return difficultWords;
    }
    
    const book = bookData[bookNumber];
    const bookProgress = userProgress.books[bookNumber];
    
    // Check each unit in the book
    Object.keys(book.units).forEach(unitNumber => {
        const unit = book.units[unitNumber];
        
        unit.forEach((word, wordIndex) => {
            const wordKey = `${unitNumber}-${wordIndex}`;
            const wordDifficulty = bookProgress.wordDifficulties?.[wordKey];
            
            // If word is marked as difficulty level 3, add it to difficult words
            if (wordDifficulty === 3) {
                difficultWords.push({
                    ...word,
                    unitNumber: parseInt(unitNumber),
                    wordIndex: wordIndex,
                    wordKey: wordKey
                });
            }
        });
    });
    
    return difficultWords;
}

function practiceDifficultWords(bookNumber) {
    const difficultWords = getDifficultWordsForBook(bookNumber);
    
    if (difficultWords.length === 0) {
        showNotification('No difficult words found for this book!', 'info');
        return;
    }
    
    // Set up difficult words practice session
    currentBook = bookNumber;
    studyMode = 'difficult';
    currentCardIndex = 0;
    
    // Store difficult words for practice
    window.difficultWordsList = difficultWords;
    
    // Show difficult words practice screen
    showDifficultWordsPracticeScreen();
}

function showDifficultWordsPracticeScreen() {
    hideAllScreens();
    document.getElementById('difficultWordsScreen').classList.add('active');
    
    const difficultWords = window.difficultWordsList || [];
    displayDifficultWords(difficultWords);
}

function displayDifficultWords(difficultWords) {
    const container = document.getElementById('difficultWordsContainer');
    
    if (difficultWords.length === 0) {
        container.innerHTML = `
            <div class="no-difficult-words">
                <i class="fas fa-check-circle"></i>
                <h3>No Difficult Words!</h3>
                <p>Great job! You haven't marked any words as difficult in this book.</p>
                <button class="btn btn-primary" onclick="showBookSelection()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Books
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="difficult-words-header">
            <div class="difficult-words-info">
                <h3>Difficult Words Practice</h3>
                <p>Book ${currentBook} • ${difficultWords.length} words marked as difficult</p>
            </div>
            <div class="difficult-words-actions">
                <button class="btn btn-primary" onclick="startDifficultWordsPractice()">
                    <i class="fas fa-play"></i>
                    Start Practice
                </button>
                <button class="btn btn-secondary" onclick="showBookSelection()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Books
                </button>
            </div>
        </div>
        
        <div class="difficult-words-list">
            ${difficultWords.map((word, index) => `
                <div class="difficult-word-item">
                    <div class="difficult-word-number">${index + 1}</div>
                    <div class="difficult-word-content">
                        <div class="difficult-word-main">
                            <div class="difficult-word-text">${word.word}</div>
                            <div class="difficult-word-pos">${word.partOfSpeech}</div>
                        </div>
                        <div class="difficult-word-details">
                            <div class="difficult-word-meaning">${word.meaning}</div>
                            <div class="difficult-word-example">${word.example}</div>
                        </div>
                        <div class="difficult-word-location">
                            <span class="difficult-word-unit">Unit ${word.unitNumber}</span>
                        </div>
                    </div>
                    <div class="difficult-word-actions">
                        <button class="btn btn-danger btn-sm" onclick="removeDifficultWordFromList(${currentBook}, ${word.unitNumber}, ${word.wordIndex}, ${index})" 
                                style="background: #dc3545; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                            <i class="fas fa-times"></i>
                            Remove
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function startDifficultWordsPractice() {
    const difficultWords = window.difficultWordsList || [];
    
    if (difficultWords.length === 0) {
        showNotification('No difficult words to practice!', 'error');
        return;
    }
    
    // Set up flashcard practice with difficult words
    currentCardIndex = 0;
    studyMode = 'difficult';
    
    // Store difficult words for flashcard practice
    window.currentDifficultWords = difficultWords;
    
    // Show flashcard screen
    showFlashcardScreen();
}

function loadDifficultWordCard() {
    const difficultWords = window.currentDifficultWords || [];
    
    if (currentCardIndex >= difficultWords.length) {
        // Practice completed
        showDifficultWordsPracticeResults();
        return;
    }
    
    const word = difficultWords[currentCardIndex];
    const card = document.getElementById('flashcard');
    
    card.innerHTML = `
        <div class="card-front">
            <div class="word-display">${word.word}</div>
            <div class="part-of-speech">${word.partOfSpeech}</div>
        </div>
        <div class="card-back">
            <div class="meaning">${word.meaning}</div>
            <div class="example">${word.example}</div>
        </div>
    `;
    
    isCardFlipped = false;
    card.classList.remove('flipped');
    
    updateDifficultWordsProgress();
}

function updateDifficultWordsProgress() {
    const difficultWords = window.currentDifficultWords || [];
    const progressText = document.getElementById('progressText');
    const progressBar = document.getElementById('progressBar');
    
    if (progressText && progressBar) {
        const progress = ((currentCardIndex + 1) / difficultWords.length) * 100;
        progressText.textContent = `${currentCardIndex + 1}/${difficultWords.length}`;
        progressBar.style.width = `${progress}%`;
    }
}

function showDifficultWordsPracticeResults() {
    const difficultWords = window.currentDifficultWords || [];
    
    const resultsHTML = `
        <div class="practice-results">
            <div class="results-header">
                <h2>Difficult Words Practice Complete!</h2>
                <p>You've reviewed ${difficultWords.length} difficult words from Book ${currentBook}</p>
            </div>
            
            <div class="results-actions">
                <button class="btn btn-primary" onclick="startDifficultWordsPractice()">
                    <i class="fas fa-redo"></i>
                    Practice Again
                </button>
                <button class="btn btn-secondary" onclick="showDifficultWordsPracticeScreen()">
                    <i class="fas fa-list"></i>
                    View Words List
                </button>
                <button class="btn btn-secondary" onclick="showBookSelection()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Books
                </button>
            </div>
        </div>
    `;
    
    hideAllScreens();
    document.getElementById('difficultWordsScreen').classList.add('active');
    document.getElementById('difficultWordsContainer').innerHTML = resultsHTML;
}

function loadBookDataFromLocalStorage() {
    try {
        const savedData = localStorage.getItem('bookData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Merge with existing bookData to preserve original data
            Object.keys(parsedData).forEach(bookKey => {
                if (bookData[bookKey]) {
                    Object.keys(parsedData[bookKey].units).forEach(unitKey => {
                        if (!bookData[bookKey].units[unitKey]) {
                            bookData[bookKey].units[unitKey] = [];
                        }
                        // Add any new words that don't exist in original data
                        parsedData[bookKey].units[unitKey].forEach(word => {
                            const exists = bookData[bookKey].units[unitKey].some(existingWord => 
                                existingWord.word === word.word
                            );
                            if (!exists) {
                                bookData[bookKey].units[unitKey].push(word);
                            }
                        });
                    });
                }
            });
            console.log('Book data loaded from localStorage');
        }
    } catch (error) {
        console.error('Error loading book data:', error);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Practice Mode Variables
let practiceQuestions = [];
let currentQuestionIndex = 0;
let practiceScore = 0;
let practiceAnswers = [];

// Practice Mode Functions
function startPractice(unitNumber) {
    currentUnit = unitNumber;
    currentQuestionIndex = 0;
    practiceScore = 0;
    practiceAnswers = [];
    
    // Generate practice questions
    generatePracticeQuestions();
    
    // Show practice screen
    showPracticeScreen();
    
    // Load first question
    loadCurrentQuestion();
}

function showPracticeScreen() {
    hideAllScreens();
    document.getElementById('practiceScreen').classList.add('active');
    document.getElementById('practiceUnitNumber').textContent = currentUnit;
}

function generatePracticeQuestions() {
    if (!currentBook || !currentUnit || !bookData[currentBook] || !bookData[currentBook].units[currentUnit]) {
        practiceQuestions = [];
        return;
    }
    
    const unitWords = bookData[currentBook].units[currentUnit];
    const allWords = getAllWordsFromBook(currentBook);
    
    practiceQuestions = [];
    
    // Generate 30 questions
    for (let i = 0; i < 30; i++) {
        const question = generateQuestion(unitWords, allWords);
        practiceQuestions.push(question);
    }
}

function getAllWordsFromBook(bookNumber) {
    const allWords = [];
    if (bookData[bookNumber] && bookData[bookNumber].units) {
        Object.values(bookData[bookNumber].units).forEach(unit => {
            allWords.push(...unit);
        });
    }
    return allWords;
}

function generateQuestion(unitWords, allWords) {
    const questionTypes = ['meaning', 'word', 'partOfSpeech', 'example'];
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    const correctWord = unitWords[Math.floor(Math.random() * unitWords.length)];
    const incorrectWords = allWords.filter(word => word.word !== correctWord.word);
    
    // Shuffle and get 3 random incorrect words
    const shuffledIncorrect = incorrectWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let question, correctAnswer, options;
    
    switch (questionType) {
        case 'meaning':
            question = `What is the meaning of "${correctWord.word}"?`;
            correctAnswer = correctWord.meaning;
            options = [
                correctWord.meaning,
                shuffledIncorrect[0].meaning,
                shuffledIncorrect[1].meaning,
                shuffledIncorrect[2].meaning
            ];
            break;
            
        case 'word':
            question = `Which word means "${correctWord.meaning}"?`;
            correctAnswer = correctWord.word;
            options = [
                correctWord.word,
                shuffledIncorrect[0].word,
                shuffledIncorrect[1].word,
                shuffledIncorrect[2].word
            ];
            break;
            
        case 'partOfSpeech':
            question = `What part of speech is "${correctWord.word}"?`;
            correctAnswer = correctWord.partOfSpeech;
            options = [
                correctWord.partOfSpeech,
                'noun',
                'verb',
                'adjective'
            ];
            break;
            
        case 'example':
            question = `Complete the sentence: "${correctWord.example.replace(correctWord.word, '_____')}"`;
            correctAnswer = correctWord.word;
            options = [
                correctWord.word,
                shuffledIncorrect[0].word,
                shuffledIncorrect[1].word,
                shuffledIncorrect[2].word
            ];
            break;
    }
    
    // Shuffle options
    const shuffledOptions = options.sort(() => 0.5 - Math.random());
    const correctIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
        type: questionType,
        question: question,
        correctAnswer: correctAnswer,
        options: shuffledOptions,
        correctIndex: correctIndex,
        word: correctWord.word
    };
}

function loadCurrentQuestion() {
    if (currentQuestionIndex >= practiceQuestions.length) {
        showPracticeResults();
        return;
    }
    
    const question = practiceQuestions[currentQuestionIndex];
    
    // Update question display
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionType').textContent = getQuestionTypeText(question.type);
    
    if (question.type === 'meaning' || question.type === 'partOfSpeech') {
        document.getElementById('wordDisplay').textContent = question.word;
        document.getElementById('wordDisplay').style.display = 'block';
    } else {
        document.getElementById('wordDisplay').style.display = 'none';
    }
    
    // Generate options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.textContent = option;
        optionButton.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionButton);
    });
    
    // Update progress
    updatePracticeProgress();
    
    // Hide feedback
    document.getElementById('questionFeedback').style.display = 'none';
    
    // Update navigation buttons
    updatePracticeNavigation();
}

function getQuestionTypeText(type) {
    switch (type) {
        case 'meaning': return 'Meaning';
        case 'word': return 'Word';
        case 'partOfSpeech': return 'Part of Speech';
        case 'example': return 'Complete Sentence';
        default: return 'Multiple Choice';
    }
}

function selectOption(optionIndex) {
    const question = practiceQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === question.correctIndex;
    
    // Store answer
    practiceAnswers[currentQuestionIndex] = {
        selected: optionIndex,
        correct: isCorrect
    };
    
    if (isCorrect) {
        practiceScore++;
    }
    
    // Show feedback
    showQuestionFeedback(isCorrect, question);
    
    // Enable next button
    document.querySelector('.next-btn').disabled = false;
}

function showQuestionFeedback(isCorrect, question) {
    const feedback = document.getElementById('questionFeedback');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const correctAnswer = document.getElementById('correctAnswer');
    
    if (isCorrect) {
        feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        feedbackIcon.className = 'feedback-icon correct';
        feedbackText.textContent = 'Correct!';
        correctAnswer.style.display = 'none';
    } else {
        feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        feedbackIcon.className = 'feedback-icon incorrect';
        feedbackText.textContent = 'Incorrect!';
        correctAnswer.innerHTML = `Correct answer: <strong>${question.correctAnswer}</strong>`;
        correctAnswer.style.display = 'block';
    }
    
    feedback.style.display = 'block';
}

function nextQuestion() {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
        currentQuestionIndex++;
        loadCurrentQuestion();
    } else {
        showPracticeResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadCurrentQuestion();
        
        // Show previous answer if available
        if (practiceAnswers[currentQuestionIndex]) {
            const question = practiceQuestions[currentQuestionIndex];
            const isCorrect = practiceAnswers[currentQuestionIndex].correct;
            showQuestionFeedback(isCorrect, question);
        }
    }
}

function updatePracticeProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / practiceQuestions.length) * 100;
    document.getElementById('practiceProgressBar').style.width = `${progressPercentage}%`;
    document.getElementById('currentQuestionIndex').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = practiceQuestions.length;
    document.getElementById('currentScore').textContent = practiceScore;
    document.getElementById('totalScore').textContent = practiceQuestions.length;
}

function updatePracticeNavigation() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = !practiceAnswers[currentQuestionIndex];
}

function showPracticeResults() {
    const percentage = Math.round((practiceScore / practiceQuestions.length) * 100);
    const grade = getGrade(percentage);
    
    const resultsHTML = `
        <div class="practice-results">
            <h2>Practice Complete!</h2>
            <div class="results-score">
                <div class="score-circle ${grade.toLowerCase()}">
                    <span class="score-number">${practiceScore}</span>
                    <span class="score-total">/${practiceQuestions.length}</span>
                </div>
                <div class="score-percentage">${percentage}%</div>
                <div class="score-grade">${grade}</div>
            </div>
            <div class="results-actions">
                <button class="btn btn-primary" onclick="restartPractice()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
                <button class="btn btn-secondary" onclick="showUnitSelection()">
                    <i class="fas fa-arrow-left"></i> Back to Units
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('practiceScreen').innerHTML = resultsHTML;
}

function getGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

function restartPractice() {
    startPractice(currentUnit);
}

// Add practice functions to global scope
window.startPractice = startPractice;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.restartPractice = restartPractice;

// Add difficult words functions to global scope
window.practiceDifficultWords = practiceDifficultWords;
window.startDifficultWordsPractice = startDifficultWordsPractice;
window.showDifficultWordsPracticeScreen = showDifficultWordsPracticeScreen;

// Test function for difficult words (can be called from console)
window.testDifficultWords = function() {
    // Mark some words as difficult for testing
    if (currentBook && currentUnit) {
        // Mark current word as difficult
        markCardDifficulty(3);
        
        // Mark a few more words as difficult
        for (let i = 0; i < 3; i++) {
            const originalIndex = currentCardIndex;
            currentCardIndex = i;
            markCardDifficulty(3);
            currentCardIndex = originalIndex;
        }
        
        console.log('Test: Marked some words as difficult. Check book selection for difficult words button.');
        showBookSelection();
    } else {
        console.log('Please select a book and unit first');
    }
};



// Show all difficult words across all books
window.showAllDifficultWords = function() {
    let allDifficultWords = [];
    
    [3, 4, 5, 6].forEach(bookNumber => {
        const difficultWords = getDifficultWordsForBook(bookNumber);
        allDifficultWords = allDifficultWords.concat(difficultWords.map(word => ({
            ...word,
            bookNumber: bookNumber
        })));
    });
    
    if (allDifficultWords.length === 0) {
        showNotification('No difficult words found. Add some test words first!', 'info');
        return;
    }
    
    // Create a modal to show all difficult words
    const modalHTML = `
        <div class="modal-overlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
            <div class="modal-content" style="background: white; border-radius: 12px; padding: 2rem; max-width: 600px; max-height: 80vh; overflow-y: auto;">
                <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3>All Difficult Words (${allDifficultWords.length})</h3>
                    <button onclick="this.closest('.modal-overlay').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
                </div>
                <div class="difficult-words-list">
                    ${allDifficultWords.map((word, index) => `
                        <div class="difficult-word-item" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; margin-bottom: 0.5rem;">
                            <div style="background: #dc3545; color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;">${index + 1}</div>
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                                    <strong>${word.word}</strong>
                                    <span style="background: #e9ecef; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.8rem;">${word.partOfSpeech}</span>
                                    <span style="background: #007bff; color: white; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.8rem;">Book ${word.bookNumber}</span>
                                </div>
                                <div style="color: #666; font-size: 0.9rem;">${word.meaning}</div>
                            </div>
                            <button onclick="removeDifficultWord('${word.bookNumber}', '${word.unitNumber}', ${word.wordIndex})" 
                                    style="background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 0.3rem;">
                                <i class="fas fa-times"></i>
                                Remove
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};

// Remove a word from difficult words list (for modal)
window.removeDifficultWord = function(bookNumber, unitNumber, wordIndex) {
    const wordKey = `${unitNumber}-${wordIndex}`;
    
    // Remove the word from difficult words
    if (userProgress.books[bookNumber] && userProgress.books[bookNumber].wordDifficulties) {
        delete userProgress.books[bookNumber].wordDifficulties[wordKey];
        
        // Save the updated progress
        saveUserProgress();
        
        // Update book progress display
        updateBookProgress();
        
        // Show success notification
        showNotification(`"${bookData[bookNumber].units[unitNumber][wordIndex].word}" removed from difficult words!`, 'success');
        
        // Close the modal and reopen it to refresh the list
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
            // Reopen the modal with updated list
            setTimeout(() => {
                showAllDifficultWords();
            }, 100);
        }
    }
};

// Remove a word from difficult words list (for difficult words screen)
window.removeDifficultWordFromList = function(bookNumber, unitNumber, wordIndex, listIndex) {
    const wordKey = `${unitNumber}-${wordIndex}`;
    
    // Remove the word from difficult words
    if (userProgress.books[bookNumber] && userProgress.books[bookNumber].wordDifficulties) {
        const wordToRemove = bookData[bookNumber].units[unitNumber][wordIndex];
        delete userProgress.books[bookNumber].wordDifficulties[wordKey];
        
        // Save the updated progress
        saveUserProgress();
        
        // Update book progress display
        updateBookProgress();
        
        // Show success notification
        showNotification(`"${wordToRemove.word}" removed from difficult words!`, 'success');
        
        // Refresh the difficult words list
        const difficultWords = getDifficultWordsForBook(bookNumber);
        displayDifficultWords(difficultWords);
        
        // Update the global difficult words list
        window.difficultWordsList = difficultWords;
    }
};

// Update keyboard shortcuts display based on study mode
function updateKeyboardShortcuts() {
    const shortcutsList = document.querySelector('.shortcuts-list');
    if (!shortcutsList) return;
    
    if (studyMode === 'difficult') {
        // Hide the "3" shortcut for marking as difficult in difficult words mode
        shortcutsList.innerHTML = `
            <span class="shortcut">← →</span> Navigate cards
            <span class="shortcut">Space</span> Next card
            <span class="shortcut">F</span> Flip card
        `;
    } else {
        // Show all shortcuts including "3" for marking as difficult
        shortcutsList.innerHTML = `
            <span class="shortcut">← →</span> Navigate cards
            <span class="shortcut">Space</span> Next card
            <span class="shortcut">F</span> Flip card
            <span class="shortcut">3</span> Mark as difficult
        `;
    }
}