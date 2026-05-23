const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Handle root path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // Get file extension
  const ext = path.extname(filePath).toLowerCase();
  
  // Set content type
  let contentType = 'text/html';
  if (ext === '.css') contentType = 'text/css';
  if (ext === '.js') contentType = 'application/javascript';
  if (ext === '.json') contentType = 'application/json';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  if (ext === '.gif') contentType = 'image/gif';
  if (ext === '.svg') contentType = 'image/svg+xml';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📖 Open http://localhost:${PORT} in your browser`);
});
