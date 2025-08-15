# Git Synchronization Setup Guide

This guide will help you set up Git synchronization so that flashcards created on one device will automatically appear on other devices when you pull the repository.

## 🎯 Overview

The flashcard app now supports Git-based synchronization, which means:
- **Automatic commits**: Each new flashcard is automatically committed to Git
- **Cross-device sync**: Pull the repository on any device to get the latest flashcards
- **Version control**: Track changes and revert if needed
- **Collaboration**: Multiple users can contribute to the same flashcard collection

## 📋 Prerequisites

1. **Git installed** on all devices
2. **GitHub/GitLab account** (or any Git hosting service)
3. **Node.js** installed (for the server)

## 🚀 Step-by-Step Setup

### Step 1: Initialize Git Repository

1. **Navigate to your project directory**:
   ```bash
   cd path/to/your/flashcard/project
   ```

2. **Initialize Git repository**:
   ```bash
   git init
   ```

3. **Add all files to Git**:
   ```bash
   git add .
   git commit -m "Initial commit - Flashcard app"
   ```

### Step 2: Create Remote Repository

1. **Go to GitHub/GitLab** and create a new repository
2. **Don't initialize** with README, .gitignore, or license (since you already have files)
3. **Copy the repository URL** (e.g., `https://github.com/username/flashcard-app.git`)

### Step 3: Connect to Remote Repository

1. **Add remote origin**:
   ```bash
   git remote add origin https://github.com/username/flashcard-app.git
   ```

2. **Push to remote**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 4: Configure Git User (if not already done)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 5: Start the Server

```bash
npm install
npm start
```

## 🔄 Using Git Sync on Multiple Devices

### Device A (Creating Flashcards)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/flashcard-app.git
   cd flashcard-app
   ```

2. **Install dependencies and start server**:
   ```bash
   npm install
   npm start
   ```

3. **Create flashcards** - they will be automatically committed and pushed

### Device B (Receiving Flashcards)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/flashcard-app.git
   cd flashcard-app
   ```

2. **Install dependencies and start server**:
   ```bash
   npm install
   npm start
   ```

3. **Pull latest changes** (or use the "Sync Git" button in the app):
   ```bash
   git pull
   ```

## 🎮 App Features

### Automatic Git Operations

- **Auto-commit**: Each new flashcard is automatically committed
- **Auto-push**: Changes are pushed to the remote repository
- **Auto-pull**: Latest changes are pulled when loading flashcards

### Manual Git Sync

- **Sync Button**: Use the "Sync Git" button in the Progress section
- **Status Display**: See current Git status, branch, and last commit
- **Error Handling**: Clear error messages if Git operations fail

## ⚙️ Configuration Options

### Environment Variables

You can configure Git behavior using environment variables:

```bash
# Disable Git sync entirely
GIT_SYNC=false npm start

# Disable auto-commit (manual sync only)
GIT_AUTO_COMMIT=false npm start

# Both disabled
GIT_SYNC=false GIT_AUTO_COMMIT=false npm start
```

### Git Configuration

The app uses your system's Git configuration:

```bash
# Set your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Configure authentication (if using HTTPS)
git config --global credential.helper store
```

## 🔧 Troubleshooting

### Common Issues

1. **"Not a Git repository"**
   - Solution: Run `git init` in the project directory

2. **"Authentication failed"**
   - Solution: Set up SSH keys or use personal access tokens

3. **"Remote not configured"**
   - Solution: Add remote with `git remote add origin <url>`

4. **"Merge conflicts"**
   - Solution: Resolve conflicts manually or use `git pull --rebase`

### Manual Git Operations

If automatic Git operations fail, you can use manual commands:

```bash
# Check status
git status

# Add changes
git add flashcards_repository.json

# Commit changes
git commit -m "Update flashcards"

# Push changes
git push

# Pull latest changes
git pull
```

## 📱 Multi-Device Workflow

### Daily Workflow

1. **Start working on Device A**:
   - Create new flashcards
   - Changes are automatically synced

2. **Switch to Device B**:
   - Open the app
   - Click "Sync Git" or restart the server
   - New flashcards appear automatically

3. **Continue on any device**:
   - All devices stay synchronized
   - No manual file copying needed

### Best Practices

1. **Always pull before starting work**:
   ```bash
   git pull
   ```

2. **Check Git status regularly**:
   - Use the Git status display in the app
   - Monitor for any sync issues

3. **Resolve conflicts promptly**:
   - If conflicts occur, resolve them immediately
   - Don't let conflicts accumulate

## 🔒 Security Considerations

1. **Repository visibility**: Choose public or private based on your needs
2. **Access control**: Use personal access tokens for authentication
3. **Backup**: The Git repository serves as a backup of your flashcards
4. **Version history**: All changes are tracked and can be reverted

## 🆘 Getting Help

If you encounter issues:

1. **Check the console** for error messages
2. **Verify Git installation**: `git --version`
3. **Check repository status**: `git status`
4. **Review network connectivity** for push/pull operations
5. **Check authentication** if using private repositories

## 📈 Advanced Features

### Branch Management

You can create branches for different purposes:

```bash
# Create a feature branch
git checkout -b feature/new-vocabulary

# Work on the branch
# ... create flashcards ...

# Merge back to main
git checkout main
git merge feature/new-vocabulary
```

### Collaboration

Multiple users can contribute:

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create flashcards** and push to your fork
4. **Create pull request** to merge changes

### Backup and Recovery

```bash
# Create a backup branch
git checkout -b backup/$(date +%Y%m%d)

# Restore from backup
git checkout backup/20231201
```

---

**Happy learning!** 🎓 Your flashcards will now stay synchronized across all your devices automatically. 