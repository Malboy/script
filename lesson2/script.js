let num1 = prompt('num1');
let num2 = prompt('num2');
console.log(`num1 = ${num1}, num2 = ${num2}`);
if (num1 <= 1) {
    console.log("num1 <= 1");
} else {
    console.log('num1 > 1');
}

if (num2 >= 3) {
    console.log("num2 >= 3");
} else {
    console.log('num2 < 3');
}


let test = true;
(test === true) ? console.log('+++'): console.log('---');



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let day = 1 + getRandomInt(31);
console.log(day);
let dekade = day / 10;
if (dekade <= 1) {
    console.log("первая декада");
} else if (dekade <= 2) {
    console.log("вторая декада");
} else
    console.log("третья декада");