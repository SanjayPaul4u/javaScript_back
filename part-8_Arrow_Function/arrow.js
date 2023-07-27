console.log("Arrow Function in js");

// SimpleFunction();
function SimpleFunction (){
    console.log("This is simple Function");
}

// 📍📍
// Arrow Function
// const ArrowFunction = (a, b) =>{
//     console.log("This is Arrow function");
//     return a+b;
// }
// 📍📍
const ArrowFunction = (a, b) => a+b; console.log("This is Arrowfunction"); 
console.log(ArrowFunction(50, 49));

// Without Parenthesis📍📍
const ArrowFunction2 = name =>0; console.log(`Good Morning,
Mr. ${name}`);
console.log(ArrowFunction2("Sanjay Paul"));