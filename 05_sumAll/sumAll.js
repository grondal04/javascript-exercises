const sumAll = function(num1, num2) {
//FIRST WAY
    // if (num1 < 0 || num2 < 0 || typeof(num1) !== typeof(1) || typeof(num2) !== typeof(1)) {
    //     return 'ERROR'
    // }

    // let low = num1 < num2 ? num1 : num2;
    // let high = num1 > num2 ? num1 : num2;

    // let result = 0;

    // for (let i = low; i <= high; i++) {
    //     result += i;
    // }

    // return result;

//SECOND WAY
    // if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    // if (num1 < 0 || num2 < 0) return 'ERROR';

    // if (num1 > num2)
    //     [num1, num2] = [num2, num1];

    // let sum = 0;
    // for (let i = num1; i <= num2; i++) {
    //     sum += i;
    // }

    // return sum;

//THIRD WAY
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';

    //MATHEMATICS: to calculate the sum of a series of numbers knowing the first and last numbers: we do: (firstNum + lastNum) divided by (how_many_numbers / 2)
    return (num1 + num2)*(num1 + num2 - 1)/2;
};

// Do not edit below this line
module.exports = sumAll;
