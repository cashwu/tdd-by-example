export class Money {

    _amount;

    _currency;

    constructor(amount) {
        this._amount = amount;
    }

    equals(another) {
        if (another instanceof Money) {
            return this._amount === another._amount
                && this.constructor.name === another.constructor.name;
        }
        return false;
    }

    currency() {
        return this._currency;
    }
}
