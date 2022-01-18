//  Write an HTTP server that serves the same text file for each request it receives.
// Fonte: https://nodejs.org/api/http.html
// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
// learnyounode hints

let porta = process.argv[2];
let fileLocation = process.argv[3];
const fs = require("fs");
const stream = fs.createReadStream(fileLocation);
const http = require('http');

const server = http.createServer(function callback(request, response) {
    stream.pipe(response);
});

server.listen(porta);