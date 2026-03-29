const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const STARS_FILE = path.join(__dirname, 'stars.json');

// Create stars.json if it doesn't exist
if (!fs.existsSync(STARS_FILE)) fs.writeFileSync(STARS_FILE, '[]');

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  // API: GET stars
  if (req.method === 'GET' && req.url === '/api/stars') {
    const data = fs.readFileSync(STARS_FILE, 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
    return;
  }

  // API: POST stars
  if (req.method === 'POST' && req.url === '/api/stars') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        JSON.parse(body); // validate JSON
        fs.writeFileSync(STARS_FILE, body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('{"ok":true}');
      } catch {
        res.writeHead(400);
        res.end('{"error":"Invalid JSON"}');
      }
    });
    return;
  }

  // Serve static files
  let filePath = req.url === '/' ? '/dashboard.html' : req.url;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Viral TikTok Scout running at http://localhost:${PORT}`);
});
