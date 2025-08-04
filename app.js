// Flashcard Application Main Logic
class FlashcardApp {
    constructor() {
        this.currentMode = 'study';
        this.currentBook = null;
        this.currentUnit = null;
        this.currentWordIndex = 0;
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.mistakes = [];
        this.progress = this.loadProgress();
        
        this.initializeEventListeners();
        this.updateProgressDisplay();
        this.updateBookProgress();
    }

    initializeEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.dataset.mode);
            });
        });

        // Book selection
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't trigger book selection if clicking on delete button
                if (e.target.classList.contains('delete-btn')) {
                    return;
                }
                this.selectBook(parseInt(e.currentTarget.dataset.book));
            });
        });

        // Delete buttons (using event delegation for dynamic elements)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                e.stopPropagation(); // Prevent triggering book selection
                const bookNumber = parseInt(e.target.dataset.book);
                this.deleteBook(bookNumber);
            }
        });

        // Back buttons
        document.getElementById('backToBooks').addEventListener('click', () => {
            this.showBookSelection();
        });

        // Add breadcrumb navigation
        document.getElementById('backToBooks').addEventListener('click', () => {
            this.showBookSelection();
        });

        document.getElementById('backToUnits').addEventListener('click', () => {
            this.showUnitSelection();
        });

        document.getElementById('backToUnitsPractice').addEventListener('click', () => {
            this.showUnitSelection();
        });

        // Study mode controls
        document.getElementById('flipCard').addEventListener('click', () => {
            this.flipCard();
        });

        document.getElementById('nextCard').addEventListener('click', () => {
            this.nextCard();
        });

        // Practice mode controls
        document.getElementById('submitAnswer').addEventListener('click', () => {
            this.submitAnswer();
        });

        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Flashcard click to flip
        document.getElementById('flashcard').addEventListener('click', () => {
            this.flipCard();
        });
    }

    switchMode(mode) {
        this.currentMode = mode;
        
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

        // Hide all sections
        document.getElementById('bookSelection').style.display = 'none';
        document.getElementById('unitSelection').style.display = 'none';
        document.getElementById('studyMode').style.display = 'none';
        document.getElementById('practiceMode').style.display = 'none';
        document.getElementById('reviewMode').style.display = 'none';
        document.getElementById('progressMode').style.display = 'none';

        // Show appropriate section
        switch (mode) {
            case 'study':
            case 'practice':
                this.showBookSelection();
                break;
            case 'review':
                this.showReviewMode();
                break;
            case 'progress':
                this.showProgressMode();
                break;
        }
    }

    showBookSelection() {
        document.getElementById('bookSelection').style.display = 'block';
        this.updateBookProgress();
    }

    selectBook(bookNumber) {
        this.currentBook = bookNumber;
        this.showUnitSelection();
    }

    showUnitSelection() {
        document.getElementById('unitSelection').style.display = 'block';
        // Update the header to show which book is selected
        const bookTitle = vocabularyData.books[this.currentBook].title;
        document.querySelector('#unitSelection h2').textContent = `Units in ${bookTitle}`;
        
        // Update back button to show which book we're returning to
        const backBtn = document.getElementById('backToBooks');
        backBtn.innerHTML = `← Back to ${bookTitle}`;
        
        this.renderUnits();
    }

    renderUnits() {
        const unitsGrid = document.getElementById('unitsGrid');
        unitsGrid.innerHTML = '';

        const book = vocabularyData.books[this.currentBook];
        const unitProgress = this.progress.books[this.currentBook] || {};

        for (let unitNumber = 1; unitNumber <= 30; unitNumber++) {
            const unit = book.units[unitNumber];
            const unitData = unitProgress[unitNumber] || { studied: false, practiced: false, mistakes: [] };
            
            const unitCard = document.createElement('div');
            unitCard.className = `unit-card ${unitData.studied ? 'completed' : ''}`;
            unitCard.dataset.unit = unitNumber;
            
            unitCard.innerHTML = `
                <h3>Unit ${unitNumber}</h3>
                <p>${unit.title}</p>
                <div class="unit-info">
                    <span class="word-count">${unit.words.length} words</span>
                </div>
                <div class="unit-status">
                    ${unitData.studied ? '✓ Studied' : 'Not studied'} | 
                    ${unitData.practiced ? '✓ Practiced' : 'Not practiced'}
                </div>
            `;

            unitCard.addEventListener('click', () => {
                this.selectUnit(unitNumber);
            });

            unitsGrid.appendChild(unitCard);
        }
    }

    selectUnit(unitNumber) {
        this.currentUnit = unitNumber;
        
        if (this.currentMode === 'study') {
            this.startStudyMode();
        } else if (this.currentMode === 'practice') {
            this.startPracticeMode();
        }
    }

    startStudyMode() {
        document.getElementById('studyMode').style.display = 'block';
        this.currentWordIndex = 0;
        this.loadCurrentWord();
    }

    loadCurrentWord() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const word = unit.words[this.currentWordIndex];
        
        document.getElementById('word').textContent = word.word;
        document.getElementById('partOfSpeech').textContent = word.partOfSpeech;
        document.getElementById('meaning').textContent = word.meaning;
        document.getElementById('example').textContent = word.example;
        
        document.getElementById('studyProgress').textContent = `${this.currentWordIndex + 1} / ${unit.words.length}`;
        document.getElementById('studyUnit').textContent = `Unit ${this.currentUnit}`;
        
        // Reset card to front
        document.getElementById('flashcard').classList.remove('flipped');
    }

    flipCard() {
        document.getElementById('flashcard').classList.toggle('flipped');
    }

    nextCard() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        
        if (this.currentWordIndex < unit.words.length - 1) {
            this.currentWordIndex++;
            this.loadCurrentWord();
        } else {
            // Unit completed
            this.markUnitStudied();
            alert('Congratulations! You have completed studying this unit.');
            this.showUnitSelection();
        }
    }

    startPracticeMode() {
        document.getElementById('practiceMode').style.display = 'block';
        this.currentQuestionIndex = 0;
        this.generateQuestions();
        this.loadCurrentQuestion();
    }

    generateQuestions() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        this.questions = [];
        
        // Generate 10 questions from the unit
        const shuffledWords = [...unit.words].sort(() => Math.random() - 0.5);
        const questionWords = shuffledWords.slice(0, 10);
        
        questionWords.forEach(word => {
            const questionTypes = ['meaning', 'word', 'partOfSpeech'];
            const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
            
            let question, correctAnswer, options;
            
            switch (questionType) {
                case 'meaning':
                    question = `What is the meaning of "${word.word}"?`;
                    correctAnswer = word.meaning;
                    options = this.generateOptions(word.meaning, unit.words, 'meaning');
                    break;
                case 'word':
                    question = `Which word means "${word.meaning}"?`;
                    correctAnswer = word.word;
                    options = this.generateOptions(word.word, unit.words, 'word');
                    break;
                case 'partOfSpeech':
                    question = `What part of speech is "${word.word}"?`;
                    correctAnswer = word.partOfSpeech;
                    options = this.generateOptions(word.partOfSpeech, unit.words, 'partOfSpeech');
                    break;
            }
            
            this.questions.push({
                question,
                correctAnswer,
                options,
                word: word.word,
                meaning: word.meaning,
                partOfSpeech: word.partOfSpeech
            });
        });
    }

    generateOptions(correctAnswer, allWords, type) {
        const options = [correctAnswer];
        
        // Get other possible answers
        const otherAnswers = allWords
            .map(word => {
                switch (type) {
                    case 'meaning': return word.meaning;
                    case 'word': return word.word;
                    case 'partOfSpeech': return word.partOfSpeech;
                }
            })
            .filter(answer => answer !== correctAnswer);
        
        // Shuffle and take 3 random options
        const shuffled = otherAnswers.sort(() => Math.random() - 0.5);
        options.push(...shuffled.slice(0, 3));
        
        // Shuffle all options
        return options.sort(() => Math.random() - 0.5);
    }

    loadCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('practiceProgress').textContent = `${this.currentQuestionIndex + 1} / ${this.questions.length}`;
        document.getElementById('practiceUnit').textContent = `Unit ${this.currentUnit}`;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(optionElement);
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        document.getElementById('submitAnswer').disabled = true;
        document.getElementById('nextQuestion').style.display = 'none';
        this.selectedAnswer = null;
    }

    selectOption(optionElement) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select new option
        optionElement.classList.add('selected');
        this.selectedAnswer = optionElement.textContent;
        document.getElementById('submitAnswer').disabled = false;
    }

    submitAnswer() {
        if (this.selectedAnswer === null) return;
        
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        
        // Show correct/incorrect feedback
        document.querySelectorAll('.option').forEach(option => {
            if (option.textContent === question.correctAnswer) {
                option.classList.add('correct');
            } else if (option.textContent === this.selectedAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Disable option selection
        document.querySelectorAll('.option').forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Record mistake if incorrect
        if (!isCorrect) {
            this.mistakes.push({
                word: question.word,
                meaning: question.meaning,
                partOfSpeech: question.partOfSpeech,
                question: question.question,
                userAnswer: this.selectedAnswer,
                correctAnswer: question.correctAnswer,
                unit: this.currentUnit,
                book: this.currentBook
            });
        }
        
        // Update progress
        this.updatePracticeProgress(isCorrect);
        
        document.getElementById('submitAnswer').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'inline-block';
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadCurrentQuestion();
            document.getElementById('submitAnswer').style.display = 'inline-block';
        } else {
            // Practice session completed
            this.markUnitPracticed();
            this.saveMistakes();
            alert(`Practice session completed! You got ${this.questions.length - this.mistakes.length} out of ${this.questions.length} correct.`);
            this.showUnitSelection();
        }
    }

    showReviewMode() {
        document.getElementById('reviewMode').style.display = 'block';
        this.renderMistakes();
    }

    renderMistakes() {
        const mistakesList = document.getElementById('mistakesList');
        const allMistakes = this.loadMistakes();
        
        if (allMistakes.length === 0) {
            mistakesList.innerHTML = '<p>No mistakes to review yet. Complete some practice sessions first!</p>';
            return;
        }
        
        mistakesList.innerHTML = '';
        
        allMistakes.forEach(mistake => {
            const mistakeItem = document.createElement('div');
            mistakeItem.className = 'mistake-item';
            mistakeItem.innerHTML = `
                <h3>${mistake.word}</h3>
                <p><strong>Question:</strong> ${mistake.question}</p>
                <p><strong>Your Answer:</strong> ${mistake.userAnswer}</p>
                <p class="correct-answer"><strong>Correct Answer:</strong> ${mistake.correctAnswer}</p>
                <p><strong>Meaning:</strong> ${mistake.meaning}</p>
                <p><strong>Part of Speech:</strong> ${mistake.partOfSpeech}</p>
                <p><strong>Unit:</strong> Book ${mistake.book}, Unit ${mistake.unit}</p>
            `;
            mistakesList.appendChild(mistakeItem);
        });
    }

    showProgressMode() {
        document.getElementById('progressMode').style.display = 'block';
        this.updateProgressStats();
        this.renderDetailedProgress();
    }

    updateProgressStats() {
        const stats = this.calculateStats();
        
        document.getElementById('totalStudied').textContent = stats.totalStudied;
        document.getElementById('totalQuestions').textContent = stats.totalQuestions;
        document.getElementById('correctAnswers').textContent = stats.correctAnswers;
        document.getElementById('accuracy').textContent = `${stats.accuracy}%`;
    }

    calculateStats() {
        let totalStudied = 0;
        let totalQuestions = 0;
        let correctAnswers = 0;
        
        Object.values(this.progress.books).forEach(book => {
            Object.values(book).forEach(unit => {
                if (unit.studied) totalStudied += 20; // 20 words per unit
                if (unit.practiced) totalQuestions += 10; // 10 questions per practice
                correctAnswers += (10 - (unit.mistakes ? unit.mistakes.length : 0));
            });
        });
        
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        
        return { totalStudied, totalQuestions, correctAnswers, accuracy };
    }

    renderDetailedProgress() {
        const container = document.getElementById('bookProgressDetails');
        container.innerHTML = '';
        
        Object.entries(this.progress.books).forEach(([bookNumber, book]) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-progress-item';
            
            const bookTitle = vocabularyData.books[bookNumber].title;
            let completedUnits = 0;
            let totalUnits = 0;
            
            const unitProgress = document.createElement('div');
            unitProgress.className = 'unit-progress';
            
            Object.entries(book).forEach(([unitNumber, unit]) => {
                totalUnits++;
                if (unit.studied && unit.practiced) completedUnits++;
                
                const unitItem = document.createElement('div');
                unitItem.className = 'unit-progress-item';
                
                if (unit.studied && unit.practiced) {
                    unitItem.classList.add('completed');
                    unitItem.textContent = unitNumber;
                } else if (unit.studied || unit.practiced) {
                    unitItem.classList.add('in-progress');
                    unitItem.textContent = unitNumber;
                } else {
                    unitItem.classList.add('not-started');
                    unitItem.textContent = unitNumber;
                }
                
                unitProgress.appendChild(unitItem);
            });
            
            bookItem.innerHTML = `
                <h3>${bookTitle} (${completedUnits}/${totalUnits} units completed)</h3>
            `;
            bookItem.appendChild(unitProgress);
            container.appendChild(bookItem);
        });
    }

    markUnitStudied() {
        if (!this.progress.books[this.currentBook]) {
            this.progress.books[this.currentBook] = {};
        }
        if (!this.progress.books[this.currentBook][this.currentUnit]) {
            this.progress.books[this.currentBook][this.currentUnit] = { studied: false, practiced: false, mistakes: [] };
        }
        
        this.progress.books[this.currentBook][this.currentUnit].studied = true;
        this.saveProgress();
        this.updateProgressDisplay();
        this.updateBookProgress();
    }

    markUnitPracticed() {
        if (!this.progress.books[this.currentBook]) {
            this.progress.books[this.currentBook] = {};
        }
        if (!this.progress.books[this.currentBook][this.currentUnit]) {
            this.progress.books[this.currentBook][this.currentUnit] = { studied: false, practiced: false, mistakes: [] };
        }
        
        this.progress.books[this.currentBook][this.currentUnit].practiced = true;
        this.progress.books[this.currentBook][this.currentUnit].mistakes = this.mistakes;
        this.saveProgress();
        this.updateProgressDisplay();
        this.updateBookProgress();
    }

    updatePracticeProgress(isCorrect) {
        // This method can be used to track practice progress in real-time
        // For now, we just record mistakes
    }

    updateProgressDisplay() {
        const stats = this.calculateStats();
        const totalWords = 4 * 30 * 20; // 4 books * 30 units * 20 words
        const progressPercentage = Math.round((stats.totalStudied / totalWords) * 100);
        
        document.getElementById('progressFill').style.width = `${progressPercentage}%`;
        document.getElementById('progressText').textContent = `${progressPercentage}% Complete`;
    }

    updateBookProgress() {
        Object.entries(this.progress.books).forEach(([bookNumber, book]) => {
            const bookCard = document.querySelector(`[data-book="${bookNumber}"]`);
            if (bookCard) {
                const completedUnits = Object.values(book).filter(unit => unit.studied && unit.practiced).length;
                const progressElement = bookCard.querySelector('.book-progress');
                progressElement.textContent = `${completedUnits}/30 units`;
            }
        });
    }

    saveProgress() {
        localStorage.setItem('flashcardProgress', JSON.stringify(this.progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('flashcardProgress');
        return saved ? JSON.parse(saved) : { books: {} };
    }

    saveMistakes() {
        const allMistakes = this.loadMistakes();
        allMistakes.push(...this.mistakes);
        localStorage.setItem('flashcardMistakes', JSON.stringify(allMistakes));
        this.mistakes = [];
    }

    loadMistakes() {
        const saved = localStorage.getItem('flashcardMistakes');
        return saved ? JSON.parse(saved) : [];
    }

    deleteBook(bookNumber) {
        // Show confirmation dialog
        if (confirm(`Are you sure you want to delete Book ${bookNumber}? This action cannot be undone.`)) {
            // Remove the book card from the DOM
            const bookCard = document.querySelector(`[data-book="${bookNumber}"]`);
            if (bookCard) {
                bookCard.remove();
            }
            
            // Remove book data from vocabulary
            if (vocabularyData.books[bookNumber]) {
                delete vocabularyData.books[bookNumber];
            }
            
            // Remove book progress from localStorage
            if (this.progress.books[bookNumber]) {
                delete this.progress.books[bookNumber];
                this.saveProgress();
            }
            
            // Update progress display
            this.updateProgressDisplay();
            this.updateBookProgress();
            
            // Show success message
            alert(`Book ${bookNumber} has been deleted successfully.`);
        }
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
});