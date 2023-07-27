// i(incase sensitive modifier) = no case sensitive in regular expression
// g(globar modifier)= find all word from senteses


// exec
// const regExp = /Hello/;
// const regExp = /heLlO/i;
// var regExp = /Hello/g;
// var regExp = /hello/ig;


// var str1 = "Hello this is sanjay paul, Hello again.";
// var output = regExp.exec(str1);
// console.log(output);
//     output = regExp.exec(str1);
// console.log(output);

//test
// var regExp = /Hello/g;
// var regExp = /llo/g;

// var str1 = "Hello this is sanjay paul, Hello again.";
// var output2 = regExp.test(str1);
// console.log(output2);

//match()
// var regExp = /Hello/;
// var regExp = /Hello/g;
// var str1 = "Hello, this is Hello sanjay paul, Hello again.";
// var output = str1.match(regExp);
// console.log(output);

//replace()
var regExp = /Hello/ig;
var str1 = "Hello, this is HELlo sanjay paul, Hello again.";
var output = str1.replace(regExp, "Hi");
console.log(output);




// 2:36:51 simply code