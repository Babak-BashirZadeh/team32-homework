boughtCandyPrices = [];
candyPrices = [
    {candyType: "Sweet", pricePerGram: 0.5},
    {candyType: "Chocolate", pricePerGram: 0.7},
    {candyType: "Toffee", pricePerGram: 1.1},
    {candyType: "Chewing-gum", pricePerGram: 0.03}
]
function addCandy(candyType, weight) {
let found = false;
    for (let i = 0; i < candyPrices.length; i++){
        if (candyType === candyPrices[i].candyType){
            let candySum = Math.round(weight * candyPrices[i].pricePerGram);
            boughtCandyPrices.push(candySum);
            found = true
        }
    }
    if (!found) {
        console.log("Please choose an existing candy type")
        }
    return boughtCandyPrices;
}
function totalprice() {
    let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++){
        totalPrice += boughtCandyPrices[i];
    }
    return totalPrice;
}
console.log(addCandy("Chocolate", 10));
console.log(addCandy("Toffee", 20));
console.log(addCandy("Sweet", 30));
console.log(addCandy("Chewing-gum", 40));
console.log(addCandy("ABC", 10));
console.log(boughtCandyPrices);
console.log(totalprice());

const amountToSpend = Math.random() * 100;
let moneySpent = 0;
function canBuyMoreCandy() {
   let i = 0;
    while (i < boughtCandyPrices.length) {

         moneySpent += boughtCandyPrices[i];
        i++;
    }
    return moneySpent < amountToSpend;
}
console.log(amountToSpend);
if (canBuyMoreCandy()){
    console.log(`You can buy more, so please do!`);
} else {

    console.log("Enough candy for you!");
}
