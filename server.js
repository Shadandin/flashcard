const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // API: Save a single word override for a book
    if (req.method === 'POST' && pathname === '/api/save-word') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
            // Basic protection against very large payloads
            if (body.length > 1e6) {
                req.connection.destroy();
            }
        });
        req.on('end', () => {
            try {
                const payload = JSON.parse(body || '{}');
                const bookNumber = payload.bookNumber;
                const unitNumber = payload.unitNumber;
                const wordIndex = payload.wordIndex;
                const word = payload.word;

                if (!Number.isInteger(bookNumber) || !Number.isInteger(unitNumber) || !Number.isInteger(wordIndex) || !word || typeof word !== 'object') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
                    return;
                }

                const dataDir = path.join(__dirname, 'data');
                const filePath = path.join(dataDir, `book-${bookNumber}.json`);

                // Ensure data directory exists
                fs.mkdirSync(dataDir, { recursive: true });

                // Load existing overrides if available
                let overrides = {};
                if (fs.existsSync(filePath)) {
                    try {
                        const content = fs.readFileSync(filePath, 'utf-8');
                        overrides = JSON.parse(content || '{}');
                    } catch (e) {
                        // If file is corrupted, reset to empty
                        overrides = {};
                    }
                }

                // Store as a flat map: "<unit>-<index>": wordObject
                const key = `${unitNumber}-${wordIndex}`;
                overrides[key] = {
                    word: word.word || '',
                    partOfSpeech: word.partOfSpeech || '',
                    meaning: word.meaning || '',
                    example: word.example || ''
                };

                fs.writeFileSync(filePath, JSON.stringify(overrides, null, 2), 'utf-8');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Failed to save word' }));
            }
        });
        return;
    }

    // API: Get overrides for a specific book
    if (req.method === 'GET' && pathname === '/api/book-overrides') {
        const bookParam = parsedUrl.query && parsedUrl.query.book;
        const bookNumber = parseInt(bookParam, 10);
        if (!Number.isInteger(bookNumber)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }
        const filePath = path.join(__dirname, 'data', `book-${bookNumber}.json`);
        if (fs.existsSync(filePath)) {
            try {
                const content = fs.readFileSync(filePath, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(content);
                return;
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({}));
        return;
    }

    // Static file serving
    let filePath = '.' + (pathname === '/' ? '/index.html' : pathname);

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});