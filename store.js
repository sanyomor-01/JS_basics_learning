const store = {
    book :{
        inventory : 217,
        cost : 5.25
    },
    pencils :{
        inventory :300,
        cost : 2.00
    },
    bags :{
        inventory :521,
        cost : 50.45
    }
}
const checkInventory = (order) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            const itemsArr = order.items;
            let  inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

            if (inStock){
                let total = 0;
                itemsArr.forEach(item => {total += item[1]*store[item[0]].cost
                    
                });
                console.log(`All of the items are in stock. The total cost of the order is ${total}.`)
                resolve([order, total]);
            }
            else{
                reject(`The order could not be completed because some items are sold out.`);
            }

        },generateRandomDelay());
    });
};
const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) =>{
        setTimeout( () =>{
            let hasEnoughMoney = order.giftcardBalance >=total;
            if(hasEnoughMoney){
                console.log(`Payment processed with giftcard. Generating shipping label.`);
                let trackingNum = generateTrackingNumber();
                resolve([order, trackingNum]);
            }else{
                reject(`Cannot process order: giftcard balance is insufficient.`)
            }
        }, generateRandomDelay());
    })
}


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};
