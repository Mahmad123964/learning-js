const {calculateRickshawFare} = require("./day04")

test("5km fare = 200", () => {
    expect(calculateRickshawFare(5)).toBe(200)
});

test("10km fare = 350", () => {
  expect(calculateRickshawFare(10)).toBe(350);
});

test("1km fare = 80", () => {
  expect(calculateRickshawFare(1)).toBe(80);
});