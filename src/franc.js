import {Money} from "./money";

export class Franc extends Money {

    constructor(amount, currency) {
        super(amount);
        this._currency = currency;
    }

    times(multiplier) {
        return Money.franc(this._amount * multiplier, "CHF")
    }
}

Money.franc = function (amount) {
    return new Franc(amount, "CHF");
}

