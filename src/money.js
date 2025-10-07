export class Money {

    _amount;

    _currency;

    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
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
