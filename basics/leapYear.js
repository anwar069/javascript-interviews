/**
 * 
 * @param {year} a 
 * @returns 
 */

// if year is divisible by 400 then is_leap_year
// else if year is divisible by 100 then not_leap_year
// else if year is divisible by 4 then is_leap_year
// else not_leap_year


export function leapYear(a) {

    let ly1 = a % 400;

    if (ly1 == 0) {
        return true;
    }


    let ly2 = a % 100;
    if (ly2 == 0) {
        return true;
    }

    let ly = a % 4;

    if (ly == 0) {
        return true;

    } else {
        return false;
    }

}



