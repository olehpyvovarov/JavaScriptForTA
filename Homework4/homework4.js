// task1

// function calcRectangleArea (width, height) {
//         if (typeof width !== 'number' || typeof height !== 'number') {    // isNaN(height)
//         throw "Parameter is not a number";
//         }
//         return width * height;
// }
// try {
//     console.log(calcRectangleArea(3, "h"));
// } catch (e) {
//     console.log(e);
// }


// function calcRectangleArea (width, height) {
//     try {
//         if (typeof width === 'number' || typeof height === 'number') {    // isNaN(height)
//         return width * height;
//         }
//     } catch (e) {
//     console.log("Current");  
//     }
// }
// console.log(calcRectangleArea(3, "j"));


// task2

// function checkAge() {
//     isAllowed = false;

//     let age = Number(prompt("Please enter your age"));
//     if (age === 0) {
//         alert("The field is empty! Please enter your age.");
//         checkAge();

//     } else if (isNaN(age)) {  // not working
//         alert("You have entered not a number. Please enter a number.");
//         checkAge();
        
//     } else if (age < 14) {
//         alert("Unfortunately you are not eligible yet.");
//         throw new Error("error merrage: too young");

//     } else {
//         alert("Thank you!");
//         return    isAllowed = true;
//     }    
// }
// try {
//     checkAge();
// } catch (e) {
//     console.log(e.name);
//     console.log(e.message);
// }


// task3

// class MonthException extends Error {
//     name = "MonthException";
//     constructor(message) {
//         super(message);
//     }
// }
// function showMonthName(month) {
//     let monthsList = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return monthsList[month - 1];
//     throw new MonthException("Incorrect month number");
// }
// try {
//     console.log(showMonthName(3));
// } catch (err) {
//     console.log(err.name + ": " + err.message);
// }


// task4

function showUserId(id) {
 if (id < 0) {
    throw "ID number must not be negative " + id;
 } else {
    let user = {
        ID : id,
        //name : ""
    };
    return user;
 }
}
// try {
//     let a = showUserId(23);
//     console.log(a);
//     console.log(typeof a);
// } catch (err) {
//     console.log(err);
// }

// function showUsers(...ids) {
//     let arrIds = [];
//     for (let i = 0; i < ids.length; i+=1) {  // for (let i in ids) {  // i is a sequence number of an element
        
//         let u = showUserId(ids[i]);         // for (let el of ids) { let u = showUserId(el)}
//         console.log(u);
//     arrIds.push(u);
//         //console.log("neg");
//     }
//     return arrIds;
// }

// let u = {};
// console.log(typeof u);
// u = showUserId(-12);
// console.log(u);

function showUsers(arguments, showUserId) {
    let arrIds = [];
    let u = {};
    for (let element of arguments) {
        //console.log(element);
        u = showUserId(element);
        arrIds.push(u);
    }
    return arrIds;
}
let arr4 = [12, 15, -14, 19];
let b = showUsers([12, 15, -14, 19], showUserId);
console.log("b is " + b);