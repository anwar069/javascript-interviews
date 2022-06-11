export function countRepeated(array, num) {
    let count = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == num) {
            count++;
        }
    }
    return count;
}
