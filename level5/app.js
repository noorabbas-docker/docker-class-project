const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  
  res.setHeader('Content-Type', 'application/json');
  
  if (pathname === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to Level 5!', level: 5 }));
  } else if (pathname === '/api/status') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'running', port: 3003 }));
  } else if (pathname === '/api/info') {
    res.writeHead(200);
    res.end(JSON.stringify({ app: 'Level 5 Advanced', version: '3.0.0' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3003, () => console.log('Server running on port 3003'));
