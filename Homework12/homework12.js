// task_1

const { rejects } = require("assert");
const { resolve } = require("path");

//const { resolve } = require("path");

// function getPromise(message, delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             resolve(message);
//         }, delay);
//     });
// }

// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);	
// });


// task_2

function calcArrProduct(args) {             
    let prod = 1;
    let isNumber;
    for (let i of args) {
        if (typeof i === 'number') {      
            prod *= i;                 
            isNumber = true;
    } else {
        isNumber = false;
        break;
    }
}
    return new Promise((resolve) => {
        isNumber ? resolve (prod): console.error("Error! Incorrect array!");
    });
}
calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"  ?? why is it finished first??


// task_3

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));   // not working delay
function showNumbers() {
	// your code with using delay(i, time)
    Promise.resolve(delay(10, 2000));
    
    for (let y = 0; y <= 10; y+=1) {
        console.log("task3: " + y);
    }
    
}
showNumbers();


// task_4           // working

// async function delay4(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
// }
// async function showNumbers4(count) {
//     for (let i = 0; i <= count; i+=1) {
//         await delay4(1000);
//         console.log("task4: " + i);
//     }
// }
// showNumbers4(12);