const {getDeliveryFee} = require("./day03");

test("Free delivery on 2500 rupees order", () => {
    expect(getDeliveryFee(2500)).toBe(0)
});

test("100 rupees delivery charges on 1500 rupees order", () => {
    expect(getDeliveryFee(1500)).toBe(100)
});

test("200 rupees delivery charges on 500 rupees order", () => {
    expect(getDeliveryFee(500)).toBe(200)
});