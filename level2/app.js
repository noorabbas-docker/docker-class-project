const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Level 2!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
