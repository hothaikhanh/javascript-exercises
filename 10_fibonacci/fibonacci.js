const fibonacci = function (number) {
    if (typeof number === "string") parseInt(number);
    if (number < 0) return "OOPS";

    let curentNum = 1;

    for (let turn = 1, prevNum_1 = 0, prevNum_2 = 0; turn < number; turn++) {
        prevNum_2 = prevNum_1;
        prevNum_1 = curentNum;
        curentNum = prevNum_1 + prevNum_2;
    }

    return curentNum;
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
