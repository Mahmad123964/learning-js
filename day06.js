const candidate = {
    name:"M Ahmad",
    age: 22,
    city : "Lahore",
    skill: "Mern stack",
    isAvailable: true
}

console.log(candidate.name)
console.log(candidate.age)
console.log(candidate.city)
console.log(candidate.skill)

candidate.age = 25
console.log(candidate.age)

delete candidate.isAvailable;
console.log(candidate.isAvailable);


const user = {
  name: "Ahmad",
  age: 23,
  city: "Lahore"
};

console.log(user.name);
console.log(user.age);

// Add Property

user.country = "Pakistan";

// Update Property

user.age = 24;

// Delete Property

delete user.city;


// Destructuring write short code which is readable and understand able

const car = {
  brand: "Toyota",
  model: "Corolla"
};

const { brand } = car;

console.log(brand);

// Initilizing value 
const user = {
  name: "Ahmad"
};

const { age = 23 } = user;

console.log(age);

// Rename variale

const student = {
  name: "Ali",
  marks: 90
};

const { name: studentName } = student;

console.log(studentName);



// Spread Operator ( ... )

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);



const cart = ["Laptop", "Mouse"];
const updatedCart = [...cart, "Keyboard"];
console.log(updatedCart)

// Combine Arrays

const fruits = ["Apple", "Mango"];
const vegetables = ["Potato", "Tomato"];
const items = [...fruits, ...vegetables];
console.log(items);

// Objects With Spread

const user = {
  name: "Ahmad",
  age: 23
};

const updatedUser = {
  ...user,
  city: "Lahore"
};

console.log(updatedUser)

// Optional Chaining 

const user = {
  name: "Ahmad"
};

console.log(user.address?.city);

const user = {
  address: {
    city: "Lahore"
  }
};

console.log(user.address?.city);