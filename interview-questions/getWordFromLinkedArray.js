function getWord(arr) {
    let m = {}, m2 = {}, startKey;

    for (let str of arr) {
        let sArr = str.split('-');
        m[sArr[1]] = sArr[0]
    }
    for (let str of arr) {
        let sArr = str.split('-');
        m2[sArr[0]] = sArr[1];
        if (!m[sArr[0]]) {
            startKey = sArr[0];
        }
    }
    console.log(m, m2, startKey);
    let str = startKey;

    while (1) {
        if (!m2[startKey])
            break;
        str += m2[startKey];
        startKey = m2[startKey];
    }
    return str;
}

// O(3N) --> O(N)
console.log(getWord(["A-N", "W-A", "S-W"]));
console.log(getWord(["U-N", "G-A", "R-Y", "H-U", "N-G", "A-R"]));
console.log(getWord(["L-A", "A-N", "T-Z", "Z-E", "N-D", "S-W", "E-R", "R-L", "W-I", "I-T"]));
