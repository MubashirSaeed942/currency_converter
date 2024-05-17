#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    GBP: 0.79,
    INR: 83.30,
    RIYAL: 3.75,
    PKR: 278
};
let exchange = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your currency : ",
        choices: ["USD", "GBP", "INR", "RIYAL", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Select your  conversion currency : ",
        choices: ["USD", "GBP", "INR", "RIYAL", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amount : ",
    }
]);
let fromAmount = currency[exchange.from]; //user jo b currency select kryga uski actual value store hogi.
//  e.g == agr user riyal select kryga to yahan value 3.75 store ho jygi.
let toAmount = currency[exchange.to]; // yahan user jis currency mein convert krawana chahat hai woh select
//kryga to uski value store hojygi..e.g == pkr to 278 store hojyga .. 
let amount = exchange.amount; //yeh user ki di gai wo amount hogi jisy woh convert krwana chahat hai 
// or woh yeh ammount kisi b currency mein dyskta hai 
let baseAmount = amount / fromAmount; // yahan user ki di gai amount ko uski select ki gai currency sy divide 
//kiya jayega e.g == user insert amount  --  10000 / 3.75 riyal
let converstionAmount = baseAmount * toAmount; //yahan user ki jo base ammount aygi usy uski required currency
// sy multiply kr dya jyga ..e.g--- 2666.6666666666 * 278 pkr.
console.log(converstionAmount);
