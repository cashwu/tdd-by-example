import {Money} from "./money";

export class Dollar extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }
}

Money.dollar = function (amount) {
    return new Dollar(amount, "USD");
}

