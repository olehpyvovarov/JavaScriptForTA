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
    // add to all

  // set param
  //this.logParam = function() { console.log(param); };

    // static showWorkers() {
    //         return Object.fullName; // + Object.showSalaryWithExperience;
        
    // }
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

// sorting workers
//console.log(Worker.showWorkers());
let arr = [worker1, worker2, worker3];
console.log(arr);

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
        console.log(property.substr(1));
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
arr.sort(dynamicSort("salary"));
console.log(arr);

for (var i = 0; i < Worker.all.length; i++) {
    console.log(Worker.all[i].fullName + " " + Worker.all[i].salary);
  }
console.log(worker1.salary);
//sorted salary

for (var i = 0; i < Worker.all.length; i++) {
    
    console.log(Worker.all[i].fullName + " " + Worker.all[i].salary);
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
    
    getArea (radius) {
        const PI = Math.PI();
        return "area " + PI * (radius ** 2);
    }
}
function handleFigures (arr) {
    let totalArea = 0;
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] instanceof GeometricFigure) {
            a = arr[i].getArea();           
        }
        return "Geometric figure: " + arr[i].toString() + " : " + a;
        totalArea = totalArea + a;
    }
    console.log(totalArea + " //total area");
}
const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log(handleFigures(figures));