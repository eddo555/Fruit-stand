// const cherry = [];
// const peach = [];
const totalPricePerStore = [];

// First assumption: There are 10 fruit stands between Göteborg and Helsingborg

// Second assumption, prices for fruit:
//                      Ica                  Willys
// prices for cherry 91.80 kr/kg          66.22.90 kr/kg
// prices for peach 39.90 kr/kg           36.90 kr/kg

for (i = 0; i < 10; i++) {
  priceCherry = Math.random() * (91.8 - 66.22 + 1) + 66.22;
    // priceCherryDecimal = priceCherry.toFixed(2);

  pricePeach = Math.random() * (39.9 - 36.9 + 1) + 36.9;
    // pricePeachDecimal = pricePeach.toFixed(2);

  totalPrice = pricePeach + priceCherry;

  totalPricePerStore.push(totalPrice.toFixed(2));
    // cherry.push(priceCherryDecimal);
    // peach.push(pricePeachDecimal);
}

var cheapestStore = 0;

for (i = 0; i < totalPricePerStore.length; i++) {
  if (totalPricePerStore[i] < totalPricePerStore[cheapestStore])
    cheapestStore = i;
}

console.log(`Store nr ${cheapestStore + 1} has the cheapest total price for cherries and peaches`);


// this log is for getting price per fruit in each store and the total of each location
// console.log(
//   `\nPrice for cherry per store: ${cherry} kr/kg \n\nPrice for peach per store: ${peach} kr/kg \n\nTotal price per store: ${totalPricePerStore} kr\n\n`
// );
