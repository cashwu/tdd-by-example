import {Sum} from "./sum";
import {Money} from "./money";

export class Bank {
    reduce(source, to) {

        if (source instanceof Money) {
            return source;
        }

        if (source instanceof Sum) {
            return source.reduce(source, to);
        }
    }

}
