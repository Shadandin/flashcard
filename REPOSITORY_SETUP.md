# Repository Setup Guide

## Current Status
The flashcard app is currently running in **Local Mode** because Node.js is not installed on your system. This means:
- ✅ Words are saved locally in your browser
- ✅ All app features work perfectly
- ❌ Words are not synced to a repository
- ❌ No cross-device synchronization

## How the App Works

### Local Mode (Current)
- Words are saved in your browser's localStorage
- Data persists between browser sessions
- Works offline
- No server required

### Repository Mode (Optional)
- Words are saved to a server repository
- Enables cross-device synchronization
- Requires Node.js and server setup

## To Enable Repository Mode

### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version
3. Restart your computer
4. Verify installation by opening PowerShell and typing: `node --version`

### Step 2: Start the Server
1. Open PowerShell in the flashcard folder
2. Run: `node server.js`
3. The server will start on port 3000
4. Keep the server running while using the app

### Step 3: Access the App
1. Open `index.html` in your browser
2. The repository status should show "Connected"
3. Words will now be saved to both local storage and repository

## Benefits of Repository Mode
- **Cross-device sync**: Words created on one device appear on others
- **Backup**: Your words are backed up on the server
- **Collaboration**: Share words with others (if configured)
- **Git integration**: Automatic version control of your vocabulary

## Current App Features (Working Now)
- ✅ Create and edit words
- ✅ Study mode with flashcards
- ✅ Practice mode with 30 questions
- ✅ Review mistakes
- ✅ Progress tracking
- ✅ Local data persistence
- ✅ Duplicate word prevention
- ✅ Part of speech selection

## Troubleshooting
- **"Repository: Offline (Local Mode)"**: Normal when Node.js is not installed
- **Words not saving**: Check browser console for errors
- **Server won't start**: Make sure Node.js is installed correctly

## Recommendation
The app works perfectly in Local Mode for personal use. Repository Mode is only needed if you want cross-device synchronization or backup features. 