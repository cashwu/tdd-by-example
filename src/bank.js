export class Bank {
    rates = new Map();

    reduce(source, to) {
        return source.reduce(this, to);
    }

    rate(from, to) {
        let key = from + "->" + to;
        let rate = this.rates.get(key);
        return rate.value;
    }

    addRate(from, to, rate) {
        let key = from + "->" + to;
        this.rates.set(key, rate);
    }
}

class Pair {
    from
    to

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    equals(another) {
        if (another instanceof Pair) {
            return this.from === another.from && this.to === another.to;
        }
    }

    hashCode() {
        return 0;
    }
}
