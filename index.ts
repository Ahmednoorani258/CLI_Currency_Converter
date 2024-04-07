#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

async function rainbow(arr:string,time:number) {
    let text = chalkAnimation.rainbow(arr)
    await new Promise ((resolve) => {
        setTimeout(resolve,time);
    })
    text.stop();
}


const currency:any ={
    USD:1,//BASE CURRENCY
    EUR:.91,
    GBP:.76,
    IND:74.57,
    PKR:280
}

let userInput = await inquirer.prompt([
    {
        name: "from",type:"list",
        message: "Enter From Currency:",
        choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        name: "to",type:"list",
        message: "Enter From Currency:",
        choices:["USD","EUR","GBP","INR","PKR"]  
    },
    {
        name: "amount",
        type: "number",
        message: "Enter The Amount"
    }
])
if(Number.isNaN(userInput.amount)){
    console.log('u need to insert amount');
    
}else{

let fromAmount = currency[userInput.from]
let toAmount = currency[userInput.to]
let amount = userInput.amount

let baseAmount = amount/fromAmount;
let exchangeAmount = baseAmount * toAmount

console.log(Math.floor(exchangeAmount));
}
