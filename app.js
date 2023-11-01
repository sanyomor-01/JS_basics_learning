/*
// Write your code below:
const myExecutor = (resolve, rejected) =>{
  if (inventory.sunglasses > 0){
    resolve('Sunglasses order processed.')
  }else{
    rejected('That item is sold out.')
  }
}
const orderSunglasses = () => {
  return new Promise(myExecutor)
}
const orderPromise = orderSunglasses()
console.log(orderPromise)


console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO =  () =>{
  console.log('I shout out Your Praize')
}
setTimeout(usingSTO, 300)

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
*/
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) =>{
    console.log(resolvedValue)
}
const handleFailure = (rejectedValue) => {
  console.log(rejectedValue)
}
checkInventory(order)
.then(handleSuccess)
.catch(handleFailure)




