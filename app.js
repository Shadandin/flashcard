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
        this.repositoryStatus = 'disconnected';
        
        // Load saved vocabulary data
        this.loadVocabularyData();
        
        this.initializeEventListeners();
        this.updateProgressDisplay();
        this.updateBookProgress();
        this.checkRepositoryStatus();
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

        // Editable card save button
        document.getElementById('saveWord').addEventListener('click', () => {
            this.saveWord();
        });

        // Enter key to save word
        document.getElementById('editWord').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveWord();
            }
        });
        document.getElementById('editPartOfSpeech').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveWord();
            }
        });
        document.getElementById('editMeaning').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveWord();
            }
        });
        document.getElementById('editExample').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveWord();
            }
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
        
        // Check if the word is empty (editable)
        if (!word.word || word.word.trim() === '') {
            this.showEditableCard(word);
        } else {
            this.showNormalCard(word);
        }
        
        document.getElementById('studyProgress').textContent = `${this.currentWordIndex + 1} / ${unit.words.length}`;
        document.getElementById('studyUnit').textContent = `Unit ${this.currentUnit}`;
        
        // Reset card to front
        document.getElementById('flashcard').classList.remove('flipped');
    }

    showNormalCard(word) {
        // Hide editable elements
        document.getElementById('editableCard').style.display = 'none';
        document.getElementById('normalCard').style.display = 'block';
        
        // Show normal card content
        document.getElementById('word').textContent = word.word;
        document.getElementById('partOfSpeech').textContent = word.partOfSpeech;
        document.getElementById('meaning').textContent = word.meaning;
        document.getElementById('example').textContent = word.example;
    }

    showEditableCard(word) {
        // Hide normal card elements
        document.getElementById('normalCard').style.display = 'none';
        document.getElementById('editableCard').style.display = 'block';
        
        // Populate input fields with current values (if any)
        document.getElementById('editWord').value = word.word || '';
        document.getElementById('editPartOfSpeech').value = word.partOfSpeech || '';
        document.getElementById('editMeaning').value = word.meaning || '';
        document.getElementById('editExample').value = word.example || '';
        
        // Focus on the first input
        document.getElementById('editWord').focus();
    }

    async saveWord() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const word = unit.words[this.currentWordIndex];
        
        // Get values from input fields
        const newWord = document.getElementById('editWord').value.trim();
        const newPartOfSpeech = document.getElementById('editPartOfSpeech').value.trim();
        const newMeaning = document.getElementById('editMeaning').value.trim();
        const newExample = document.getElementById('editExample').value.trim();
        
        // Validate that at least the word is provided
        if (!newWord) {
            alert('Please enter a word.');
            document.getElementById('editWord').focus();
            return;
        }
        
        // Update the word object
        word.word = newWord;
        word.partOfSpeech = newPartOfSpeech;
        word.meaning = newMeaning;
        word.example = newExample;
        
        // Save to localStorage
        this.saveVocabularyData();
        
        // Save to repository
        try {
            const response = await fetch('/api/flashcards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    word: newWord,
                    partOfSpeech: newPartOfSpeech,
                    meaning: newMeaning,
                    example: newExample,
                    book: this.currentBook,
                    unit: this.currentUnit,
                    wordIndex: this.currentWordIndex
                }),
                // Add timeout to prevent hanging
                signal: AbortSignal.timeout(10000)
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log('Flashcard saved to repository:', result);
                alert('Word saved successfully to repository!');
            } else {
                const error = await response.json();
                console.error('Failed to save to repository:', error);
                alert('Word saved locally, but failed to save to repository. Please check server connection.');
            }
        } catch (error) {
            console.error('Error saving to repository:', error);
            alert('Word saved locally, but failed to save to repository. Please check server connection.');
        }
        
        // Reload the current word to show it as a normal card
        this.loadCurrentWord();
    }

    saveVocabularyData() {
        // Save the updated vocabulary data to localStorage
        localStorage.setItem('vocabularyData', JSON.stringify(vocabularyData));
    }

    loadVocabularyData() {
        // Load saved vocabulary data from localStorage
        const savedData = localStorage.getItem('vocabularyData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Merge saved data with current data, preserving structure
            Object.keys(parsedData.books).forEach(bookNum => {
                if (vocabularyData.books[bookNum]) {
                    Object.keys(parsedData.books[bookNum].units).forEach(unitNum => {
                        if (vocabularyData.books[bookNum].units[unitNum]) {
                            // Update words that have been saved
                            parsedData.books[bookNum].units[unitNum].words.forEach((savedWord, index) => {
                                if (savedWord.word && savedWord.word.trim() !== '') {
                                    vocabularyData.books[bookNum].units[unitNum].words[index] = savedWord;
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    async checkRepositoryStatus() {
        try {
            const response = await fetch('/api/stats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Add timeout to prevent hanging
                signal: AbortSignal.timeout(5000)
            });
            if (response.ok) {
                this.repositoryStatus = 'connected';
                this.updateRepositoryStatusDisplay();
                // Load any flashcards from repository that might not be in local data
                await this.loadFlashcardsFromRepository();
            } else {
                this.repositoryStatus = 'error';
                this.updateRepositoryStatusDisplay();
            }
        } catch (error) {
            console.log('Repository server not available:', error.message);
            this.repositoryStatus = 'disconnected';
            this.updateRepositoryStatusDisplay();
        }
    }

    updateRepositoryStatusDisplay() {
        const statusElement = document.getElementById('repositoryStatus');
        if (statusElement) {
            statusElement.textContent = `Repository: ${this.repositoryStatus}`;
            statusElement.className = `repository-status ${this.repositoryStatus}`;
        }
    }

    async loadFlashcardsFromRepository() {
        try {
            const response = await fetch('/api/flashcards');
            if (response.ok) {
                const data = await response.json();
                console.log('Loaded flashcards from repository:', data.flashcards.length);
                
                // Merge repository flashcards with local data
                data.flashcards.forEach(repoFlashcard => {
                    if (repoFlashcard.book && repoFlashcard.unit && repoFlashcard.wordIndex !== undefined) {
                        const bookNum = repoFlashcard.book.toString();
                        const unitNum = repoFlashcard.unit.toString();
                        
                        if (vocabularyData.books[bookNum] && 
                            vocabularyData.books[bookNum].units[unitNum] &&
                            vocabularyData.books[bookNum].units[unitNum].words[repoFlashcard.wordIndex]) {
                            
                            // Update local data with repository data if it's more recent
                            const localWord = vocabularyData.books[bookNum].units[unitNum].words[repoFlashcard.wordIndex];
                            if (!localWord.word || localWord.word.trim() === '') {
                                vocabularyData.books[bookNum].units[unitNum].words[repoFlashcard.wordIndex] = {
                                    word: repoFlashcard.word,
                                    partOfSpeech: repoFlashcard.partOfSpeech,
                                    meaning: repoFlashcard.meaning,
                                    example: repoFlashcard.example
                                };
                            }
                        }
                    }
                });
                
                // Save merged data back to localStorage
                this.saveVocabularyData();
            }
        } catch (error) {
            console.error('Error loading flashcards from repository:', error);
        }
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
        this.updateRepositoryStats();
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

    async updateRepositoryStats() {
        const statsContainer = document.getElementById('repositoryStats');
        const totalElement = document.getElementById('repoTotalFlashcards');
        const lastUpdatedElement = document.getElementById('repoLastUpdated');
        const statusElement = document.getElementById('repoStatus');
        
        if (this.repositoryStatus === 'connected') {
            try {
                const response = await fetch('/api/stats');
                if (response.ok) {
                    const stats = await response.json();
                    
                    totalElement.textContent = stats.totalFlashcards;
                    lastUpdatedElement.textContent = new Date(stats.lastUpdated).toLocaleString();
                    statusElement.textContent = 'Connected';
                    statusElement.style.color = '#28a745';
                    
                    // Update Git status
                    await this.updateGitStatus();
                    
                    statsContainer.style.display = 'block';
                } else {
                    this.showRepositoryError();
                }
            } catch (error) {
                console.error('Error fetching repository stats:', error);
                this.showRepositoryError();
            }
        } else {
            this.showRepositoryError();
        }
    }

    async updateGitStatus() {
        const gitStatusElement = document.getElementById('gitStatus');
        const gitSyncButton = document.getElementById('gitSyncButton');
        
        if (!gitStatusElement) return;
        
        try {
            const response = await fetch('/api/git/status');
            if (response.ok) {
                const gitStatus = await response.json();
                
                if (gitStatus.isGitRepository) {
                    gitStatusElement.innerHTML = `
                        <strong>Git Repository:</strong> ${gitStatus.branch}<br>
                        <strong>Last Commit:</strong> ${gitStatus.lastCommit}<br>
                        <strong>Changes:</strong> ${gitStatus.hasChanges ? 'Yes' : 'No'}
                    `;
                    gitStatusElement.style.color = '#28a745';
                    
                    if (gitSyncButton) {
                        gitSyncButton.style.display = 'inline-block';
                    }
                } else {
                    gitStatusElement.innerHTML = `
                        <strong>Git Repository:</strong> Not initialized<br>
                        <strong>Status:</strong> Local only
                    `;
                    gitStatusElement.style.color = '#ffc107';
                    
                    if (gitSyncButton) {
                        gitSyncButton.style.display = 'none';
                    }
                }
            } else {
                gitStatusElement.innerHTML = `
                    <strong>Git Status:</strong> Error<br>
                    <strong>Status:</strong> Unable to check
                `;
                gitStatusElement.style.color = '#dc3545';
            }
        } catch (error) {
            console.error('Error fetching Git status:', error);
            gitStatusElement.innerHTML = `
                <strong>Git Status:</strong> Error<br>
                <strong>Status:</strong> Connection failed
            `;
            gitStatusElement.style.color = '#dc3545';
        }
    }

    async manualGitSync() {
        const syncButton = document.getElementById('gitSyncButton');
        if (syncButton) {
            syncButton.disabled = true;
            syncButton.textContent = 'Syncing...';
        }
        
        try {
            const response = await fetch('/api/git/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.ok) {
                const result = await response.json();
                alert('Git sync completed successfully!');
                await this.updateGitStatus();
            } else {
                const error = await response.json();
                alert('Git sync failed: ' + error.error);
            }
        } catch (error) {
            console.error('Error during Git sync:', error);
            alert('Git sync failed: ' + error.message);
        } finally {
            if (syncButton) {
                syncButton.disabled = false;
                syncButton.textContent = 'Sync Git';
            }
        }
    }

    showRepositoryError() {
        const statsContainer = document.getElementById('repositoryStats');
        const totalElement = document.getElementById('repoTotalFlashcards');
        const lastUpdatedElement = document.getElementById('repoLastUpdated');
        const statusElement = document.getElementById('repoStatus');
        
        totalElement.textContent = 'N/A';
        lastUpdatedElement.textContent = 'N/A';
        statusElement.textContent = 'Disconnected';
        statusElement.style.color = '#dc3545';
        
        statsContainer.style.display = 'block';
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