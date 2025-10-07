import {Dollar} from "./dollar";

export class Money {

    _amount;

    constructor(amount) {
        this._amount = amount;
    }

    static dollar(amount) {
        return new Dollar(amount);
    }

    equals(another) {
        if (another instanceof Money) {
            return this._amount === another._amount
                && this.constructor.name === another.constructor.name;
        }
        return false;
    }
}
