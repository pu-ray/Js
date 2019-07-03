var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    if (req.url == '/') { // check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write('<html><body><p>Welcome to my first web server</p></body></html>');
        res.end();
    }
    else if(req.url == "/name") { 
        res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>My name is Mbugua purity</p></body></html>');
        res.end();

    }
});


server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')

