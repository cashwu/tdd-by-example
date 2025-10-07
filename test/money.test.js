import {Dollar} from "../src/dollar.js";
import {Franc} from "../src/franc";
import {Money} from "../src/money";

describe('money', () => {

    it('test multiplication', () => {

        let dollar = Money.dollar(5)
        expect(dollar.times(2)).toEqual(Money.dollar(10));
        expect(dollar.times(3)).toEqual(Money.dollar(15));
    })

    it('test equality', () => {
        expect(Money.dollar(5).equals(Money.dollar(5)))
            .toBe(true);

        expect(Money.dollar(5).equals(Money.dollar(6)))
            .toBe(false);

        expect(new Franc(5).equals(new Franc(5)))
            .toBe(true);

        expect(new Franc(5).equals(new Franc(6)))
            .toBe(false);

        expect(new Franc(5).equals(Money.dollar(5)))
            .toBe(false);
    })

    it('test franc multiplication', () => {
        let dollar = new Franc(5);
        expect(dollar.times(2)).toEqual(new Franc(10));
        expect(dollar.times(3)).toEqual(new Franc(15));
    })


});
