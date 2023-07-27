// Classes and Class Inheritence in JavaScript📍
class student{
    constructor(name, age, roll){
        this.name = name,
        this.age = age,
        this.roll = roll
    }
    org(){
        return "i am "+this.name+" from simply code"
    }
    DOB(){
        const date = new Date();
        const year= date.getFullYear();
        return `The date of birth of ${this.name} is: "${year - this.age}"`
    }
    static add(a, b){// static method📍
        return `The value of ${a} + ${b} is: ${a+b}`
    }
}
const s1 = new student("Ajay", 15, 2);
const s2 = new student("Bishal", 23, 105);
// console.log(s1);
// console.log(s1.DOB());
// console.log(s2);
// console.log(s2.DOB());
// console.log(s2.org());
// console.log(student.add(5, 5));

// Inheritence with help of classes📍

class programmer extends student{
    constructor(name, age, roll, section, language){
        super(name, age, roll);
        this.section = section,
        this.language = language
    }
    
}

const raju = new programmer("Raju", 32, 21, "c", "java")
console.log(raju);
console.log(raju.DOB());
console.log(raju.org());
console.log(programmer.add(55,10));

//01:13 - simplycode