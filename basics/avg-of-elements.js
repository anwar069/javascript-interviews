export function ElementAvg(arr) {
        let avg = 0;
        for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                avg = (avg + element) / arr.length;

        }

        return avg;

}