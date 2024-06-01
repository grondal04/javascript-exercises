const { constantCase } = require("case-anything");

function isAlphabet(letter) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return alphabet.includes(letter);
}

function sumCharCode(charCode, shift) {
    let result = charCode + (shift % 26);

    if (charCode >= 97 && charCode <= 122) {
        if (result > 122)
            result = result - 122 + 97 - 1;
        if (result < 97)
            result = result + 26;
    } else if (charCode >= 65 && charCode <= 90) {
        if (result > 90)
            result = result - 90 + 65 - 1;
        if (result < 65)
            result = result + 26;
    }

    return result;
}

const caesar = function(str, shift) {

    let encrypted = '';

    for (let i = 0; i < str.length; i++) {
        if (isAlphabet(str[i]))
            encrypted += String.fromCharCode(sumCharCode(str.charCodeAt(i), shift));
        else
            encrypted += str[i];
    }
    
    return encrypted;
};

// Do not edit below this line
module.exports = caesar;
