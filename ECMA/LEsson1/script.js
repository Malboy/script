//task1

const arr = [-2, 0, 1, 7];
const minDig = Math.min(...arr);
console.log(minDig);


//task2
function createCounter() {
    let count = 0;
    return obj = {
        increment: function() {
            count++
            console.log(count);
        },
        decrement: function() {
            count--
            console.log(count);
        }
    }
}

const test = createCounter()
test.increment()
test.decrement()