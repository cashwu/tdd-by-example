import {Money} from "./money";

export class Franc extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return new Money(this._amount * multiplier, this._currency);
    }
}

Money.franc = function (amount) {
    return new Franc(amount, "CHF");
}

