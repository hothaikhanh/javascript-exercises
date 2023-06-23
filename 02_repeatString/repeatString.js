const repeatString = function (text, num) {
    if (num < 0) {
        return "ERROR";
    }

    let finalText = "";
    for (let index = 0; index < num; index++) {
        finalText += text;
    }
    return finalText;
};

module.exports = repeatString;
