
// executue 2 promnises at one time, as soon any/both promise finsihes off, start executing the next one(s)
//asyncFn(3), asyncFn(2) start
// After 2 seconds
//asyncFn(3), asyncFn(1) execute
// After 3 sconds
// asyncFn(4), asyncFn(5)

function asyncFn(v) {
    return function () {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log(v);
                resolve(v);
            }, v * 1000)
        }
        );
    }
}

let p_arr = [asyncFn(3), asyncFn(2), asyncFn(1), asyncFn(4), asyncFn(5), asyncFn(2)];

class PromRunner {
    constructor(tasks, count) {
        this.tasks = tasks,
            this.running = [];
        this.completed = [];
        this.max = count;
    }
    isQueueFree() {
        return (this.running.length < this.max) && this.tasks.length
    }
    run() {
        while (this.isQueueFree()) {
            const prom = this.tasks.shift();
            prom().then(() => {
                this.completed.push(this.running.shift());
                this.run();
            });
            this.running.push(prom);
        }
    }
}

const promRunner = new PromRunner(p_arr, 2);

promRunner.run()

