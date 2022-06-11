export function getOperation(a, b, c) {
    let ans1 = a + b;
    if (ans1 == c) {
        return "addition";

    }

    let ans2 = a - b;
    if (ans2 == c) {
        return "subtraction";
    }



    let ans3 = a * b;
    if (ans3 == c) {
        return "multiplication";

    }

    let ans4 = a / b;
    if (ans4 == c) {
        return "dividation";

    }
    return "inValid";




}
