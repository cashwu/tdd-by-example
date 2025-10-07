import {Money} from "./money";

export class Franc extends Money {

    constructor(amount, currency) {
        super(amount);
        this._currency = "CHF";
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier, null)
    }
}

Money.franc = function (amount) {
    return new Franc(amount, null);
}

