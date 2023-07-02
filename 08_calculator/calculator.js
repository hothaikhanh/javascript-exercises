const add = function (num_1, num_2) {
    return num_1 + num_2;
};

const subtract = function (num_1, num_2) {
    return num_1 - num_2;
};

const sum = function (numArr) {
    return numArr.reduce((total, current) => {
        return total + current;
    }, 0);
};

const multiply = function (...numArr) {
    return numArr.reduce((total, current) => {
        return total * current;
    });
};

const power = function (num_1, num_2) {
    return Math.pow(num_1, num_2);
};

const factorial = function (num) {
    if (num == 0) return 1;
    let arr = [];
    for (let i = num; i > 0; i--) {
        arr.push(i);
    }
    return arr.reduce((total, current) => {
        return total * current;
    });
};

factorial(10);
// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
