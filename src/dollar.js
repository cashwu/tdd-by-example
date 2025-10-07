import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return new Money(this._amount * multiplier, this._currency);
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount, "USD");
}

