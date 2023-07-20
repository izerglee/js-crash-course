let cash = 30
let price = 40
let change = cash - price

if (cash > price) {
   console.log(`you paid extra - here's ${change} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else  {
    console.log(`not enough money - you still owe ${change} dollars`)
}