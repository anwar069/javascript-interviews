// A triplet is a tuple og (a,b,c) suh that a * r = b and b * r = c
// [1,3,2,3,9,7, 27] ,  r= 3
// In the above array we have 
// 1 * 3 = 3 & 3 * 3 = 9 (index 0, 1, 4) 
// 1 * 3 = 3 & 3 * 3 = 9 (index 0, 3, 4) 
// 3 * 3 = 9 & 3 * 9 = 27 (index 1, 4, 6) 
// 3 * 3 = 9 & 3 * 9 = 27 (index 3, 4, 6) 
// Output = 4
function countTriplets(arr, r) {
    let count = 0;
    let singlesMap = {};
    let doublesMap = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        let n = arr[i];
        let doublet = n * r;
        let triplet = doublet * r;

        let tripletPair = [doublet, triplet];
        let doubletPair = [n, doublet];

        if (doublesMap[tripletPair] !== undefined) {
            count = count + doublesMap[tripletPair]
        }

        if (doublesMap[doubletPair] == undefined)
            doublesMap[doubletPair] = 0;
        doublesMap[doubletPair] = doublesMap[doubletPair] + ((singlesMap[doublet] == undefined) ? 0 : singlesMap[doublet]);

        (singlesMap[n] == undefined) ? singlesMap[n] = 1 : singlesMap[n]++;
        // console.log("Maps",singlesMap,doublesMap, count);
    }

    return count;
}

console.log(countTriplets([1, 3, 2, 3, 9, 7, 27], 3))