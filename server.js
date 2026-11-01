const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(BASE_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

let port = 3000;
function startServer(p) {
  const s = server.listen(p, () => {
    const url = `http://localhost:${p}`;
    console.log(`=======================================================`);
    console.log(`Medical MCQ & Lecture PDF Generator`);
    console.log(`App running at: ${url}`);
    console.log(`=======================================================`);

    // Auto-launch default browser on Windows
    exec(`start ${url}`);
  });

  s.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${p} in use, trying ${p + 1}...`);
      startServer(p + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(port);
