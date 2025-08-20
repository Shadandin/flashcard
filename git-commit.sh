#!/bin/bash

echo "Starting Git commit process..."

# Check if we're in a Git repository
if ! git status > /dev/null 2>&1; then
    echo "Error: Not in a Git repository"
    exit 1
fi

# Add all changes
echo "Adding changes to Git..."
git add .

# Create commit with timestamp
timestamp=$(date '+%Y-%m-%d %H:%M:%S')
echo "Committing changes..."
git commit -m "Update vocabulary data - $timestamp"

# Push to remote repository
echo "Pushing to remote repository..."
git push origin main

if [ $? -eq 0 ]; then
    echo "Successfully committed and pushed changes to Git repository!"
else
    echo "Error: Failed to push changes"
    exit 1
fi
