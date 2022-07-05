// Incremental notification 

function createProm(time) {
    return function () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log(time);
                res(time);
            }
                , time * 1000)
        }
        )
    }
}

let notifier = async () => {
    let pArr = [];

    for (let i = 1; i <= 10; i++) {
        pArr.push(createProm(i));
    }

    for (let i = 0; i < 10; i++) {
        await pArr[i]()
    }

}

notifier()