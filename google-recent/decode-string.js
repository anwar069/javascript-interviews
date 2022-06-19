// https://leetcode.com/problems/decode-string/
// https://techdevguide.withgoogle.com/resources/former-interview-question-compression-and-decompression/#!

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let memo = {};
    function decode(str, start) {
        let args = JSON.stringify(arguments);
        if (memo[args]) return memo[args];
        let out = '';
        let rep;
        for (let i = start; i < str.length; i++) {
            let c = str[i];
            if (Number(c)) {
                let num = c;
                i++;
                while (true) {
                    c = str[i];
                    if (c == '[') break;
                    num += c;
                    i++;
                }
                rep = Number(num);
            }
            if (c == '[') {
                let { nextStr, pos } = decode(str, i + 1);
                for (let j = 0; j < rep; j++) {
                    out += nextStr;
                }
                i = pos;
                continue;
            }
            if (c == ']') {
                return memo[args] = { nextStr: out, pos: i };
            }
            out += c;

        }
        return memo[args] = { nextStr: out, pos: str.length };
    }
    return decode(s, 0).nextStr;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"))

