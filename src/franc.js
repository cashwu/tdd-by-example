import {Money} from "./money";
import {Dollar} from "./dollar";

export class Franc extends Money {

    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier)
    }
}

Money.franc = function(amount) {
    return new Franc(amount);
}

