import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier)
    }

    equals(another) {
        if (another instanceof Dollar) {
            return this._amount === another._amount;
        }
        return false;
    }
}
