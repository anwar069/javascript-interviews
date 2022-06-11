export function getOperation(a, b, c) {


    let addition = a + b;
    let substraction = a - b;
    let multiplication = a * b;
    let division = a / b;


    if (addition == c) {
        return "addition";

    }
    if (substraction == c) {

        return "substraction";

    }
    if (multiplication == c) {

        return "multiplication";

    }
    if (division == c) {

        return "division";

    }
    else {

        return "invalid";
    }


}
