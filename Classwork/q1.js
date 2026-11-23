let amount = 100;
let finalprice = 0;

if (amount >= 100) {
    finalprice = amount - (amount * 0.2);
}
else if (amount > 50 && amount <=99) {
    finalprice = amount - (amount * 0.1);
}
else {
    finalprice = amount;
}

console.log("Final price is: " + finalprice);
