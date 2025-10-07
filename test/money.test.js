import {Money} from "../src/money";
import "../src/franc"
import {Franc} from "../src/franc";

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


    it('test currency', () => {
        expect(Money.dollar(1).currency()).toEqual("USD");
        expect(Money.franc(1).currency()).toEqual("CHF");
    })


    it('test different class equality', () => {
        expect(new Money(10, "CHE")).toEqual(new Franc(10, "CHE"));
    })


});
