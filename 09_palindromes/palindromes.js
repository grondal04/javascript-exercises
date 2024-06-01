const reverseString = function(word) {
    let splitString = word.split("");
    
    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
};

const palindromes = function (string) {
    let cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '');
    return (cleanedStr.toLowerCase() === reverseString(cleanedStr).toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
