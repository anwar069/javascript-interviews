// https://leetcode.com/playground/e4veEVrt

function validateString(str) {
    const map = {};
    for (i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    }
    // console.log(map);
    let vals = Object.values(map);
    let diffCount = 0;
    let baseVal = vals[0];

    for (let i = 1; i < vals.length; i++) {
        let diff = Math.abs(baseVal - vals[i]);
        if (diff > 1)
            return false
        if (diff == 1) {
            if (diffCount === 1)
                return false;
            diffCount++;
        }
    }

    return true;
};
