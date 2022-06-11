let arr = ['horse', 'cat', 'dog', 'hen', 'cat']

remove(arr, 'cat')
remove(arr, 'cat')

console.log(arr)


function remove(arr, val) {
    let i = arr.indexOf(val);
    if (i === -1) return;
    arr.splice(i, 1);
}
