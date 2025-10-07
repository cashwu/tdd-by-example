import {Money} from "./money";

export class Dollar extends Money {

    currencyStr;

    constructor(amount) {
        super(amount);
        this.currencyStr = "USD";
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier)
    }

    currency() {
        return this.currencyStr;
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount);
}

