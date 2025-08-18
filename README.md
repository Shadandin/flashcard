# Duolingo-Style Flashcard App

A modern, interactive flashcard learning application inspired by Duolingo's design and functionality. Built with vanilla JavaScript, HTML, and CSS.

## Features

### 📚 Book Structure
- **4 Books**: Books 3, 4, 5, and 6
- **30 Units per Book**: Each book contains 30 learning units
- **20 Words per Unit**: Every unit has 20 flashcards to study
- **Total**: 2,400 flashcards across all books (4 × 30 × 20)

### 🎯 Learning Features
- **Interactive Flashcards**: Flip cards to reveal meanings and examples
- **Progress Tracking**: Automatic progress saving using localStorage
- **Visual Progress Indicators**: See your completion status for each book and unit
- **Navigation Controls**: Easy navigation between words and units
- **Keyboard Support**: Use arrow keys and spacebar for navigation
- **Touch/Swipe Support**: Mobile-friendly swipe gestures

### 🎨 Design Features
- **Duolingo-Inspired UI**: Modern, clean interface with smooth animations
- **Color Scheme**: Light blue (#87CEEB) and sour red (#FF6B6B) theme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Card flip animations and transition effects
- **Progress Visualization**: Visual progress bars and completion indicators

## File Structure

```
flashcard/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
├── Book 3.docx         # Book content (placeholder)
├── Book 4.docx         # Book content (placeholder)
├── Book 5.docx         # Book content (placeholder)
└── Book 6.docx         # Book content (placeholder)
```

## Flashcard Structure

Each flashcard contains four fields:
1. **Word**: The vocabulary word to learn
2. **Part of Speech**: Grammatical category (noun, verb, adjective, etc.)
3. **Meaning**: Definition or translation
4. **Example**: Sample sentence showing usage

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. The app will load with the book selection screen
3. Your progress is automatically saved in the browser

### Navigation
1. **Select a Book**: Click on any of the four books (3, 4, 5, or 6)
2. **Choose a Unit**: Select a unit from 1-30 within the book
3. **Study Flashcards**: Navigate through the 20 words in the unit

### Flashcard Controls
- **Flip Card**: Click the "Flip Card" button or press Spacebar/Enter
- **Previous Word**: Click "Previous" button or press Left Arrow
- **Next Word**: Click "Next" button or press Right Arrow
- **Progress Dots**: Click any dot to jump to a specific word
- **Swipe**: On mobile, swipe left/right to navigate between words

### Progress Tracking
- **Book Progress**: See completion percentage for each book
- **Unit Progress**: Visual indicators show completed units
- **Word Progress**: Progress dots show your position in the current unit
- **Auto-Save**: Progress is automatically saved to localStorage

## Technical Details

### Browser Compatibility
- Modern browsers with ES6+ support
- LocalStorage for progress persistence
- CSS Grid and Flexbox for responsive layout
- CSS animations and transitions

### Performance Features
- Efficient DOM manipulation
- Event delegation for better performance
- Smooth animations with CSS transforms
- Responsive design with mobile-first approach

### Data Structure
The app uses a structured data format:
```javascript
{
  "3": {  // Book 3
    "1": {  // Unit 1
      "completed": false,
      "wordsCompleted": 0,
      "totalWords": 20
    }
    // ... more units
  }
  // ... more books
}
```

## Customization

### Adding Real Content
To add actual vocabulary content:
1. Modify the `loadFlashcard()` method in `script.js`
2. Replace placeholder data with real word data
3. Consider integrating with external data sources or APIs

### Styling Changes
- Modify CSS variables in `styles.css` for color changes
- Adjust animations and transitions
- Customize responsive breakpoints

### Feature Extensions
The app is designed to be easily extensible:
- Add audio pronunciation
- Implement spaced repetition algorithms
- Add user accounts and cloud sync
- Include gamification elements (streaks, points, achievements)

## Browser Storage

The app uses localStorage to save:
- Progress for each book and unit
- Completion status
- Words completed per unit

Data persists between browser sessions and is stored locally on the user's device.

## Future Enhancements

Potential features for future versions:
- **Audio Support**: Pronunciation for each word
- **Spaced Repetition**: Intelligent review scheduling
- **User Accounts**: Cloud synchronization
- **Statistics**: Detailed learning analytics
- **Custom Decks**: User-created flashcard sets
- **Offline Support**: Service worker for offline access
- **Social Features**: Share progress and compete with friends

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to contribute by:
- Adding new features
- Improving the UI/UX
- Fixing bugs
- Adding more language support
- Optimizing performance

---

**Note**: This is a template/placeholder app. The actual word content needs to be populated based on your specific learning materials from the Book 3-6 documents.
