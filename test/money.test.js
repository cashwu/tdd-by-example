import {Money} from "../src/money";
import "../src/dollar"
import "../src/franc"

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

        expect(Money.franc(5).equals(Money.franc(5)))
            .toBe(true);

        expect(Money.franc(5).equals(Money.franc(6)))
            .toBe(false);

        expect(Money.franc(5).equals(Money.dollar(5)))
            .toBe(false);
    })

    it('test franc multiplication', () => {
        let dollar = Money.franc(5)
        expect(dollar.times(2)).toEqual(Money.franc(10));
        expect(dollar.times(3)).toEqual(Money.franc(15));
    })


});
