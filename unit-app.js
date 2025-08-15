// Unit Window Application Logic
class UnitApp {
    constructor() {
        this.currentBook = null;
        this.currentUnit = null;
        this.currentWordIndex = 0;
        this.studyWordIndex = 0;
        this.repositoryStatus = 'disconnected';
        
        // Load saved vocabulary data
        this.loadVocabularyData();
        
        this.initializeUnit();
        this.initializeEventListeners();
        this.checkRepositoryStatus();
    }

    initializeUnit() {
        // Get parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        this.currentBook = parseInt(urlParams.get('book'));
        this.currentUnit = parseInt(urlParams.get('unit'));
        
        if (!this.currentBook || !this.currentUnit) {
            alert('Invalid unit parameters. Please return to the main app.');
            window.close();
            return;
        }
        
        // Update page title and header
        const bookTitle = vocabularyData.books[this.currentBook].title;
        const unitTitle = vocabularyData.books[this.currentBook].units[this.currentUnit].title;
        document.title = `Unit ${this.currentUnit} - ${bookTitle}`;
        document.getElementById('unitTitle').textContent = `Unit ${this.currentUnit}: ${unitTitle}`;
        
        // Initialize the unit
        this.renderWordList();
        this.updateWordCount();
        this.switchToReviewMode();
    }

    initializeEventListeners() {
        // Back button
        document.getElementById('backToUnits').addEventListener('click', () => {
            window.close();
        });

        // Study mode toggle buttons
        document.getElementById('reviewModeBtn').addEventListener('click', () => {
            this.switchToReviewMode();
        });

        document.getElementById('studyModeBtn').addEventListener('click', () => {
            this.switchToStudyMode();
        });

        // Study flashcard controls
        document.getElementById('studyFlipCard').addEventListener('click', () => {
            this.flipStudyCard();
        });

        document.getElementById('studyNextCard').addEventListener('click', () => {
            this.nextStudyCard();
        });

        // Study flashcard click to flip
        document.getElementById('studyFlashcard').addEventListener('click', () => {
            this.flipStudyCard();
        });

        // Individual word flashcard controls
        document.getElementById('flipCard').addEventListener('click', () => {
            this.flipCard();
        });

        document.getElementById('nextCard').addEventListener('click', () => {
            this.nextCard();
        });

        // Flashcard click to flip
        document.getElementById('flashcard').addEventListener('click', () => {
            this.flipCard();
        });

        // Editable card save button
        document.getElementById('saveWord').addEventListener('click', () => {
            this.saveWord();
        });

        // Cancel edit button
        document.getElementById('cancelEdit').addEventListener('click', () => {
            this.showWordListView();
        });

        // Enter key to save word
        document.getElementById('editWord').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveWord();
            }
        });

        // Real-time duplicate checking as user types
        document.getElementById('editWord').addEventListener('input', (e) => {
            this.checkWordAvailability(e.target.value);
        });

        // Part of speech select change event
        document.getElementById('editPartOfSpeech').addEventListener('change', () => {
            // Optional: Add any validation or feedback here
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

    switchToReviewMode() {
        // Update button states
        document.getElementById('reviewModeBtn').classList.add('active');
        document.getElementById('studyModeBtn').classList.remove('active');
        
        // Show review section, hide study section
        document.getElementById('wordListView').style.display = 'block';
        document.getElementById('studyFlashcardView').style.display = 'none';
        document.getElementById('flashcardView').style.display = 'none';
        
        // Update progress display
        this.updateStudyProgress();
    }

    switchToStudyMode() {
        // Update button states
        document.getElementById('studyModeBtn').classList.add('active');
        document.getElementById('reviewModeBtn').classList.remove('active');
        
        // Hide review section, show study section
        document.getElementById('wordListView').style.display = 'none';
        document.getElementById('studyFlashcardView').style.display = 'block';
        document.getElementById('flashcardView').style.display = 'none';
        
        // Load first study card
        this.loadStudyCard();
    }

    renderWordList() {
        const wordList = document.getElementById('wordList');
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        
        wordList.innerHTML = '';
        
        unit.words.forEach((word, index) => {
            const wordItem = document.createElement('div');
            wordItem.className = `word-item ${!word.word || word.word.trim() === '' ? 'empty' : ''}`;
            wordItem.dataset.index = index;
            
            if (word.word && word.word.trim() !== '') {
                wordItem.innerHTML = `
                    <div class="word-number">${index + 1}</div>
                    <div class="word-title">${word.word}</div>
                    <div class="word-part">${word.partOfSpeech}</div>
                    <div class="word-meaning">${word.meaning}</div>
                `;
                wordItem.addEventListener('click', () => {
                    this.openFlashcardView(index);
                });
            } else {
                wordItem.innerHTML = `
                    <div class="word-number">${index + 1}</div>
                    <div>Click to add word</div>
                `;
                wordItem.addEventListener('click', () => {
                    this.openAddWordView(index);
                });
            }
            
            wordList.appendChild(wordItem);
        });
        
        // Update study progress
        this.updateStudyProgress();
    }

    updateWordCount() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const existingWords = unit.words.filter(word => word.word && word.word.trim() !== '').length;
        const wordCountElement = document.getElementById('wordCount');
        wordCountElement.textContent = `(${existingWords}/20 words)`;
    }

    loadStudyCard() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const existingWords = unit.words.filter(word => word.word && word.word.trim() !== '');
        
        if (existingWords.length === 0) {
            alert('No words to study in this unit. Add some words first!');
            this.switchToReviewMode();
            return;
        }
        
        if (this.studyWordIndex >= existingWords.length) {
            this.studyWordIndex = 0; // Loop back to start
        }
        
        const word = existingWords[this.studyWordIndex];
        
        // Update study card content
        document.getElementById('studyCardWord').textContent = word.word;
        document.getElementById('studyCardPartOfSpeech').textContent = word.partOfSpeech;
        document.getElementById('studyCardMeaning').textContent = word.meaning;
        document.getElementById('studyCardExample').textContent = word.example;
        
        // Reset card to front
        document.getElementById('studyFlashcard').classList.remove('flipped');
        
        // Update progress
        this.updateStudyProgress();
    }

    flipStudyCard() {
        document.getElementById('studyFlashcard').classList.toggle('flipped');
    }

    nextStudyCard() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const existingWords = unit.words.filter(word => word.word && word.word.trim() !== '');
        
        this.studyWordIndex++;
        
        if (this.studyWordIndex >= existingWords.length) {
            // Completed all words
            alert('Congratulations! You have completed studying all words in this unit.');
            this.studyWordIndex = 0;
            this.switchToReviewMode();
            return;
        }
        
        this.loadStudyCard();
    }

    updateStudyProgress() {
        const unit = vocabularyData.books[this.currentBook].units[this.currentUnit];
        const existingWords = unit.words.filter(word => word.word && word.word.trim() !== '');
        
        if (document.getElementById('studyModeBtn').classList.contains('active')) {
            // In study mode
            document.getElementById('studyProgress').textContent = `${this.studyWordIndex + 1} / ${existingWords.length}`;
        } else {
            // In review mode
            document.getElementById('studyProgress').textContent = `${this.currentWordIndex + 1} / ${unit.words.length}`;
        }
    }

    openFlashcardView(wordIndex) {
        this.currentWordIndex = wordIndex;
        this.showFlashcardView();
        this.loadCurrentWord();
    }

    openAddWordView(wordIndex) {
        this.currentWordIndex = wordIndex;
        this.showFlashcardView();
        this.showEditableCard({ word: '', partOfSpeech: '', meaning: '', example: '' });
    }

    showFlashcardView() {
        document.getElementById('wordListView').style.display = 'none';
        document.getElementById('studyFlashcardView').style.display = 'none';
        document.getElementById('flashcardView').style.display = 'block';
    }

    showWordListView() {
        document.getElementById('flashcardView').style.display = 'none';
        document.getElementById('studyFlashcardView').style.display = 'none';
        document.getElementById('wordListView').style.display = 'block';
        this.renderWordList();
        this.updateWordCount();
        this.updateStudyProgress();
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
        
        // Show study controls for existing words
        document.getElementById('studyControls').style.display = 'flex';
        
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
        
        // Hide study controls when adding new words
        document.getElementById('studyControls').style.display = 'none';
        
        // Populate input fields with current values (if any)
        document.getElementById('editWord').value = word.word || '';
        
        // Set the selected option in the dropdown
        const partOfSpeechSelect = document.getElementById('editPartOfSpeech');
        partOfSpeechSelect.value = word.partOfSpeech || '';
        
        document.getElementById('editMeaning').value = word.meaning || '';
        document.getElementById('editExample').value = word.example || '';
        
        // Clear any existing word availability status
        this.clearWordAvailabilityStatus();
        
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
        
        // Check for duplicates locally first
        const isDuplicateLocal = this.checkDuplicateWord(newWord);
        if (isDuplicateLocal) {
            alert(`The word "${newWord}" already exists in your local vocabulary. Please choose a different word.`);
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
            } else if (response.status === 409) {
                // Handle duplicate word error from repository
                const error = await response.json();
                console.error('Duplicate word in repository:', error);
                alert(`The word "${newWord}" already exists in the repository. Please choose a different word.`);
                // Revert the local changes since it's a duplicate
                word.word = '';
                word.partOfSpeech = '';
                word.meaning = '';
                word.example = '';
                this.saveVocabularyData();
                this.loadCurrentWord();
                return;
            } else {
                const error = await response.json();
                console.error('Failed to save to repository:', error);
                alert('Word saved locally, but failed to save to repository. Please check server connection.');
            }
        } catch (error) {
            console.error('Error saving to repository:', error);
            alert('Word saved locally, but failed to save to repository. Please check server connection.');
        }
        
        // Return to word list view and update
        this.showWordListView();
    }

    saveVocabularyData() {
        // Save the updated vocabulary data to localStorage
        localStorage.setItem('vocabularyData', JSON.stringify(vocabularyData));
    }

    checkDuplicateWord(newWord) {
        // Check if the word already exists in any book/unit (case-insensitive)
        const trimmedNewWord = newWord.trim().toLowerCase();
        
        for (const bookNum in vocabularyData.books) {
            const book = vocabularyData.books[bookNum];
            for (const unitNum in book.units) {
                const unit = book.units[unitNum];
                for (const word of unit.words) {
                    if (word.word && word.word.trim().toLowerCase() === trimmedNewWord) {
                        return true; // Found a duplicate
                    }
                }
            }
        }
        
        return false; // No duplicate found
    }

    async checkWordAvailability(word) {
        const trimmedWord = word.trim();
        if (!trimmedWord) {
            this.clearWordAvailabilityStatus();
            return;
        }

        // Check locally first
        const isLocalDuplicate = this.checkDuplicateWord(trimmedWord);
        if (isLocalDuplicate) {
            this.showWordAvailabilityStatus('duplicate', `"${trimmedWord}" already exists locally`);
            return;
        }

        // Check repository if connected
        if (this.repositoryStatus === 'connected') {
            try {
                const response = await fetch(`/api/flashcards/check/${encodeURIComponent(trimmedWord)}`, {
                    signal: AbortSignal.timeout(3000)
                });
                
                if (response.ok) {
                    const result = await response.json();
                    if (result.exists) {
                        this.showWordAvailabilityStatus('duplicate', `"${trimmedWord}" already exists in repository`);
                    } else {
                        this.showWordAvailabilityStatus('available', `"${trimmedWord}" is available`);
                    }
                } else {
                    this.showWordAvailabilityStatus('checking', 'Checking availability...');
                }
            } catch (error) {
                // If repository check fails, just show local status
                this.showWordAvailabilityStatus('available', `"${trimmedWord}" is available locally`);
            }
        } else {
            this.showWordAvailabilityStatus('available', `"${trimmedWord}" is available locally`);
        }
    }

    showWordAvailabilityStatus(status, message) {
        let statusElement = document.getElementById('wordAvailabilityStatus');
        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.id = 'wordAvailabilityStatus';
            statusElement.style.cssText = `
                font-size: 0.85rem;
                margin-top: 5px;
                padding: 4px 8px;
                border-radius: 4px;
                transition: all 0.3s ease;
            `;
            
            const wordInput = document.getElementById('editWord');
            wordInput.parentNode.insertBefore(statusElement, wordInput.nextSibling);
        }

        statusElement.textContent = message;
        statusElement.className = `word-availability-${status}`;
        
        // Apply appropriate styling
        switch (status) {
            case 'duplicate':
                statusElement.style.color = '#d32f2f';
                statusElement.style.backgroundColor = '#ffebee';
                statusElement.style.border = '1px solid #ffcdd2';
                break;
            case 'available':
                statusElement.style.color = '#2e7d32';
                statusElement.style.backgroundColor = '#e8f5e8';
                statusElement.style.border = '1px solid #c8e6c9';
                break;
            case 'checking':
                statusElement.style.color = '#1976d2';
                statusElement.style.backgroundColor = '#e3f2fd';
                statusElement.style.border = '1px solid #bbdefb';
                break;
        }
    }

    clearWordAvailabilityStatus() {
        const statusElement = document.getElementById('wordAvailabilityStatus');
        if (statusElement) {
            statusElement.remove();
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
            alert('You have reached the end of this unit.');
            this.showWordListView();
        }
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
}

// Initialize the unit application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new UnitApp();
}); 