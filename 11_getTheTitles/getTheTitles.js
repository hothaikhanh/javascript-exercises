const getTheTitles = function (books) {
    return books.map((book, index, array) => {
        return book.title;
    });
};

// Do not edit below this line
module.exports = getTheTitles;
