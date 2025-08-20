# 📚 Enhanced Flashcard App

A modern, feature-rich flashcard application designed for vocabulary learning with study statistics, spaced repetition, and progress tracking. Built with HTML, CSS, and JavaScript.

## ✨ Features

### 🎯 Core Learning Features
- **4 Books with 30 Units Each**: Comprehensive vocabulary organized by difficulty levels
- **Interactive Flashcards**: Beautiful flip animations with word, meaning, and example sentences
- **Progress Tracking**: Save your learning progress automatically
- **Unit Unlocking System**: Complete 80% of a unit to unlock the next one

### 📊 Study Statistics
- **Study Streaks**: Track your daily learning streak
- **Total Study Time**: Monitor how long you've been studying
- **Session Counter**: Keep track of your study sessions
- **Global Statistics**: View your overall learning progress

### 🧠 Smart Learning Features
- **Difficulty Tracking**: Mark words as easy (1), medium (2), or difficult (3)
- **Difficult Words List**: Automatically track words you struggle with
- **Unit Difficulty Indicators**: Visual indicators showing unit difficulty levels
- **Completion Badges**: See your progress at a glance

### 💾 Data Management
- **Export Progress**: Download your learning data as JSON
- **Import Progress**: Restore your progress from backup files
- **Local Storage**: Automatic saving of your progress
- **Cross-device Sync**: Transfer progress between devices

### 🎮 User Experience
- **Keyboard Shortcuts**: 
  - `← →` Navigate cards
  - `Space` Next card
  - `F` Flip card
  - `1-3` Mark difficulty
- **Touch/Swipe Support**: Swipe left/right to navigate on mobile
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and hover effects

### 🏆 Gamification
- **Completion Modals**: Celebrate unit completions with statistics
- **Progress Bars**: Visual progress indicators for books and units
- **Streak Counter**: Maintain motivation with daily streaks
- **Achievement Tracking**: Monitor your learning milestones

## 🚀 Installation

1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. **Start Learning** immediately - no installation required!

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

## 📖 Usage Guide

### Getting Started
1. **Choose a Book**: Select from Books 3-6 based on your level
2. **Select a Unit**: Start with Unit 1 (automatically unlocked)
3. **Study Flashcards**: Click "Show Meaning" to reveal definitions
4. **Navigate**: Use arrow keys or click navigation buttons
5. **Track Progress**: Monitor your statistics in the header

### Study Tips
- **Use Keyboard Shortcuts**: Faster navigation with keyboard
- **Mark Difficulty**: Press 1-3 to mark word difficulty
- **Review Difficult Words**: Focus on words marked as difficult
- **Maintain Streaks**: Study daily to build your streak
- **Export Regularly**: Backup your progress periodically

### Advanced Features
- **Export Progress**: Click the download icon in the header
- **Import Progress**: Click the upload icon to restore data
- **Mobile Study**: Swipe left/right to navigate on touch devices
- **Track Statistics**: Monitor your learning metrics in real-time

## 🎨 Customization

### Adding New Vocabulary
1. Edit `bookData.js` to add new words
2. Follow the existing data structure:
```javascript
{
    word: "example",
    partOfSpeech: "noun",
    meaning: "a thing characteristic of its kind",
    example: "This is an example sentence."
}
```

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- The app uses CSS custom properties for easy theming
- Responsive design adapts to different screen sizes

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### File Structure
```
flashcard/
├── index.html          # Main application
├── styles.css          # Styling and animations
├── script.js           # Core functionality
├── bookData.js         # Vocabulary data
├── extract_content.py  # Word document parser
└── README.md          # This file
```

### Data Storage
- **Local Storage**: Progress saved automatically in browser
- **JSON Format**: Export/import uses standard JSON
- **No Server Required**: Works completely offline

### Performance
- **Lightweight**: Minimal dependencies, fast loading
- **Offline Capable**: Works without internet connection
- **Memory Efficient**: Optimized for smooth performance

## 🎯 Learning Methodology

### Spaced Repetition
The app implements basic spaced repetition principles:
- Track word difficulty automatically
- Focus on difficult words
- Progressive unit unlocking

### Active Recall
- Flashcards encourage active recall
- Multiple interaction methods (click, keyboard, touch)
- Immediate feedback on progress

### Gamification
- Streak tracking for motivation
- Visual progress indicators
- Achievement-based unit unlocking

## 🤝 Contributing

### Adding Features
1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test thoroughly
5. Submit a pull request

### Reporting Issues
- Use GitHub Issues for bug reports
- Include browser and OS information
- Describe steps to reproduce

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **Inter font family** for clean design
- **CSS Grid & Flexbox** for responsive layout

## 📞 Support

For questions or support:
- Check the usage guide above
- Review browser compatibility
- Ensure JavaScript is enabled
- Try clearing browser cache if issues persist

---

**Happy Learning! 🎓**
*Built with ❤️ for effective vocabulary learning*

