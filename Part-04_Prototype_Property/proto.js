// Prototype Property📌📌📌
console.log('This is sanjay paul for checking js')

// var emp ={
//     name: "Sanjay paul",
//     age: 45,
//     qualification: "Higher Secondery"
// }
// console.log(emp.Prototype);

function xyz(name, age, sub){
    this.name = name,
    this.age = age,
    this.subject = sub
}
xyz.prototype.getName = function(){
    return this.name;
};
xyz.prototype.getAge = function(){
    return this.age
}
xyz.prototype.getSubject = function(){
    return this.subject
}
xyz.prototype.grade = "A";

var emp1 =new xyz("Sanjay", 45, "Web Development");
var emp2 =new xyz("Raja", 12, "Java");
console.log(emp1);

// emp1
// console.log(emp1.getName());
// console.log(emp1.getAge());
// console.log(emp1.getSubject());

// emp1
// console.log(emp2.getName());
// console.log(emp2.getAge());
// console.log(emp2.getSubject());

// 38:00