// first understand Object
// let myCar  = new Object();
// {
//     myCar.name = "Bugati Chiron",
//     myCar.manufacturar = "Buggati MFR",
//     myCar.color ="white and red combination"
// }
// myCar.make = "2012";
// console.log(myCar);
// console.log(myCar.name);



// let discuss Map object


// step 1
// let myCarr = new Map();
// {
//     myCarr.set("name", "BMW"),
//     myCarr.set(2, "Audi"),
//     myCarr.set(3, "Mersidies")
// }
// console.log(myCarr.get("name"));
// console.log(myCarr.get(2));
// console.log(myCarr.get(3));
// console.log(myCarr.size);


// step 2
// let myCarr = new Map();
// var obj = {};
// function func (){

// }
// {
//     myCarr.set("Name of my car is:", "BMW"),
//     myCarr.set(obj, "Audi"),
//     myCarr.set(func, "Mersidies")
// }
// console.log(myCarr.get(obj));
// console.log(myCarr.get(func));

// step 3: passing arr in map
var myArr = [[1, "Honda"], [2, "Audi"], [3, "Bugati"]]
let myCarr = new Map(myArr);
// console.log(myCarr);
// console.log(myCarr.get(1));

// for (const [key123, value123] of myCarr) {
//     console.log(key123 +" "+ value123);
// }
for (const key of myCarr.keys()) {
    // console.log(key);
}
for (const value of myCarr.values()) {
    // console.log(value);
}

// step 4: cloning map
var yourCarr = new Map(myCarr);
console.log(yourCarr);
console.log(myCarr === yourCarr);