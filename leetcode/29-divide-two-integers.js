/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) {
        return Math.pow(2, 31) - 1;
    }
    if (divisor === 1) {
        return dividend;
    }
    let c = 0;
    let isNeg = (dividend < 0 || divisor < 0) && !((dividend < 0 && divisor < 0));
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while (dividend >= divisor) {
        dividend -= divisor;
        c++
    }

    return isNeg ? -c : c;
};