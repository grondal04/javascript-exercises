
const getAge = function(person) {

    if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
    }
        
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    const age = people.map((person) => getAge(person))

    return people[age.indexOf(Math.max(...age))];
};

// Do not edit below this line
module.exports = findTheOldest;
