const {  getDeposits,getWithdrawals,getBalance } = require("./day05")
const transactions = [5000, -2000, 3000, -1500, 8000, -500];
test("deposits sirf positive hone chahiye", () => {
  expect(getDeposits(transactions)).toEqual([5000, 3000, 8000]);
});

test("withdrawals sirf negative hone chahiye", () => {
  expect(getWithdrawals(transactions)).toEqual([-2000, -1500, -500]);
});

test("balance 12000 hona chahiye", () => {
  expect(getBalance(transactions)).toBe(12000);
});

test("empty array pe balance 0 hona chahiye", () => {
  expect(getBalance([])).toBe(0);
})