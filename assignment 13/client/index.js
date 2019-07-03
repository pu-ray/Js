
// index.js

// let promise = fetch(url,document)
// let url = document.getElementById('products'); 
// let ul = "http://localhost:5000/products";

// fetch(url)

//  .then(function(req, res) {
//     if (req.url == '/') { // check the URL of the current request
//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         // set response content
//         res.write('<html><body><p>Greens Kiosk API.</p></body></html>');
//         res.end();
//     }
//     else if (req.url == "/products") { // check the URL of the current request
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(GreensKiosk.getItems()));
//         res.end();
//     }
//     else if (req.url == "/products/fruits") {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(GreensKiosk.getItems('fruits')));
//         res.end();
//     }
//     else if (req.url == '/products/vegetables') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(GreensKiosk.getItems('vegetables')));
//         res.end();
//     }
//     else
//         res.end('Invalid Request!');
 
//  });
 
//  server.listen(5000); // listen for any incoming requests
 
//  console.log('Node.js web server at port 5000 is running..')
 
//  .catch(function (error) {
//     console.log('error', error);
// });
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM(html).window.document;
let products = document.getElementById('products'); 
let ul = "http://localhost:5000/products";

var fruit = document.createElement("li");
 fruit.innerHTML = "kiwi"
 fruList.appendChild(fruit)

