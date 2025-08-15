# 4000 Essential English Words - Flashcard App

A comprehensive flashcard application for learning the 4000 Essential English Words series, featuring both local storage and repository persistence.

## Features

- **Study Mode**: Flip through flashcards to learn new words
- **Practice Mode**: Test your knowledge with multiple-choice questions
- **Review Mode**: Review mistakes from practice sessions
- **Progress Tracking**: Monitor your learning progress across all books and units
- **Repository Storage**: Save flashcards to a persistent repository
- **Offline Support**: Continue learning even when repository is unavailable

## Repository Functionality

The app now includes a backend repository system that automatically saves each newly created flashcard to a persistent storage. This ensures your flashcards are safely stored and can be accessed across different devices.

### Repository Features

- **Automatic Saving**: Each new flashcard is automatically saved to the repository
- **Data Persistence**: Flashcards are stored in a JSON file on the server
- **Status Monitoring**: Real-time repository connection status
- **Statistics**: View repository statistics including total flashcards and last update time
- **Search Capability**: Search flashcards by word, meaning, or example
- **Book/Unit Filtering**: Filter flashcards by book and unit

## Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`

## Development

For development with auto-restart:
```bash
npm run dev
```

## Repository API Endpoints

The server provides the following API endpoints:

- `GET /api/flashcards` - Get all flashcards
- `POST /api/flashcards` - Save a new flashcard
- `PUT /api/flashcards/:id` - Update an existing flashcard
- `DELETE /api/flashcards/:id` - Delete a flashcard
- `GET /api/flashcards/search` - Search flashcards
- `GET /api/stats` - Get repository statistics

## How to Use

1. **Select a Book**: Choose from Book 3-6 (Pre-Intermediate to Advanced levels)
2. **Select a Unit**: Each book contains 30 units with 20 words each
3. **Study Mode**: 
   - Click on empty word slots to add new flashcards
   - Fill in the word, part of speech, meaning, and example
   - Click "Save Word" to save to both local storage and repository
4. **Practice Mode**: Test your knowledge with generated questions
5. **Review Mistakes**: Review incorrect answers from practice sessions
6. **Progress**: Monitor your learning progress and repository statistics

## Repository Status

The app displays the repository connection status in the header:
- **Connected** (Green): Repository is available and working
- **Disconnected** (Red): Repository server is not available
- **Error** (Yellow): Repository server is available but experiencing issues

## Data Storage

- **Local Storage**: Flashcards are cached in browser localStorage for offline access
- **Repository**: Flashcards are permanently stored in `flashcards_repository.json`
- **Synchronization**: The app automatically syncs data between local storage and repository

## File Structure

```
flashcard/
├── index.html          # Main application interface
├── styles.css          # Application styling
├── app.js              # Frontend application logic
├── data.js             # Initial vocabulary data
├── server.js           # Backend repository server
├── package.json        # Node.js dependencies
├── flashcards_repository.json  # Repository data (created automatically)
└── README.md           # This file
```

## Technical Details

- **Frontend**: Vanilla JavaScript with modern ES6+ features
- **Backend**: Node.js with Express.js
- **Storage**: JSON file-based repository with localStorage backup
- **Styling**: Modern CSS with gradients and animations
- **Responsive**: Works on desktop and mobile devices

## Troubleshooting

### Repository Connection Issues

1. **Check Server**: Ensure the Node.js server is running (`npm start`)
2. **Check Port**: Verify the server is running on port 3000
3. **Check Console**: Look for error messages in browser console
4. **Offline Mode**: The app works offline with localStorage backup

### Data Loss Prevention

- Flashcards are automatically saved to both localStorage and repository
- If repository is unavailable, data is still saved locally
- Repository data is automatically loaded when connection is restored

## Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the UI/UX
- Fixing bugs
- Adding more vocabulary data

## License

This project is open source and available under the MIT License.