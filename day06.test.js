const { getCity, mergeProfiles } = require("./day06");

test("user with city returns city", () => {
  const user = { name: "Ahmad", address: { city: "Lahore" } };
  expect(getCity(user)).toBe("Lahore");
});

test("user without address returns default", () => {
  const user = { name: "Ali" };
  expect(getCity(user)).toBe("City not provided");
});

test("mergeProfiles combines two objects", () => {
  const basic = { name: "Ahmad", age: 22 };
  const job = { skill: "React", salary: 80000 };
  expect(mergeProfiles(basic, job)).toEqual({
    name: "Ahmad",
    age: 22,
    skill: "React",
    salary: 80000
  });
});