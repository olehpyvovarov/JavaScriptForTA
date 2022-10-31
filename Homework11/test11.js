const os = require('node:os');
//const path = require('path');

// const sysUser = os.hostname();
// function greet (sysUser) {

// }

//response.write(`System Information \n`);
//     response.write('Current usernamename: ' + os.hostname()+'\n');
//     response.write(`OS Type: ${os.type()} \n`);
//     //response.write(os.GetVersionExW());
//     response.write(`System work time: ${os.uptime()} \n`);
//     response.write(`Current working directory: ${path.dirname('C:\\users\\JsForTA\\Homework11\\')} \n`); 
//     response.write(`Server file name: ${path.basename('C:\\users\\JsForTA\\Homework11\\server.js')} \n`);
//     response.end('Testing NodeJS server\n');

let newHeader = document.createElement('h1');
newHeader.id = '1';
newHeader.innerHTML = `System Information \n`;
let newP1 = document.createElement('p');
newP1.id = '2';
newP1.innerHTML = `Current usernamename: ' + ${os.hostname()} +'\n`
document.append(newHeader);
document.append(newP1);