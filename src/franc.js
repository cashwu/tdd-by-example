import {Money} from "./money";

export class Franc extends Money {

    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier)
    }

    equals(another) {
        if (another instanceof Franc) {
            return this._amount === another._amount;
        }
        return false;
    }
}
