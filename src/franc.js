import {Money} from "./money";

export class Franc extends Money {

    constructor(amount, currency) {
        super(amount, currency);
    }
}

Money.franc = function (amount) {
    return new Franc(amount, "CHF");
}

