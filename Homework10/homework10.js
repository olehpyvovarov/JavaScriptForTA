// task_1   destructure an object 

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob] ??


// task_2   destructure an object

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names:[name1, name2, name3, name4], ages:[age1, age2, age3, age4]} = data;
//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
//  console.log(age4); // 26


 // task_3  function mul() accepts any number of parameters and returns a product of parameters of type 'Number'

//  function mul(...args) {
//     let prod = 1;
//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === 'number') {
//             prod = prod * args[i];
//     }
//     return prod;
//  }
//  console.log(mul(1, "str", 2, 3, true)); // 6
//  console.log(mul(null, "str", false, true)); // 0


 // task_4      re-write with arrow func  omitting bind()

 //----------OLD---------
//  let server = {
//   data: 0,
//   convertToString: function (callback) {
//      callback((function () {
//         return this.data + "";
//      }).bind(this));
//   }
// };
// let client = {
//   server: server,
//   result: "",
//   calc: function (data) {
//      this.server.data = data;
//      this.server.convertToString(this.notification());
//   },
//   notification: function () {
//      return (function (callback) {
//         this.result = callback();
//      }).bind(this);
//   }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

//----------NEW----------
 let server = {
    data: 0,
    convertToString: function (callback) {
       callback(( ()=> {
          return this.data + "";
       }));
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return ( (callback)=> {
          this.result = callback();
       });
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"


 // task_5  

 function mapBuilder(keys, values) {
   const newMap = new Map();
   for (let i = 1; i <= keys.length; i+=1) {
      newMap.set(keys[i], values[i])
   }
   return newMap;
 }
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"