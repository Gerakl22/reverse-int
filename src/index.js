module.exports = function reverse(n) {
    let numberMinus = n < 0 ? n * -1 : n;
    let numberWithNull = n % 10 === 0 ? n / 10 : n;
    let numberString = `${numberMinus}` || `${numberWithNull}`;

    return Number(numberString.split("").reverse().join(""));
};
