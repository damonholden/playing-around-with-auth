import http from 'node:http';

const server = http.createServer();

server
	.on('request', (request, response) => {
		const { method, url } = request;

		if (method === 'GET' && url === '/') {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write('<html><a href="/account">Account</a></html>');
			response.end();
		}

		if (method === 'GET' && url === '/account') {
			response.writeHead(200, { 'Content-Type': 'text/plain' });
			response.write("Jimmy's user data");
			response.write('\n');
			response.write("Sandra's user data");
			response.end();
		}

		else {
			response.statusCode = 404;
			response.end();
		}
	}).on('error', (error) => {
		console.error(new Error('an oopsie happend on the server', { cause: error }));
		response.statusCode = 500;
		response.end();
	})
	.listen(8000, () => {
		console.log('Node server created at port 8000');
	});
