// Prototype Inheritence 📌📌📌

// const employee = {
//     changePost : function(post){
//         return "A web developer";
//     },
//     changeName : function(name){
//         this.name = name;
//     }
// }

// const e1 = Object.create(employee);
// e1.name = "sanjay";
// e1.age = 45;
// e1.changeName("Ram");
// console.log(e1);

// same work as a above
// const e1 = Object.create(employee, {
//     name: {value: "Sanjay", writable: true},
//     age : {value : 45}
// })
// e1.changeName("ram");
// console.log(e1);

// 📍 Same Example in Function Constructor Method
const employee = function(name, id, salary){
    this.name = name,
    this.id = id,
    this.salary= salary
}
employee.prototype.changeName = function (name){
    this.name = name
}
employee.prototype.getPost = function (){
    return this.name+' is the Website Developer.';
}

// const e1 =new employee ("Raja", 123152, 10000);
// e1.changeName("Rahul");
// console.log(e1);

function programmer (name, id, salary, language){//here we are seeing INHERITENCE📌
    employee.call(this, name, id, salary);
    this.language = language;
}
programmer.prototype = Object.create(employee.prototype);
programmer.prototype.constructor = programmer;

const p1 = new programmer("Ranjeet", 111111, 35, "JavaScript");
p1.changeName("abcd");
console.log(p1);