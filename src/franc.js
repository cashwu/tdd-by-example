import {Money} from "./money";

export class Franc extends Money {
    #amount;

    constructor(amount) {
        super(amount);
        this.#amount = amount
    }

    times(multiplier) {
        return new Franc(this.#amount * multiplier)
    }

    equals(another) {
        if (another instanceof Franc) {
            return this.#amount === another.#amount;
        }
        return false;
    }
}
