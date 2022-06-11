import { areaofCircle } from "./areaofCircle.js"
import { areaofsquar } from "./areofsquar.js";

export function circleVSsquare(d, s) {
    let AOC = areaofCircle(d);
    let AOS = areaofsquar(s);

    if (AOC > AOS) {

        return "circle"

    }
    else return "square"

};

