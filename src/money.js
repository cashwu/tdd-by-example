export class Money {

    _amount;
    constructor(amount) {
       this._amount = amount;
    }

    equals(another) {
        if (another instanceof Money) {
            return this._amount === another._amount;
        }
        return false;
    }
}
