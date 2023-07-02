const palindromes = function (string) {
    string = string
        .replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "")
        .replace(" ", "")
        .toLowerCase();

    return string === string.split("").reverse().join("");
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
