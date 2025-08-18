# Setup Guide for Flashcard Repository

## Prerequisites

To use the repository functionality, you need to install Node.js on your system.

### Installing Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version
   - Choose the appropriate installer for your operating system

2. **Install Node.js**:
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation

3. **Verify Installation**:
   - Open a new terminal/command prompt
   - Run: `node --version`
   - Run: `npm --version`
   - Both commands should return version numbers

### Setting Up the Flashcard Repository

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Access the Application**:
   - Open your browser
   - Navigate to `http://localhost:3000`

## Alternative: Offline Mode

If you don't want to install Node.js, you can still use the application in offline mode:

1. **Open the Application**:
   - Simply open `index.html` in your browser
   - The app will work with localStorage only

2. **Limited Functionality**:
   - Flashcards will be saved locally only
   - Repository features will be disabled
   - Progress tracking will still work

## Repository Features

Once the server is running, you'll have access to:

- **Automatic Saving**: Each new flashcard is saved to the repository
- **Data Persistence**: Flashcards stored in `flashcards_repository.json`
- **Status Monitoring**: Real-time connection status
- **Statistics**: View repository statistics
- **Search**: Search through saved flashcards

## Troubleshooting

### Node.js Not Found
- Ensure Node.js is properly installed
- Restart your terminal after installation
- Check if Node.js is in your system PATH

### Port Already in Use
- The server uses port 3000 by default
- If the port is busy, change the PORT environment variable:
  ```bash
  set PORT=3001 && npm start
  ```

### Installation Errors
- Make sure you have internet connection
- Try running `npm cache clean --force`
- Delete `node_modules` folder and run `npm install` again

## Development

For development with auto-restart:
```bash
npm run dev
```

This requires nodemon to be installed globally:
```bash
npm install -g nodemon
``` 