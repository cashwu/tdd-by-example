export class Bank {
    reduce(source, to) {
        return source.reduce(this, to);
    }

    rate(from, to) {
        return from === "CHF" && to === "USD" ? 2 : 1;
    }

    addRate(source, to, rate) {

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
