import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return Money.dollar(this._amount * multiplier)
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount, "USD");
}

