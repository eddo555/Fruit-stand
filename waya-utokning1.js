// First assumption: There are 10 fruit stands between Göteborg and Helsingborg

// Second assumption, prices for fruit:
//                      Ica                  Willys
// prices for cherry 91.80 kr/kg           66.22.90 kr/kg
// prices for peach 39.90 kr/kg            36.90 kr/kg
// prices for pear 15 kr/kg                18.90 kr/kg

const fruitMix = [];
randomFruitGenerator = Math.floor(Math.random() * (1 - 0 + 1) + 0); //decides if the basket will contain cherries or peaches

for (i = 0; i < 10; i++) {
  priceCherry = Math.random() * (91.8 - 66.22 + 1) + 66.22;
  pricePeach = Math.random() * (39.9 - 36.9 + 1) + 36.9;
  pricePear = Math.random() * (18.9 - 15 + 1) + 15;

  if (randomFruitGenerator === 0) {
    sum = priceCherry + pricePear;
    fruitMix.push(sum.toFixed(2));
  } else {
    sum = pricePeach + pricePear;
    fruitMix.push(sum.toFixed(2));
  }
}

var cheapestStorePrice = Math.min.apply(Math, fruitMix);
var cheapestStoreindexOf = fruitMix.indexOf(cheapestStorePrice.toString());

// console.log(fruitMix)
// console.log(Math.min.apply(Math, fruitMix))

console.log(`Store nr ${cheapestStoreindexOf + 1} has the cheapest total price for one basket of ${randomFruitGenerator === 0 ? "cherries" : "peaches"} and pears with a price of ${cheapestStorePrice}`);
