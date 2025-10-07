import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount) {
        super(amount);
        this._currency = "USD";
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier)
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount);
}

