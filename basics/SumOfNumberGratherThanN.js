export function someOfnumber(a, b) {
    let count = 0
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element > b) {
            count = count + element

        }
    }
    return count
}

