import {Money} from "./money";

export class Sum {

    augend;
    addend;

    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to) {
        let amount = this.augend._amount + this.addend._amount;
        return Money.dollar(amount, to);
    }
}
