function priceCalc(price) {
    if (price > 1000) {
        return price * 0.75;
    }
    return price * 0.9;
}

module.exports = priceCalc;