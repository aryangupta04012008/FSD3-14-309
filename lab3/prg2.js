import http from 'http';

const server = http.createServer((req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('Hello, World!\n');
  //});

server.listen(4444, () => {
  console.log('Server running on port 4444');
});