#!/usr/bin/env node

const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs').promises;
const path = require('path');

const execAsync = promisify(exec);

console.log('🎯 Flashcard App - Git Setup Helper\n');

async function runCommand(command, description) {
    console.log(`📋 ${description}...`);
    try {
        const { stdout, stderr } = await execAsync(command);
        if (stderr) {
            console.log(`⚠️  Warning: ${stderr}`);
        }
        console.log(`✅ ${description} completed`);
        return stdout.trim();
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        return null;
    }
}

async function checkGitInstalled() {
    try {
        await execAsync('git --version');
        return true;
    } catch (error) {
        return false;
    }
}

async function isGitRepository() {
    try {
        await execAsync('git rev-parse --git-dir');
        return true;
    } catch (error) {
        return false;
    }
}

async function setupGit() {
    console.log('🔍 Checking prerequisites...\n');

    // Check if Git is installed
    const gitInstalled = await checkGitInstalled();
    if (!gitInstalled) {
        console.error('❌ Git is not installed. Please install Git first:');
        console.error('   - Windows: https://git-scm.com/download/win');
        console.error('   - macOS: brew install git');
        console.error('   - Linux: sudo apt-get install git');
        process.exit(1);
    }
    console.log('✅ Git is installed\n');

    // Check if already a Git repository
    const isGit = await isGitRepository();
    if (isGit) {
        console.log('ℹ️  Git repository already exists\n');
        
        const status = await runCommand('git status --porcelain', 'Checking Git status');
        if (status && status.length > 0) {
            console.log('📝 Uncommitted changes found. Committing them...\n');
            await runCommand('git add .', 'Adding all files');
            await runCommand('git commit -m "Auto-commit before setup"', 'Committing changes');
        }
        
        const remotes = await runCommand('git remote -v', 'Checking remote repositories');
        if (remotes && remotes.includes('origin')) {
            console.log('✅ Remote repository already configured\n');
            console.log('🎉 Git setup is complete! You can now:');
            console.log('   1. Start the server: npm start');
            console.log('   2. Create flashcards - they will be auto-synced');
            console.log('   3. Use "Sync Git" button in the app for manual sync');
            return;
        }
    } else {
        // Initialize Git repository
        await runCommand('git init', 'Initializing Git repository');
        await runCommand('git add .', 'Adding all files to Git');
        await runCommand('git commit -m "Initial commit - Flashcard app"', 'Creating initial commit');
    }

    console.log('\n🌐 Remote Repository Setup\n');
    console.log('To complete Git setup, you need to:');
    console.log('1. Create a repository on GitHub/GitLab/GitLab');
    console.log('2. Copy the repository URL');
    console.log('3. Run the following commands:\n');

    console.log('   git remote add origin <YOUR_REPOSITORY_URL>');
    console.log('   git branch -M main');
    console.log('   git push -u origin main\n');

    console.log('📝 Example:');
    console.log('   git remote add origin https://github.com/username/flashcard-app.git');
    console.log('   git branch -M main');
    console.log('   git push -u origin main\n');

    console.log('💡 After setting up the remote repository:');
    console.log('   - Start the server: npm start');
    console.log('   - Create flashcards - they will be auto-synced');
    console.log('   - Use "Sync Git" button in the app for manual sync');
    console.log('   - Clone the repository on other devices to sync flashcards\n');

    console.log('📖 For detailed instructions, see GIT_SETUP.md');
}

// Run the setup
setupGit().catch(error => {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
}); 