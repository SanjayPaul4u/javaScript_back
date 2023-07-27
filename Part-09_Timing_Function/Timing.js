// 1. setTimeout
// 2. clearTimeout
// 3. setInterval


// console.log("Timing Function");
//🟠
// setTimeout
// const Start = () =>{
//     setTimeout(function(){// this is function is anonimous function
//         alert("Welcome Back");
//     },2000)
// }

//🟠
// clearTimeOut
// const  message = () => alert("Now you will be hack");
// var id  = 0;
// const Start = () => {
//     id = setTimeout(message, 2000);
//     console.log(id);
// }
// const Stop = () => {
//     clearTimeout(id);
//     console.log("Alert have Stoped by this ID: "+id);
// }

//🟠
// setInterval
const  message = () => alert("Now you will be hack");
var id  = 0;
const Start = () => {
    id = setInterval(message, 3000);
    console.log(id);
}
const Stop = () => {
    clearTimeout(id);
    console.log("Alert have Stoped by this ID: "+id);
}