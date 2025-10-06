import {Money} from "./money";

export class Dollar extends Money {
    #amount;

    constructor(amount) {
        super();
        this.#amount = amount
    }

    times(multiplier) {
        return new Dollar(this.#amount * multiplier)
    }

    equals(another) {
        if (another instanceof Dollar) {
            return this.#amount === another.#amount;
        }
        return false;
    }
}
