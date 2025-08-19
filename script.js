// Enhanced Flashcard App with Study Statistics, Spaced Repetition, and Progress Tracking
let currentBook = null;
let currentUnit = null;
let currentCardIndex = 0;
let studyMode = 'normal'; // 'normal', 'review', 'difficult'
let isCardFlipped = false;

// Enhanced user progress with study statistics
let userProgress = {
    books: {
        3: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 } },
        4: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 } },
        5: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 } },
        6: { progress: 0, units: {}, stats: { totalTime: 0, sessions: 0, streak: 0 } }
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

// Enhanced Flashcard Management
function loadCurrentCard() {
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
    if (!difficultyIndicator) return;
    
    const wordKey = `${currentBook}-${currentUnit}-${currentCardIndex}`;
    const isDifficult = userProgress.globalStats.difficultWords.includes(wordKey);
    
    difficultyIndicator.className = `card-difficulty ${isDifficult ? 'difficult' : 'normal'}`;
    difficultyIndicator.textContent = isDifficult ? 'Difficult Word' : '';
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
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}% Complete`;
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
        case '1':
        case '2':
        case '3':
            // Mark difficulty (1=easy, 2=medium, 3=hard)
            markCardDifficulty(parseInt(event.key));
            break;
    }
}

function markCardDifficulty(difficulty) {
    if (!currentBook || !currentUnit) return;
    
    const wordKey = `${currentBook}-${currentUnit}-${currentCardIndex}`;
    
    if (difficulty === 3) {
        // Mark as difficult
        if (!userProgress.globalStats.difficultWords.includes(wordKey)) {
            userProgress.globalStats.difficultWords.push(wordKey);
        }
    } else if (difficulty === 1) {
        // Remove from difficult words
        const index = userProgress.globalStats.difficultWords.indexOf(wordKey);
        if (index > -1) {
            userProgress.globalStats.difficultWords.splice(index, 1);
        }
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
