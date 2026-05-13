const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (pathname === '/') {
    res.end('Welcome to Level 3!');
  } else if (pathname === '/hello') {
    res.end('Hello from Level 3!');
  } else if (pathname === '/about') {
    res.end('This is Level 3 - More Advanced');
  } else {
    res.end('Page not found');
  }
});

server.listen(3001, () => console.log('Server running on port 3001'));
