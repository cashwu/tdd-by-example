import {Dollar} from "../src/dollar.js";

describe('money', () => {

    it('test multiplication', () => {

        let dollar = new Dollar(5);
        expect(dollar.times(2)).toEqual(new Dollar(10));
        expect(dollar.times(3)).toEqual(new Dollar(15));
    })


    it('test equality', () => {
        expect(new Dollar(5).equals(new Dollar(5)))
            .toBe(true);

        expect(new Dollar(5).equals(new Dollar(6)))
            .toBe(false);
    })


});
