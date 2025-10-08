import {Money} from "../src/money";
import {Bank} from "../src/bank";
import {Sum} from "../src/sum";

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


    it('test simple addition', () => {

        let five = Money.dollar(5);
        //expression
        let sum = five.plus(five);
        let bank = new Bank();
        let reduce = bank.reduce(sum, "USD");
        expect(reduce).toEqual(Money.dollar(10));
    })

    it('test plus return sum', () => {

        let five = Money.dollar(5);
        let sum = five.plus(five);
        expect(sum.augend).toEqual(five);
        expect(sum.augend).toEqual(five);
    })


    it('test reduce sum', () => {

        let sum = new Sum(Money.dollar(3), Money.dollar(4));
        let result = new Bank().reduce(sum, "USD");
        expect(result).toEqual(new Money(7));
    })


});
