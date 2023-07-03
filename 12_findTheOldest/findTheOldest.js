const findTheOldest = function (people) {
    let oldestPersonAge = 0;
    let result = people.reduce((oldestPerson, currPerson) => {
        if (currPerson.yearOfDeath == null) currPerson.yearOfDeath = 2023;
        let currPersonAge = currPerson.yearOfDeath - currPerson.yearOfBirth;

        if (currPersonAge > oldestPersonAge) {
            oldestPersonAge = currPersonAge;
            oldestPerson = currPerson;
        }
        return oldestPerson;
    });

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
