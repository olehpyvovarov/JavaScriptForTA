// task1

// function propCount (currentObject) {
//     return Object.keys(currentObject).length;   // "values" or "entries"
// }
// let menthor = {
//     name : "John",
//     ID : 1,
//     direction : "JS",
//     duration: 3
// }
// console.log("count of props1 " + propCount(menthor));


// task2

// let menthor2 = {
//     name : "John2",
//     ID : 1,
//     direction : "JS2",
//     duration: 3,
//     isStudent: false
// }

// function showProps(obj) {
//     return Object.keys(obj);
//     //let arrKeys = Object.getOwnPropertyNames(obj);           // any of these
//     // return arrKeys;
//     //return Object.getOwnPropertyNames(obj);
// }
// // function showValues(obj) {                               // another option
// //     return Object.values(obj);
// // }
// //console.log("task2 values: " + showValues(menthor2));
// console.log(showProps(menthor2));

// let arrValues = showProps(menthor2).map(a => menthor2[a]);
// console.log(arrValues);

// // let arrValues = arrKeys.map(key => {             //another option
// //     return obj[key];   //obk = arrKeys
// // });


// task3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName (name, surname) {
//         return this.name + this.surname;
//     }
// }
// class Student extends Person {
//     constructor (name, surname, yearEntry) {
//         super (name, surname);
//         this.yearEntry = yearEntry;
//     }
//     showFullName (middleName) {
//         return this.name + " " + middleName + " " + this.surname;
//     }
//     showCourse() {
//         return new Date().getFullYear() - this.yearEntry;
//     }
// }
// const stud1 = new Student ("John", "Johnson", 2019);
// console.log(stud1.showFullName("MP"));
// console.log("Current course: " + stud1.showCourse());


//task4

class Worker {
    _experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.salary = this. dayRate * this.workingDays;
        if (this.constructor.all === undefined) {
            this.constructor.all = [this];
          } else {
            this.constructor.all.push(this);
          }
          this.logParam = function() { console.log(all); };
    }
    showSalary() {
        console.log(this. dayRate * this.workingDays);
    }
    showSalaryWithExperience() {
       console.log(this._experience * this.dayRate * this.workingDays);
    }
    get experience() {
        return this._experience;
    }
    set experience(value) {
        this._experience = value;
    }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: ");
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

// show workers

for (var i = 0; i < Worker.all.length; i++) {
    console.log(Worker.all[i].fullName + " " + Worker.all[i].salary);
  }
console.log(worker1.salary);

//sorted salary                 

for (var i = 0; i < Worker.all.length; i++) {                   //not working
    if (Worker.all[i].salary > Worker.all[i].salary) {
    console.log(Worker.all[i].fullName + " " + Worker.all[i].salary);
    }
  }


  // task5

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
    return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getArea () {
        let halfPerimeter = (this.side1 + this.side2 + this.side3) / 2;
        return "area " + Math.round(Math.sqrt((halfPerimeter * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3))));
    }
}
class Square extends GeometricFigure {
    constructor(side) {
        super(side);
        this.side = side;
    }
    getArea () {
        return "area " + this.side ** 2;
    }
    
}
class   Circle extends GeometricFigure {
    constructor(radius) {
        super(radius);
        this.radius = radius;
    }
    getArea () {
        return "area " + Math.round(Math.PI * (this.radius ** 2));
    }
}
function handleFigures (arr) {
    let totalArea = 0;
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        
        
            a = arr[i].getArea();           
        
        return "Geometric figure: " + arr[i].toString() + " : " + a;
        totalArea = totalArea + a;
    }
    console.log(totalArea + " //total area");
}
const figures = [new Circle(6), new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log(handleFigures(figures));