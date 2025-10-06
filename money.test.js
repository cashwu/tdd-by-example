describe('money', () => {

    it('test multiplication', () => {

        let dollar = new Dollar(5);
        dollar.times(2);
        expect(dollar.amount).toEqual(10);
    })

});
