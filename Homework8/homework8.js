// // task1

// function regExp (str) {
//     if (str.match(/^[A-Z]/)) {                              // better use test() method
//         console.log("String starts with uppercase");
//     } else {
//         console.log("String NOT starts with uppercase");
    
//     }
// }
// let str = "a good day it is!";
// regExp(str);


// task_1v2   ++

// function regExp (str12) {
//     if (/^[A-Z]/.test(str12)) {                              // better use test() method
//         console.log("String starts with uppercase");
//     } else {
//         console.log("String NOT starts with uppercase");
    
//     }
// }
// let str12 = "1A good day it is!";
// regExp(str12);



// task_2

function checkEmail (str2) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(str2);         // needs $ to set up the range of the ending {2,3}
}
console.log(checkEmail("op.op@ano12ther.coa"));


// task_3    regex for finding 'd' then 1 or more 'b' then one 'd'

let str3 = "cdbBdbsbz";
let re3 = /d[bB]+d/g;
console.log(str3.match(re3));
let match3 = str3.match(re3);
console.log(match3);


// task_4   regex to swap words in a string

let str4 = "Java Script";
let re4 = /(\b\w+\b)\s(\b\w+\b)/;
let res4 = re4.exec(str4);
//let res4 = str4.match(re4);
let newStr4 = res4[2] + res4[1];
console.log(newStr4);


// task_5   bank card validation function  

function cardValid (str5) {
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(str5);            
}
console.log("Card is valid: " + cardValid("4242-4444-4444-4545"));


// task_6

function checkEmail6 (str6) {
    if ( /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(str6) ) {                  // /^[_-]\w+@\w+\.\D{2,4}$/
        console.log("You e-mail address is correct");
    } else{ 
        console.log("You e-mail address is NOT correct");
    }
}
let mail1 = "my_mail@gmail.com";
let mail2 = "#my_mail@gmail.com";
let mail3 = "my_ma--il@gmail.com";
checkEmail6("1: " + mail1);
checkEmail6("2: " + mail2);
checkEmail6("3: " + mail3);


// task_7

function checkLogin (str7) {
    let re7 = /^([a-z0-9]|[-._](?![-._])){2,10}$/g;  
    //console.log(str7.match(re7));
    console.log(re7.test(str7));
    
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
checkLogin("1ee1.1ret3");