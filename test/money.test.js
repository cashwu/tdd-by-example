import {Dollar} from "../src/dollar.js";

describe('money', () => {

    it('test multiplication', () => {

        let dollar = new Dollar(5);
        var product = dollar.times(2);
        expect(product.amount).toEqual(10);

        product = dollar.times(3);
        expect(product.amount).toEqual(15);
    })

});
