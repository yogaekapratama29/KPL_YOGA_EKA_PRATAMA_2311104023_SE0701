class Singleton {
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        this.timestamp = new Date();
        Singleton.instance = this;
    }

    getTime() {
        return this.timestamp;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1 === s2); // true