import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier, "USD");
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount, "USD");
}

