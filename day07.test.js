const { getDelivered, getPending, getDeliveredTotal } = require("./day07");

const orders = [
  { id: 1, item: "Mobile", price: 15000, status: "delivered" },
  { id: 2, item: "Laptop", price: 85000, status: "pending" },
  { id: 3, item: "Headphones", price: 3000, status: "delivered" },
  { id: 4, item: "Charger", price: 1500, status: "pending" },
  { id: 5, item: "Watch", price: 12000, status: "delivered" }
];

test("delivered orders 3 hone chahiye", () => {
  expect(getDelivered(orders).length).toBe(3);
});

test("pending orders 2 hone chahiye", () => {
  expect(getPending(orders).length).toBe(2);
});

test("delivered total 30000 hona chahiye", () => {
  expect(getDeliveredTotal(orders)).toBe(30000);
});

test("empty orders pe total 0 hona chahiye", () => {
  expect(getDeliveredTotal([])).toBe(0);
});