const http = require('http');

const appName = process.env.APP_NAME || 'DefaultApp';
const appVersion = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`App: ${appName}\nVersion: ${appVersion}\n`);
});

server.listen(3002, () => console.log('Server running on port 3002'));
