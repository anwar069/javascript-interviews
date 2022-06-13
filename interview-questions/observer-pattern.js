class Producer {
    static subs = [];
    constructor() {
    }
    notifyAll(msg) {
        this.constructor.subs.forEach(s => {
            s.handleMessage && s.handleMessage(msg)
        }
        )
    }
    static subscribe(obj) {
        this.subs.push(obj);
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }
    handleMessage(msg) {
        console.log(this.name, 'receeves', msg);
    }
}
let p = new Producer();

let s1 = new Subscriber('Sub 1');
let s2 = new Subscriber('Sub 2');
let s3 = new Subscriber('Sub 3');
p.notifyAll('Hey')


Producer.subscribe(s1);
Producer.subscribe(s2);
Producer.subscribe(s3);

let s4 = new Subscriber('New guy');
p.notifyAll('Hello')