const http = require("http");
const fs = require('fs');
const os = require('node:os');
const path = require('path');
const greet = require('../Homework11/personalmodule');

// import { createServer } from "http";     //alternative



// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write(`System Information \n`);
//     let host = os.hostname();
//     response.write(`Current usernamename: ${host} \n`);
//     response.write(`OS Type: ${os.type()} \n`);
//     response.write(`System work time: ${os.uptime()} \n`);
//     response.write(`Current working directory: ${path.dirname('C:\\users\\JsForTA\\Homework11\\')} \n`); 
//     response.write(`Server file name: ${path.basename('C:\\users\\JsForTA\\Homework11\\server.js')} \n`);
//     response.end('Testing NodeJS server\n');
// }).listen(5000);
// console.log('Server running at http://127.0.0.1:5000/');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('personalmodule.js', function(error, data){
        let host = os.hostname();
        if (error) {
            res.writeHead(404);
            res.write('Error: File not found');
        } else {
            res.write(data, greet(host));
        }
        res.end();
    })
}).listen(5001);
console.log('Server running at http://127.0.0.1:5001/');