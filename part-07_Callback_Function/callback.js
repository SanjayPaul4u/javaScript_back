// console.log("check");
// function one(){
//     setTimeout(() => {
//         console.log("This is function one");
//         two();
//     }, 3000);
// }
// function two(){
//     console.log("This is function two");
// }
// function three(){
//     console.log("this is function three");

// }
// settimeout call bakc function

// setTimeout(one, 2000);
// setTimeout(() => {
//     one();
// }, 1000);

// setinterval call back function
// setInterval(() => {
//     one();
// }, 1000);
// one();

function person(friend, callFunc){
    // here we had the main call back function📍
    setTimeout(() => {
        console.log(`My friends name is ${friend}`);
        callFunc();//📍
    }, 3000);
}
function person2(){
    console.log(`Second person is me and my name is Sanjay Pual`);
}
// setTimeout(() => {
//     person("chandan", person2);
// }, 5000);
person("chandan", person2);




// 1:28 simplycode


