const http = require("http");
const fs = require('fs');
const os = require('node:os');
const path = require('path');
//const date = require('../Homework11/personalmodule');
const greeting= require('./personalmodule');

// import { createServer } from "http";     //alternative

// task_1 ------

// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//      response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write(`System Information \n`);         // response.write("<h2>System information</h2>");
//     let host = os.hostname();
//     response.write(`Current usernamename: ${host} \n`);      //os.userInfo().username
//      response.write("<br>");
//     response.write(`OS Type: ${os.type()} \n`);
//      response.write("<br>");
//     response.write(`System work time: ${os.uptime()} \n`);
//      response.write("<br>");
//     response.write(`Current working directory: ${path.dirname('C:\\users\\JsForTA\\Homework11\\')} \n`); 
//      response.write("<br>");
//     response.write(`Server file name: ${path.basename('C:\\users\\JsForTA\\Homework11\\server.js')} \n`);
//     response.end('Testing NodeJS server\n');
// }).listen(5000);
// console.log('Server running at http://127.0.0.1:5000/');

// task_2  -------

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    
        //let host = os.hostname();
        let host = os.userInfo().username;
     
        res.write(`Date of request: ${greeting.date}<br>`);
        res.write(greeting.showGreet(host));
        
        res.end();
    
}).listen(5001);
console.log('Server running at http://127.0.0.1:5001/');