var arr = ["BMW", "Mercedes", "Tata", "Bugati", "Audi", "Honda"];
// console.log(arr);
// console.log(arr.length);

// // for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// for of loop
// for (const iterator of arr) {
//     console.log(iterator);
// }

// Main iterator
var student = ["Rahul", "Bikrant", "Sanjay", "Tonu"];

function std(students){
    var index = 0;
    return{
        next:function(){
            if(index<students.length){
                return{
                    value: students[index++],
                    done: false
                }
            }else{
                return{
                    done: true
                }
            }
        }
    }
}

const newStd = std(student);
console.log(newStd.next());
console.log(newStd.next());
console.log(newStd.next());
console.log(newStd.next());
console.log(newStd.next());
console.log(newStd.next());


// make name cheking project(do increase and decrease)

// 4:51:00 -simply code
