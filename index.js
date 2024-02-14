const hotdogprice = 4.65;
const friesprice = 3.75;
const drinksprice = 1.89;


function showMoney(fpNum) {
    let roundedNum = Math.round(fpNum * 100) / 100;
    let result = roundedNum.toString();
    let splitString = result.split('.');

    if (result.indexOf('.') == -1) {
        result += '.00';
    } else if (splitString[1].length == 1) {
        result += '0';
    }

    return result;

}



function getorder() {
    // getting the order from user
    let numDogs = parseInt(prompt("How many hot dogs do you want to order?"));
    let numFries = parseInt(prompt("How many fries do you want to order?"));
    let numSoda = parseInt(prompt("How many drinks do you want to order?"));


    // using user input to calculate
    let subtotal = (numDogs * hotdogprice) + (numFries * friesprice) + (numSoda * drinksprice);
    let discount = 0;

    let beforeSubtotal = showMoney(subtotal);
    if (subtotal >= 25) {
        discount = subtotal * 0.1;
        subtotal -= discount;
    }
    let tax = subtotal * 0.0625;
    
    
    // getting all of the prices in correct format
    let finalTotal = subtotal + tax;
    let hotDogCost = showMoney(numDogs * hotdogprice);
    let friesCost = showMoney(numFries * friesprice);
    let drinksCost = showMoney(numSoda * drinksprice);
    discount = showMoney(discount);
    subtotal = showMoney(subtotal);
    tax = showMoney(tax);
    finalTotal = showMoney(finalTotal);

    document.getElementById('showOrder').innerHTML = 
        `<p> You got ${numDogs} Hotdogs which costs $${hotDogCost}</p>

        <p> You got ${numFries} Fries which costs $${friesCost}</p>

        <p> You got ${numSoda} Drinks which costs $${drinksCost}</p>

        <p> Subtotal before discount: $${beforeSubtotal} </p>

        <p> Discout (if applicable): $${discount} </p>

        <p> Subtotal after discount: $${subtotal} </p>

        <p> Tax: $${tax} </p>

        <p> Final amount: $${finalTotal} </p>
        
        `;
        
    document.getElementById('showOrder').style.display = 'block';
}