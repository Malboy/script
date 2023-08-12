const cube = (digit) => digit ** 3;
console.log(cube(2));

const doxod = (zp) => console.log(`Размер заработной платы за вычетом налогов равен значение ${zp*0.87}`);

let userInput = prompt('Введите число:');
(isNaN(userInput)) ? console.log('значение задано неверно'): doxod(userInput);

function maxDigit(a, b, c) {
    let max = a;
    (a > b) ? ((a > c) ? max = a : max = c) : (b > c) ? max = b: max = c;
    return max;
}

let usersDigit1 = prompt('Введите первое число:');
let usersDigit2 = prompt('Введите второе число:');
let usersDigit3 = prompt('Введите третье число:');
console.log(maxDigit(usersDigit1, usersDigit2, usersDigit3));

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    let res = 0;
    if (a == b) return res;
    (a > b) ? res = a - b: res = b - a;
    return res;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(sum(2, 5));
console.log(sub(2, 5));
console.log(mult(2, 5));
console.log(div(2, 5));