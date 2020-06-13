const priceCalc = require('./util');

test('calc price for 950/= room', () => {
    expect(priceCalc(950)).toBe(855);
});


test('calc price for 1050/= room', () => {
    expect(priceCalc(1050)).toBe(787.5);
});