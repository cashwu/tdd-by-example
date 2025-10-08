import {Money} from "./money";

export class Sum {

    augend;
    addend;

    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank, to) {
        let amount = this.augend.reduce(bank, to)._amount
            + this.addend.reduce(bank, to)._amount;
        return Money.dollar(amount, to);
    }
}
