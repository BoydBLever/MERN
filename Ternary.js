let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? `Cannot afford! You are $${itemPrice - accountBalance} short.` : "Can Afford";
}

console.log(canAfford(1002, 1000)); // logs Cannot afford! You are $2 short.

//Special note: take care when nesting ternary statements, as they are unwieldy and unreadable
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false

    console.log(myVar); //logs true