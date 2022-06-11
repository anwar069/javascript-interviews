export function ElementSum(num) {
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        sum = sum + element;

    }
    return sum;
}