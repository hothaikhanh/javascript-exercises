const removeFromArray = function (arr, ...args) {
    console.log(arr);
    console.log(args);

    return arr.filter((arr) => !args.includes(arr));
};
// Do not edit below this line
module.exports = removeFromArray;
