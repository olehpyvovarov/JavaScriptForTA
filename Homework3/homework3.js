// // task1     'get the product of an array's elements'

// let nums = [2, 3, 4, 5];
// let product = 1;
// for (let i = 0; i < nums.length; i++) {
//     product = product * nums[i];
// }
// console.log(product);


// // task2     'check the current number if it's even or odd'

// for (let i = 0; i < 16; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even\n`);
//     } else {
//         console.log(`${i} is odd\n`);
//     }
// }


// task3     'array is filled with a random Int numbers within 1-500 range'

// function randArray(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * 500));
//     }
//     return arr;
// }
// let k = randArray(5);
// console.log(k);


// // task4     'rase the number to the power of n . use Integers only'

// let num4 = Math.round(prompt("Please enter an number: "));
// let degree = Math.round(prompt("Please enter a degree: "));

// function raiseToDegree(num4, degree) {

//     let res = num4 ** degree
//     console.log(res);

// }
// raiseToDegree(num4, degree);

// task5  'a function that returns the min of an arbitary number of arguments'

// function findMin (... args) {
//     let min;
//     min = Math.min(...args);
//     return min;
// }
// let arr = [9, 5, -9, 6, -3, 8];
// let min1 = findMin(...arr);         // this is working but direct array insert - not working
// let min2 = findMin(45, 5, 7, 9, 10, 11, -6, 12, 12, -7, 13, 14);

// console.log(min1);
// console.log(min2);

// task6   'check if the elements in an array are unique (do not have duplicates)'  - not working

// function findUniques (args) {
//     let uniques = [];
//     for (let i = 0; i < args.length; i+=1) {
//         if (uniques.indexOf(args[i]) === -1) uniques.push(args[i]);   //if -1 then the array 'uniques' do not have that element form args
//     }
//      return args.length === uniques.length;
// }
// let arr6 = [1, 2, 3, 1, 4, 5];
// ///let arr61 = [1, 2, 3, 6, 4, 5];

// let arrayIsUnique = findUniques(arr6);
// console.log("The array is unique: " + arrayIsUnique);


// // task7  'return the 'x' last elelemnts of an array'

// function lastElement(array, x) {
//     let arr = [];
//         for (let j = array.length -1; j > array.length - x - 1; j--) {
//             arr.unshift(array[j]);
//         }
//     return arr;
// }

// let arr7 = [1, 2, 3, 4, 5, 6, 7];
// let lastElements = lastElement(arr7, 4);
// console.log(lastElements);


// task8 'turn the first letter of each word to Uppecase'

function deutschCase( string) {
    let newString = [string[0].toUpperCase()];
    let a = "";
    for (let i = 1; i < string.length; i+=1) {
        if (string[i] === " ") {
            a = string[i];
        } else if (string[i-1] === " "){
            a = string[i].toUpperCase();
        
        } else {
            a = string[i];
        }
        newString.push(a);
    }
    return newString.join("");
}
let line8 = "i love java script";
console.log(deutschCase(line8));