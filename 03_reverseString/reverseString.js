const reverseString = function (text) {
    let revText = "";
    for (let index = 0; index < text.length; index++) {
        revText.unshift(text[index]);
    }

    return revText;
};

// Do not edit below this line
module.exports = reverseString;
