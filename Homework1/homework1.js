// task2
// console.log("My last name is Pyvovarov");

// //task3
// var a = 1;
// var b = "Be";
// a = b;
// alert("var a is " + a);
// alert("var b is " + b);

// //task4
// const newObj = {
//     firstName: "John",
//     lastName: undefined,  
//     isStudent: true,
//     age: 35,
//     mark: null
// }
// console.log(newObj);

// //task5
// var isAdult = confirm("Are you  18 y.o. or older?");
// console.log("You are an adult: " + isAdult);

// //task6
// let firstName;
// let lastName;
// let studentGroup;
// let yearBirth;

// firstName = "Oleh";
// lastName = "Pyvovarov";
// studentGroup = "JS for TA";
// yearBirth = 1978;

// let isMarried = true;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof studentGroup);
// console.log(typeof yearBirth);
// console.log(typeof isMarried);

// console.log(yearBirth);
// console.log(isMarried);
// console.log(firstName);
// console.log(lastName);
// console.log(studentGroup);

// let c = null;
// let d;
// console.log(typeof c);
// console.log(typeof d);

// //task7
// let userName = prompt("Please enter your login name");
// let email = prompt("Please enter your email address");
// let password = prompt("Please enter your password");

// alert("\"Dear " + userName + ",\n your email is " + email + ", your password is " + password + "\"");

//task8
let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 31;

let answer = prompt("What number of seconds you want to see in? \nPlease enter: 'month', 'day' or 'hour'");

switch (answer) {
    case "month":
        alert(`There are ${secondsInMonth} seconds in a month.`);
        break;
    case "day":
        alert(`There are ${secondsInDay} seconds in a day.`);
        break;
    case "hour":
        alert(`There are ${secondsInHour} seconds in an hour.`);
        break;
    default:
        alert(`Sorry. Cannot recognise the period.`)
}