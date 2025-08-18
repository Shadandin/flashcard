// App State Management
class FlashcardApp {
    constructor() {
        this.currentBook = null;
        this.currentUnit = null;
        this.currentWordIndex = 0;
        this.isCardFlipped = false;
        this.progress = this.loadProgress();
        
        this.initializeApp();
        this.bindEvents();
    }

    // Initialize the app
    initializeApp() {
        this.updateProgressDisplay();
        this.generateUnits();
    }

    // Load progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('flashcardProgress');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Initialize empty progress structure
        const progress = {};
        for (let book = 3; book <= 6; book++) {
            progress[book] = {};
            for (let unit = 1; unit <= 30; unit++) {
                progress[book][unit] = {
                    completed: false,
                    wordsCompleted: 0,
                    totalWords: 20
                };
            }
        }
        return progress;
    }

    // Save progress to localStorage
    saveProgress() {
        localStorage.setItem('flashcardProgress', JSON.stringify(this.progress));
        this.updateProgressDisplay();
    }

    // Update progress display
    updateProgressDisplay() {
        // Update overall progress
        let totalCompleted = 0;
        let totalUnits = 0;
        
        for (let book = 3; book <= 6; book++) {
            for (let unit = 1; unit <= 30; unit++) {
                totalUnits++;
                if (this.progress[book][unit].completed) {
                    totalCompleted++;
                }
            }
        }
        
        const overallProgress = Math.round((totalCompleted / totalUnits) * 100);
        document.getElementById('progress-percentage').textContent = `${overallProgress}%`;
        
        // Update book progress
        for (let book = 3; book <= 6; book++) {
            const bookCard = document.querySelector(`[data-book="${book}"]`);
            if (bookCard) {
                let bookCompleted = 0;
                for (let unit = 1; unit <= 30; unit++) {
                    if (this.progress[book][unit].completed) {
                        bookCompleted++;
                    }
                }
                const bookProgress = Math.round((bookCompleted / 30) * 100);
                
                const progressFill = bookCard.querySelector('.progress-fill');
                const progressText = bookCard.querySelector('.progress-text');
                
                progressFill.style.width = `${bookProgress}%`;
                progressText.textContent = `${bookProgress}% Complete`;
            }
        }
    }

    // Generate units for the current book
    generateUnits() {
        const unitsContainer = document.getElementById('units-container');
        unitsContainer.innerHTML = '';
        
        for (let unit = 1; unit <= 30; unit++) {
            const unitCard = document.createElement('div');
            unitCard.className = 'unit-card';
            unitCard.dataset.unit = unit;
            
            const isCompleted = this.progress[this.currentBook]?.[unit]?.completed || false;
            const wordsCompleted = this.progress[this.currentBook]?.[unit]?.wordsCompleted || 0;
            
            if (isCompleted) {
                unitCard.classList.add('completed');
            }
            
            unitCard.innerHTML = `
                <div class="unit-number">${unit}</div>
                <div class="unit-status">${wordsCompleted}/20 words</div>
            `;
            
            unitCard.addEventListener('click', () => this.selectUnit(unit));
            unitsContainer.appendChild(unitCard);
        }
    }

    // Select a book
    selectBook(bookNumber) {
        this.currentBook = bookNumber;
        document.getElementById('current-book-number').textContent = bookNumber;
        this.showScreen('unit-selection');
        this.generateUnits();
    }

    // Select a unit
    selectUnit(unitNumber) {
        this.currentUnit = unitNumber;
        this.currentWordIndex = 0;
        this.isCardFlipped = false;
        
        document.getElementById('current-unit-number').textContent = unitNumber;
        this.showScreen('flashcard-screen');
        this.loadFlashcard();
        this.generateProgressDots();
    }

    // Load flashcard data
    loadFlashcard() {
        // Create placeholder data structure
        const flashcardData = {
            word: 'Word',
            partOfSpeech: 'Part of Speech',
            meaning: 'Meaning',
            example: 'Example sentence'
        };
        
        this.displayFlashcard(flashcardData);
        this.updateWordCounter();
    }

    // Display flashcard
    displayFlashcard(data) {
        // Front of card
        document.getElementById('word-text').textContent = data.word;
        document.getElementById('part-of-speech').textContent = data.partOfSpeech;
        document.getElementById('meaning-text').textContent = data.meaning;
        document.getElementById('example-text').textContent = data.example;
        
        // Back of card (same data for now)
        document.getElementById('word-text-back').textContent = data.word;
        document.getElementById('part-of-speech-back').textContent = data.partOfSpeech;
        document.getElementById('meaning-text-back').textContent = data.meaning;
        document.getElementById('example-text-back').textContent = data.example;
        
        // Reset card to front
        this.isCardFlipped = false;
        document.getElementById('flashcard').classList.remove('flipped');
    }

    // Flip the flashcard
    flipCard() {
        const flashcard = document.getElementById('flashcard');
        this.isCardFlipped = !this.isCardFlipped;
        
        if (this.isCardFlipped) {
            flashcard.classList.add('flipped');
        } else {
            flashcard.classList.remove('flipped');
        }
    }

    // Navigate to previous word
    previousWord() {
        if (this.currentWordIndex > 0) {
            this.currentWordIndex--;
            this.loadFlashcard();
            this.updateProgressDots();
        }
    }

    // Navigate to next word
    nextWord() {
        if (this.currentWordIndex < 19) { // 20 words total (0-19)
            this.currentWordIndex++;
            this.loadFlashcard();
            this.updateProgressDots();
        } else {
            // Complete the unit
            this.completeUnit();
        }
    }

    // Complete the current unit
    completeUnit() {
        if (this.currentBook && this.currentUnit) {
            this.progress[this.currentBook][this.currentUnit].completed = true;
            this.progress[this.currentBook][this.currentUnit].wordsCompleted = 20;
            this.saveProgress();
            
            // Show completion message
            alert(`Congratulations! You've completed Unit ${this.currentUnit} of Book ${this.currentBook}!`);
            
            // Go back to unit selection
            this.showScreen('unit-selection');
        }
    }

    // Generate progress dots
    generateProgressDots() {
        const progressDots = document.getElementById('progress-dots');
        progressDots.innerHTML = '';
        
        for (let i = 0; i < 20; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dot.dataset.index = i;
            
            if (i === this.currentWordIndex) {
                dot.classList.add('active');
            } else if (i < this.currentWordIndex) {
                dot.classList.add('completed');
            }
            
            dot.addEventListener('click', () => {
                this.currentWordIndex = i;
                this.loadFlashcard();
                this.updateProgressDots();
            });
            
            progressDots.appendChild(dot);
        }
    }

    // Update progress dots
    updateProgressDots() {
        const dots = document.querySelectorAll('.progress-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            
            if (index === this.currentWordIndex) {
                dot.classList.add('active');
            } else if (index < this.currentWordIndex) {
                dot.classList.add('completed');
            }
        });
    }

    // Update word counter
    updateWordCounter() {
        document.getElementById('current-word-number').textContent = this.currentWordIndex + 1;
    }

    // Show specific screen
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(screenId).classList.add('active');
        
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const navBtn = document.querySelector(`[data-screen="${screenId}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
        }
    }

    // Bind event listeners
    bindEvents() {
        // Book selection
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', () => {
                const bookNumber = parseInt(card.dataset.book);
                this.selectBook(bookNumber);
            });
        });

        // Back buttons
        document.getElementById('back-to-books').addEventListener('click', () => {
            this.showScreen('book-selection');
        });

        document.getElementById('back-to-units').addEventListener('click', () => {
            this.showScreen('unit-selection');
        });

        // Flashcard controls
        document.getElementById('flip-card').addEventListener('click', () => {
            this.flipCard();
        });

        document.getElementById('prev-card').addEventListener('click', () => {
            this.previousWord();
        });

        document.getElementById('next-card').addEventListener('click', () => {
            this.nextWord();
        });

        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const screenId = btn.dataset.screen;
                if (screenId === 'book-selection') {
                    this.showScreen('book-selection');
                } else if (screenId === 'progress') {
                    // TODO: Implement progress screen
                    alert('Progress screen coming soon!');
                } else if (screenId === 'settings') {
                    // TODO: Implement settings screen
                    alert('Settings screen coming soon!');
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('flashcard-screen').classList.contains('active')) {
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.previousWord();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextWord();
                        break;
                    case ' ':
                    case 'Enter':
                        e.preventDefault();
                        this.flipCard();
                        break;
                }
            }
        });

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        // Handle swipe gestures
        this.handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next word
                    this.nextWord();
                } else {
                    // Swipe right - previous word
                    this.previousWord();
                }
            }
        };
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
});

// Add some utility functions for future enhancements
class FlashcardUtils {
    // Generate random placeholder data for testing
    static generatePlaceholderData() {
        const words = ['Example', 'Sample', 'Test', 'Demo', 'Placeholder'];
        const partsOfSpeech = ['Noun', 'Verb', 'Adjective', 'Adverb', 'Preposition'];
        const meanings = ['A thing used to illustrate or explain something', 'A representative form or pattern', 'A procedure intended to establish quality', 'A demonstration of something', 'A person or thing that holds a position'];
        const examples = ['This is an example sentence.', 'Here is a sample of the work.', 'Let\'s test this theory.', 'I will demo the new feature.', 'This serves as a placeholder.'];
        
        const randomIndex = Math.floor(Math.random() * words.length);
        
        return {
            word: words[randomIndex],
            partOfSpeech: partsOfSpeech[randomIndex],
            meaning: meanings[randomIndex],
            example: examples[randomIndex]
        };
    }

    // Animate element
    static animate(element, animation, duration = 300) {
        element.style.animation = `${animation} ${duration}ms ease-in-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }

    // Show notification
    static showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #2196F3, #1976D2)';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
