// . = Dot is for simgle character
// * = Star is for lots of character
// ^ = This 'caret' character said that start any word first
// $ = Doller character check any word end in last or not
// ? = Optional character check no worry about the character
console.log("META-CHARACTER");
// const regEx = /W.lcome/g;
// const str1 = "Walcome at my home, Welcome Again";
// const regEx = /We*/g;
// const str1 = "Wesclcome at my home, Weaaalcome Again";
// const regEx = /We*/g;
// const str1 = "Wesclcome at my home, Weaaalcome Again";
// const regEx = /^Welcome/;
// const str1 = "Welcome at my home, Wealcome Again";
// const regEx = /Again$/;
// const str1 = "Welcome at my home, Wealcome Again";
const regEx = /Ag?ain?/;
const str1 = "Welcome at my home, Wealcome Aain";

var Test  = regEx.test(str1);
console.log(`The boolean value is: "${Test}"`);
var output = regEx.exec(str1);
console.log(output);
output = regEx.exec(str1);
console.log(output);

// 2:48:02 simply code