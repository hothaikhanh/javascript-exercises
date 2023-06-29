const reverseString = function (text) {
    let textArr = text.split("");
    let revText = "";
    let revTextArr = [];

    for (let index = 0; index < textArr.length; index++) {
        revTextArr.unshift(textArr[index]);
    }

    revText = revTextArr.join("");
    return revText;
};

// Do not edit below this line
module.exports = reverseString;
