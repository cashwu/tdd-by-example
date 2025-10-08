import {Money} from "./money";
import {Sum} from "./sum";

export class Bank {
    reduce(source, to) {
        if (source instanceof Sum) {
            let amount = source.augend._amount + source.addend._amount;
            return Money.dollar(amount, to);
        }
    }
}
