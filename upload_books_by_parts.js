const fs = require('fs');
const path = require('path');

class BookUploadManager {
    constructor() {
        this.books = {
            3: { name: 'Book 3 - Pre-Intermediate Level', level: 'Pre-Intermediate' },
            4: { name: 'Book 4 - Intermediate Level', level: 'Intermediate' },
            5: { name: 'Book 5 - Upper-Intermediate Level', level: 'Upper-Intermediate' },
            6: { name: 'Book 6 - Advanced Level', level: 'Advanced' }
        };
        
        this.uploadStructure = {
            sourceFiles: [],
            rawData: [],
            parsedData: [],
            applicationFiles: [],
            testFiles: [],
            documentation: []
        };
    }

    async organizeBookParts() {
        console.log('📚 Organizing Books by Related Parts...\n');
        
        try {
            // Create upload directories
            this.createUploadDirectories();
            
            // Organize each book
            for (const [bookNum, bookInfo] of Object.entries(this.books)) {
                console.log(`📖 Processing ${bookInfo.name}...`);
                await this.organizeBook(bookNum, bookInfo);
            }
            
            // Organize application files
            this.organizeApplicationFiles();
            
            // Generate upload report
            this.generateUploadReport();
            
            console.log('\n✅ All books have been organized by their related parts!');
            console.log('📁 Check the "uploads" directory for organized files.');
            
        } catch (error) {
            console.error('❌ Error organizing books:', error.message);
            throw error;
        }
    }

    createUploadDirectories() {
        const uploadDir = 'uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        // Create book-specific directories
        Object.keys(this.books).forEach(bookNum => {
            const bookDir = path.join(uploadDir, `book${bookNum}`);
            if (!fs.existsSync(bookDir)) {
                fs.mkdirSync(bookDir);
            }
            
            // Create subdirectories for each book
            const subdirs = ['source', 'raw', 'parsed', 'tests', 'docs'];
            subdirs.forEach(subdir => {
                const subdirPath = path.join(bookDir, subdir);
                if (!fs.existsSync(subdirPath)) {
                    fs.mkdirSync(subdirPath);
                }
            });
        });

        // Create application directories
        const appDirs = ['application', 'shared', 'documentation'];
        appDirs.forEach(dir => {
            const dirPath = path.join(uploadDir, dir);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
        });
    }

    async organizeBook(bookNum, bookInfo) {
        const bookDir = path.join('uploads', `book${bookNum}`);
        
        // 1. Source Files (DOCX)
        const docxFile = `Book ${bookNum}.docx`;
        if (fs.existsSync(docxFile)) {
            const sourcePath = path.join(bookDir, 'source', docxFile);
            fs.copyFileSync(docxFile, sourcePath);
            this.uploadStructure.sourceFiles.push({
                book: bookNum,
                file: docxFile,
                path: sourcePath
            });
            console.log(`   📄 Source: ${docxFile}`);
        }

        // 2. Raw Data (TXT)
        const rawFile = `book${bookNum}_raw.txt`;
        if (fs.existsSync(rawFile)) {
            const rawPath = path.join(bookDir, 'raw', rawFile);
            fs.copyFileSync(rawFile, rawPath);
            this.uploadStructure.rawData.push({
                book: bookNum,
                file: rawFile,
                path: rawPath
            });
            console.log(`   📝 Raw: ${rawFile}`);
        }

        // 3. Parsed Data (JSON)
        const parsedFile = `book${bookNum}_parsed.json`;
        if (fs.existsSync(parsedFile)) {
            const parsedPath = path.join(bookDir, 'parsed', parsedFile);
            fs.copyFileSync(parsedFile, parsedPath);
            this.uploadStructure.parsedData.push({
                book: bookNum,
                file: parsedFile,
                path: parsedPath
            });
            console.log(`   🔧 Parsed: ${parsedFile}`);
        }

        // 4. Test Files
        const testFile = `test_book${bookNum}.js`;
        if (fs.existsSync(testFile)) {
            const testPath = path.join(bookDir, 'tests', testFile);
            fs.copyFileSync(testFile, testPath);
            this.uploadStructure.testFiles.push({
                book: bookNum,
                file: testFile,
                path: testPath
            });
            console.log(`   🧪 Test: ${testFile}`);
        }

        // 5. Processing Scripts
        const processingScripts = [
            `extract_book${bookNum}_data.js`,
            `process_book${bookNum}.js`,
            `integrate_book${bookNum}_data.js`
        ];

        processingScripts.forEach(script => {
            if (fs.existsSync(script)) {
                const scriptPath = path.join(bookDir, 'docs', script);
                fs.copyFileSync(script, scriptPath);
                console.log(`   📜 Script: ${script}`);
            }
        });

        // 6. Generate book-specific documentation
        this.generateBookDocumentation(bookNum, bookInfo, bookDir);
    }

    generateBookDocumentation(bookNum, bookInfo, bookDir) {
        const docContent = `# ${bookInfo.name}

## Book Information
- **Level**: ${bookInfo.level}
- **Book Number**: ${bookNum}
- **Total Units**: ${this.getUnitCount(bookNum)}
- **Total Words**: ${this.getWordCount(bookNum)}

## File Structure
- **Source**: Book ${bookNum}.docx - Original Word document
- **Raw**: book${bookNum}_raw.txt - Extracted text with original format
- **Parsed**: book${bookNum}_parsed.json - Structured JSON data
- **Tests**: test_book${bookNum}.js - Test suite for validation

## Data Format
- Part of Speech: Full format (noun, verb, adjective, etc.)
- Compound Forms: Supported (noun/adjective, verb/noun, etc.)
- Examples: Included for all words
- Structure: Organized by units and words

## Usage
This book data is integrated into the main flashcard application and can be accessed through the book selection interface.

Generated on: ${new Date().toISOString()}
`;

        const docPath = path.join(bookDir, 'docs', `README.md`);
        fs.writeFileSync(docPath, docContent);
        console.log(`   📖 Documentation: README.md`);
    }

    getUnitCount(bookNum) {
        try {
            const parsedFile = `book${bookNum}_parsed.json`;
            if (fs.existsSync(parsedFile)) {
                const data = JSON.parse(fs.readFileSync(parsedFile, 'utf8'));
                return Object.keys(data.units).length;
            }
        } catch (error) {
            // Ignore errors
        }
        return 'Unknown';
    }

    getWordCount(bookNum) {
        try {
            const parsedFile = `book${bookNum}_parsed.json`;
            if (fs.existsSync(parsedFile)) {
                const data = JSON.parse(fs.readFileSync(parsedFile, 'utf8'));
                return Object.values(data.units).reduce((sum, unit) => sum + unit.words.length, 0);
            }
        } catch (error) {
            // Ignore errors
        }
        return 'Unknown';
    }

    organizeApplicationFiles() {
        console.log('\n🔧 Organizing Application Files...');
        
        const appDir = path.join('uploads', 'application');
        const sharedDir = path.join('uploads', 'shared');
        const docsDir = path.join('uploads', 'documentation');

        // Core application files
        const appFiles = ['index.html', 'app.js', 'styles.css', 'data.js'];
        appFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const destPath = path.join(appDir, file);
                fs.copyFileSync(file, destPath);
                this.uploadStructure.applicationFiles.push({
                    type: 'core',
                    file: file,
                    path: destPath
                });
                console.log(`   🌐 App: ${file}`);
            }
        });

        // Shared utilities
        const sharedFiles = ['extract_book_data.js', 'integrate_book_data.js'];
        sharedFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const destPath = path.join(sharedDir, file);
                fs.copyFileSync(file, destPath);
                this.uploadStructure.applicationFiles.push({
                    type: 'shared',
                    file: file,
                    path: destPath
                });
                console.log(`   🔧 Shared: ${file}`);
            }
        });

        // Documentation
        const docFiles = ['README.md', 'SETUP.md', 'GIT_SETUP.md', 'REPOSITORY_SETUP.md'];
        docFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const destPath = path.join(docsDir, file);
                fs.copyFileSync(file, destPath);
                this.uploadStructure.documentation.push({
                    file: file,
                    path: destPath
                });
                console.log(`   📚 Doc: ${file}`);
        }
        });

        // Book 6 specific files
        const book6Files = [
            'word_replacement_manager.js',
            'word_replacement_interface.js',
            'data_quality_analyzer.js',
            'run_book6_tests.js',
            'BOOK6_TESTING_GUIDE.md'
        ];

        const book6Dir = path.join('uploads', 'book6', 'docs');
        book6Files.forEach(file => {
            if (fs.existsSync(file)) {
                const destPath = path.join(book6Dir, file);
                fs.copyFileSync(file, destPath);
                console.log(`   📖 Book 6: ${file}`);
            }
        });
    }

    generateUploadReport() {
        console.log('\n📊 Generating Upload Report...');
        
        const reportContent = `# Book Upload Report

Generated on: ${new Date().toISOString()}

## Summary
- **Total Books**: ${Object.keys(this.books).length}
- **Source Files**: ${this.uploadStructure.sourceFiles.length}
- **Raw Data Files**: ${this.uploadStructure.rawData.length}
- **Parsed Data Files**: ${this.uploadStructure.parsedData.length}
- **Application Files**: ${this.uploadStructure.applicationFiles.length}
- **Test Files**: ${this.uploadStructure.testFiles.length}
- **Documentation Files**: ${this.uploadStructure.documentation.length}

## Book Details

${Object.entries(this.books).map(([num, info]) => `
### ${info.name}
- **Level**: ${info.level}
- **Units**: ${this.getUnitCount(num)}
- **Words**: ${this.getWordCount(num)}
- **Source**: Book ${num}.docx
- **Raw**: book${num}_raw.txt
- **Parsed**: book${num}_parsed.json
- **Tests**: test_book${num}.js
`).join('')}

## File Organization

### Source Files
${this.uploadStructure.sourceFiles.map(f => `- ${f.file} (Book ${f.book})`).join('\n')}

### Raw Data Files
${this.uploadStructure.rawData.map(f => `- ${f.file} (Book ${f.book})`).join('\n')}

### Parsed Data Files
${this.uploadStructure.parsedData.map(f => `- ${f.file} (Book ${f.book})`).join('\n')}

### Application Files
${this.uploadStructure.applicationFiles.map(f => `- ${f.file} (${f.type})`).join('\n')}

### Test Files
${this.uploadStructure.testFiles.map(f => `- ${f.file} (Book ${f.book})`).join('\n')}

### Documentation
${this.uploadStructure.documentation.map(f => `- ${f.file}`).join('\n')}

## Upload Structure
\`\`\`
uploads/
├── application/          # Core application files
├── shared/              # Shared utilities
├── documentation/       # General documentation
├── book3/              # Book 3 files
│   ├── source/         # Original DOCX
│   ├── raw/           # Extracted text
│   ├── parsed/        # JSON data
│   ├── tests/         # Test files
│   └── docs/          # Documentation
├── book4/              # Book 4 files
├── book5/              # Book 5 files
└── book6/              # Book 6 files
\`\`\`

## Next Steps
1. Review the organized files in the uploads directory
2. Verify all files are correctly categorized
3. Upload to your desired destination
4. Test the application with the uploaded files
`;

        const reportPath = path.join('uploads', 'UPLOAD_REPORT.md');
        fs.writeFileSync(reportPath, reportContent);
        console.log(`   📋 Report: UPLOAD_REPORT.md`);
    }
}

// Run the upload manager
async function main() {
    const uploadManager = new BookUploadManager();
    await uploadManager.organizeBookParts();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { BookUploadManager };
