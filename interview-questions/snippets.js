
// Find the missing number in 1 to N
function findMiss(arr) {
    let eSum = 0, sum = 0;
    for (let i = 1; i <= arr.length + 1; i++) {
        eSum += i;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return eSum - sum;
}

// 1,2,3,4 → 10
// 1,3,4 → 2
findMiss([1, 2, 3, 4, 5, 6, 8, 9, 10]);



/* Guew the bwlow ouput */
// *****************************************************

let flag = true;
setTimeout(function () {
    flag = false;
}, 2000);

while (flag) {
    console.log(`While loop`);
}

// ***********************************************************

setTimeout(() => console.log("timeout1"));
Promise.resolve()
    .then(() => console.log("promise1"));
Promise.resolve()
    .then(() => console.log("promise2"));
setTimeout(() => console.log("timeout2"));
console.log("code");

Code
Promise1
Promise2
Timeout1
Timeout2


// ********************************************************************



const promise = new Promise((resolve, reject) => {
    resolve("success");
});
promise
    .then((result) => {
        console.log(result);
        return 1;
    })
    .finally((finallyRes) => {
        console.log(`finally called`, finallyRes);
        return "finally";
    })
    .then((result1) => {
        console.log(`result1: `, result1);
        return "then 2";
    })
    .catch(() => {
        return "Catch";
    });


Success
    Finally called, undefined
Result1: 1


// ***************************************

var a = 1
function a() {
}
console.log(typeof a) // number


var b
function b() {
}
b = 1
console.log(typeof b)// number

function c() {
}
var c = 1;
console.log(typeof c) //number


// **************************************

function a() {
    console.log(1);
}
a(); //2

function a() {
    console.log(2);
}
a(); //2


// *****************************************

const obj = {
    name: 'Billy',
    Sing: function () {
        let self = this;
        console.log('1', this); // obj
        var anotherFunc = () => {
            console.log('2', this);//Iwindow
        }
        anotherFunc()
    }
}
obj.sing()

db.users.find({}, { name: 1, email: 1 }).sort({ created_at: -1 }).limit(10);;

function fact(n) {
    if (n == 1) return 1;
    return fact(n - 1) * n;
}

6

/// ***************************

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}



