const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('.'));

// Handle Git commit requests
app.post('/git-commit', (req, res) => {
    const { bookData, timestamp } = req.body;
    
    if (!bookData) {
        return res.status(400).json({ error: 'No book data provided' });
    }
    
    try {
        // Save the updated book data to a temporary file
        const tempFile = path.join(__dirname, 'temp-book-data.json');
        fs.writeFileSync(tempFile, bookData);
        
        // Git operations
        const commitMessage = `Update vocabulary data - ${new Date().toLocaleString()}`;
        
        // Stage the changes
        exec('git add .', (error, stdout, stderr) => {
            if (error) {
                console.error('Error staging changes:', error);
                return res.status(500).json({ error: 'Failed to stage changes' });
            }
            
            // Commit the changes
            exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error committing changes:', error);
                    return res.status(500).json({ error: 'Failed to commit changes' });
                }
                
                // Push to remote repository
                exec('git push origin main', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Error pushing changes:', error);
                        return res.status(500).json({ error: 'Failed to push changes' });
                    }
                    
                    console.log('Successfully committed and pushed changes to Git');
                    
                    // Clean up temporary file
                    try {
                        fs.unlinkSync(tempFile);
                    } catch (cleanupError) {
                        console.error('Error cleaning up temp file:', cleanupError);
                    }
                    
                    res.json({ success: true, message: 'Changes committed and pushed successfully' });
                });
            });
        });
        
    } catch (error) {
        console.error('Error handling Git commit:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Alternative: Direct Git operations without server
function performGitOperations(bookData) {
    return new Promise((resolve, reject) => {
        const commitMessage = `Update vocabulary data - ${new Date().toLocaleString()}`;
        
        // Stage all changes
        exec('git add .', (error, stdout, stderr) => {
            if (error) {
                console.error('Error staging changes:', error);
                return reject(error);
            }
            
            // Commit changes
            exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error committing changes:', error);
                    return reject(error);
                }
                
                // Push to remote
                exec('git push origin main', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Error pushing changes:', error);
                        return reject(error);
                    }
                    
                    console.log('Git operations completed successfully');
                    resolve('Changes committed and pushed successfully');
                });
            });
        });
    });
}

// Export for use in other scripts
module.exports = { performGitOperations };

// Start server if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Git commit handler server running on port ${PORT}`);
    });
}
