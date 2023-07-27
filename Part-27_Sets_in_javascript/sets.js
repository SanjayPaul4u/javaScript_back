console.log("Sets in JavaScript");

// STEP 1
// let mySet = new Set();
// mySet.add(5);
// mySet.add("sanjay");
// mySet.add(6);
// mySet.add(7);
// // This will be not add again in the Set(This is Advantage)
// mySet.add("sanjay");
// mySet.add(6);
// console.log(mySet);


//STEP 2
// let arr  = ["Bikrant", "Anil", 1, 2 ,3, "Bikrant", 1, 2, 3];
// let mySet2 = new Set();
// let i = 0;
// while (i<arr.length) {
//     mySet2.add(arr[i]);
//     i++;
// }
// console.log(mySet2);

// STEP 3
let arr  = ["Bikrant", "Anil", 1, 2 ,3, "Bikrant", 1, 2, 3];
let mySet3 = new Set(arr);
console.log(mySet3);
let mynewArr = Array.from(mySet3);
console.log(mynewArr);

// deleting from set function
mySet3.delete("Anil");
console.log(mySet3);

// clear method in set
mySet3.clear();
console.log(mySet3);



// 5:24 - simplycode