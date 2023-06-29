const sumAll = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    let start, end;
    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr.reduce((sum, num) => sum + num);
};

// Do not edit below this line
module.exports = sumAll;
