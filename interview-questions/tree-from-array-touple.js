// Given the below array of [parent, child], print the tree representaion
// [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [-1, 10], [-1, 1], [11, 12], [-1, 11]]
function list_to_tree(list) {
    var map = {}, out;

    for (let node of list) {
        let parent = node[0];
        let child = node[1];
        if (map[parent]) {
            map[parent][child] = {}
        } else {
            let obj = {};
            obj[child] = {}
            map[parent] = obj;
        }
    }

    out = { ...map[-1] };

    function mapChilds(out) {
        if (!out) return {}
        for (let key of Object.keys(out)) {
            out[key] = map[key] || {};
            mapChilds(out[key])
        }
    }

    mapChilds(out)

    return out;
}

var input = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [-1, 10], [-1, 1], [11, 12], [-1, 11]];

console.log(list_to_tree(input))
