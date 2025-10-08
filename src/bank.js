import {Sum} from "./sum";

export class Bank {
    reduce(source, to) {
        if (source instanceof Sum) {
            return source.reduce(source, to);
        }
    }

}
