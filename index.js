import http from 'node:http';

const server = http.createServer();

server.on('request', (request, response) => {
	response.end('Hello, World!');
});

server.listen(8000, () => {
	console.log('Node server created at port 8000');
});
