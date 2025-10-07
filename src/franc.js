import {Money} from "./money";

export class Franc extends Money {
    currencyStr;

    constructor(amount) {
        super(amount);
        this.currencyStr = "CHF";
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier)
    }


    currency() {
        return this.currencyStr;
    }
}

Money.franc = function (amount) {
    return new Franc(amount);
}

