console.log("check");

// const prom = new Promise(function(resolve, reject){
//     const drive  = false;
//     if(drive){
//         resolve("yes");
//     }else{
//         reject("No");
//     }
// });

// prom.then((resolve)=>{
//     console.log(`${resolve}, user can drive the car.`);
// }).catch((reject)=>{
//     console.log(`${reject}, user can't drive the car`);
// })

// 1:38 simply code

// Another example of promises.
const functions = function(){
    return new Promise(function(resolve, reject){
        resolve("Learn Functions");
    })
}

const callback = function(massage){
    return new Promise(function(resolve, reject){
        resolve(`${massage} - Learn call back function`)
    })
}

const promises = function(massage){
    return new Promise(function(resolve, reject){
        resolve(`${massage} - good to go for promise in javaScript`);
    })
}
functions().then(function(result){
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log(`'$The Result is:--- ::::${result}'`);
})
