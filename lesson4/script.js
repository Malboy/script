function printDigit(dig) {
    for (i = 0; i < dig; i++) {
        (i == 0) ? console.log(`${i} - это ноль`):
            (i % 2 == 0) ? console.log(`${i} - четное число`) : console.log(`${i} - нечетное число`);
    }
}

printDigit(11);

let mass = [1, 2, 3, 4, 5, 6, 7];
console.log(mass);
mass.splice(3, 2);
console.log(mass);

function fillMass(len) {
    let mass = [];
    for (i = 0; i < len; i++) {
        mass.push(Math.floor(Math.random(10) * 10));
    }
    return mass;
}

/*function massSum(massive) {
    let sum = 0;
    for (i = 0; i < massive.len; i++) {
        sum = sum + massive[i];
    }
    console.log(`сумма элементов массива равна ${sum}`);
}*/

let filledMassive = fillMass(5);
console.log(filledMassive);
/*massSum(filledMassive);*/