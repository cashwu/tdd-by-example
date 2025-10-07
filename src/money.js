export class Money {

    _amount;

    _currency;

    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    static dollar(amount) {
        return new Money(amount, "USD");
    }

    static franc(amount) {
        return new Money(amount, "CHF");
    }

    plus(addend) {
        return new Money(this._amount + addend._amount, this._currency);
    }


    equals(another) {
        if (another instanceof Money) {
            return this._amount === another._amount
                && this.currency() === another.currency();
        }
        return false;
    }

    currency() {
        return this._currency;
    }

    times(multiplier) {
        return new Money(this._amount * multiplier, this._currency);
    }
}
