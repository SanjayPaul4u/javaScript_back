// not easy task by promise

const makeOrder = (coffe) => {
  return new Promise(function (resolve, reject) {
    console.log(`Making request for ${coffe}`);
    if (coffe == "blackcoffe") {
      resolve("Here is your coffe, have a nice day.");
    } else {
      reject("Sorry! We serve Black Coffe only.");
    }
  });
};

const processOrder = (order) => {
  return new Promise(function (resolve, reject) {
    console.log("Your Order is Processing");
    resolve("Extra information" + order);
  });
};
// makeOrder("blackcoffe").then((coffe) => {
//     console.log("Your order has been received");
//     return processOrder(coffe);
// }).then((order) => {
//     console.log(order)
// }).catch((err)=>{
//     console.log(err);
// })

async function func1() {
  try {
    const order = await makeOrder("blackcoffe");
    console.log("Your order has been received");
    const prossesOrder = await processOrder(order);
    console.log(prossesOrder);
  } catch (error) {
    console.log(error);
  }
}
func1();
//02:10.50s - simply code
