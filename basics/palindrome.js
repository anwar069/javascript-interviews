export function checkPalindrome(text) {
    let arr = text.split('');

    for (let index = 0; index < Math.floor(arr.length / 2); index++) {
        let start = arr[index];

        let end = arr[arr.length - 1 - index]
        if (start != end) {
            console.log(start, end)
            return 'It is not palindrome'
        }
    }
    return 'It is palindrome';

}



//     // convert string to an array
//     const arrayValues = string.split('');

//     // reverse the array values
//     const reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     const reverseString = reverseArrayValues.join('');

//     if (string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }
