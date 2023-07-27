console.log("Destructuring in JavaScript");

// METHOD 1:
//[name1, name2, ...name3] =["Sanjay", "Sekhar", "Suman", "Babita", "Sabita"];
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name3[1]);


// METHOD 2:
// const colors = ["Red", "Blue", "White", "Black", "Yellow"];
// const [Bugati, Honda, BMW, ...Audi] = colors;
// console.log(Bugati);
// console.log(Honda);
// console.log(BMW);
// console.log(Audi);

// METHOD 3:
// a =10 and b = 20;
// let a = 10;
// let b = 20;
// [a, b] = [b,a]
// console.log("The value of a is: "+a);
// console.log("The value of b is: "+b);


// METHOD 4: OBJECT DESTRUCTURING
const car  = {
    Name: "Honda",
    colour: "Red",
    model: 2023,
    wheels: function(){
        console.log("All wheels are right");
    }
}
const {Name, colour, model, wheels} = car;
console.log(Name);
console.log(colour);
console.log(model);

wheels();