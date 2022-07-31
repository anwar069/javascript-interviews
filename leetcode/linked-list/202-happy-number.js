/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {

    let fast = digitSquareSum(digitSquareSum(n));
    let slow = digitSquareSum(n);

    while (fast != slow) {
        fast = digitSquareSum(digitSquareSum(fast));
        slow = digitSquareSum(slow);
    }

    if (slow == 1) return true;
    return false;

    function digitSquareSum(n) {
        let sum = 0;

        while (n > 0) {
            let num = n % 10;
            sum += num * num;
            n = Math.floor(n / 10);
        }
        return sum;
    }
};

/**
 * Use the linked list fast and slow pointer approach for this.
 * 
 * the fast pointer will move 2 steps each time, and the slow pointer will move 1 step each time.
 * fast number will get suare twice, and slow number will get square once.
 * 
 * if the fast number and slow number are the same, then there is a cycle.
 * if the cycle end at one, Number is Happy
 */