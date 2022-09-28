// //task1

// let x = 1;
// let y = 2;

// let res1 = String(x) + y;  // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);     // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x) || Boolean(y);    // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = parseInt(Boolean(x) + String(y));     // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"


// //task2

// var answer = prompt("Please enter a number");
// if (answer % 2 === 0 && answer > 0) {
//     if (answer % 7 === 0) {
//         console.log(`Number ${answer} is even positive and multiply by 7`);
//     } else {
//         console.log(`Number ${answer} is even positive`);
//     }
// } else if (answer % 7 === 0 && answer !== null) {
//     console.log(`Number ${answer} is multiply by 7`);
// } else if (answer == null) {
//     console.log(`Number has not been entered`);
// } else {
//     console.log(`Number ${answer} is neither even positive nor multiply by 7`);
// }


// //task3

// let arr = [];
// arr [0] = 56;
// arr [1] = "Twenty";
// arr [2] = false;
// arr [3] = null;
// alert("Number of elements in the initial array: " + arr.length);

// let newElement = prompt("Please enter anything");
// arr.push(newElement);
// alert("The fifth element is: " + arr[4]);

// arr.shift();
// alert("The final array is: " + arr);


// //task4

// let cities = ["Rome", "Lviv", "Warsaw", 32, 34, "Oslo"];
// let oneLine = cities[0];
// for (let i = 1; i < cities.length; i++) {
//     oneLine = oneLine + "*" + cities[i];
// }
// console.log(oneLine);


// //task5

// let isAdult = prompt("Are you 18 years old or older?");
// let answer5 = (isAdult >=18) ? "You are of legal age" : "You are still too young";
// console.log(answer5);


// // task6

// let sidesTriangle = [];
// for (let i = 0; i < 3; i++) {
//     sidesTriangle[i] = prompt(`Please enter ${i+1} side of the triangle`);
//     sidesTriangle[i] = Number(sidesTriangle[i]);
//     if (isNaN(sidesTriangle[i])) alert("Incorrect data!");
// }
// console.log(sidesTriangle);

// //calculating the area
// let halfPerimeter = (sidesTriangle[0] + sidesTriangle[1] + sidesTriangle[2]) / 2;
// let areaTriangle = Math.sqrt((halfPerimeter * (halfPerimeter - sidesTriangle[0]) * (halfPerimeter - sidesTriangle[1]) * (halfPerimeter - sidesTriangle[2])));
// console.log("The triangle's area is: " + areaTriangle.toFixed(3));

// switch (sidesTriangle.length) {
//     case 3:
//         console.log("This is a triangle");
//         break;
//     case 4:
//         console.log("This is not a triangle. This is a square.");
// }


// // task7  version1 - not working
// let currentHour = new Date().getHours();
// console.log("Current time: " + currentHour);

// switch (currentHour) {
//     case currentHour >= 23 && currentHour < 5:
//         alert("Good night!");
//         break;
//     case currentHour >= 5 && currentHour < 11:
//         alert("Good morning!");
//         break;
//     case currentHour >= 11 && currentHour < 17:
//         alert("Good afternoon!");
//         break;
//     case currentHour >= 17 && currentHour < 23:
//         alert("Good evening!");
//         break;
// }

// // task7  version1
// let currentHour2 = new Date().getHours();
// console.log("Current time: " + currentHour2);

// if (currentHour2 >= 23 && currentHour2 < 5) {
//     alert("Good night!");
//     console.log("Good night!");
// } else if (currentHour2 >= 5 && currentHour2 < 11) {
//     alert("Good morning!");
// } else if (currentHour2 >=11 && currentHour2 < 17) {
//     alert("Good afternoon!");
// } else if (currentHour2 >=17 && currentHour2 < 23) {
//     alert("Good evening!");
// }

// task7  version2
let currentHour = new Date().getHours();
console.log("Current time: " + currentHour);

switch (true) {
    case currentHour >= 23 && currentHour < 5:
        alert("Good night!");
        break;
    case currentHour >= 5 && currentHour < 11:
        alert("Good morning!");
        break;
    case currentHour >= 11 && currentHour < 17:
        alert("Good afternoon!");
        break;
    case currentHour >= 17 && currentHour < 23:
        alert("Good evening!");
        break;
}