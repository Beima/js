//Homework


function calculate(a, b, operation){

    switch(operation){
        case "sum":
            return a + b;
        case "minus":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        case "qaldyq":
            return a % b;
        default:
            return "Operaciya mumkin emes";

    }
}


const a = 5;
const b = 65;

console.log(calculate(a, b, "sum"));
console.log(calculate(a, b, "minus"));
console.log(calculate(a, b, "multiply"));
console.log(calculate(a, b, "divide"));
console.log(calculate(a, b, "qaldyq"));
console.log(calculate(a, b, "bolu"));

//Math 
console.log(Math.min(123, 342, 34, 23, 54, 78, 35, 678));
console.log(Math.max(123, 342, 34, 23, 54, 78, 35, 678));

//Randomizer

function random(max){
    return Math.round(Math.random() * max);
}
console.log(random(20));

function randomUsers() {
    const users = ["Abdurakhman", "Rayyan", "Osman", "Aisha", "Dara"];

    const userNumber = random(users.length - 1);
    // alert(users[userNumber]);
    console.log(users[userNumber]);
}

randomUsers();

//Converter 
let dollar = 473.33;

function converterUsdToKzt(dollarCount){
    return dollarCount * dollar;
}

function converterKztToUsd(tengeCount){
    return tengeCount / dollar;
}

console.log(converterUsdToKzt(90));
console.log(converterKztToUsd(54000));

