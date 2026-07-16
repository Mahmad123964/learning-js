// Simple closure example
function makeCounter() {
  let count = 0; // yeh yaad rahega!
  
  return function() {
    count++;
    console.log(`Count: ${count}`);
  };
}

const counter = makeCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Naya counter — alag count!
const counter2 = makeCounter();
counter2(); // Count: 1 — fresh start!



function createAccount(initialBalance) {
  let balance = initialBalance; // private!

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposit: ${amount} — Balance: ${balance}`);
    },
    withdraw: function(amount) {
      if (amount > balance) {
        console.log("Insufficient balance!");
        return;
      }
      balance -= amount;
      console.log(`Withdraw: ${amount} — Balance: ${balance}`);
    },
    getBalance: function() {
      console.log(`Balance: ${balance}`);
    }
  };
}

const myAccount = createAccount(10000);
myAccount.deposit(5000);
myAccount.withdraw(3000);
myAccount.getBalance();
myAccount.withdraw(20000); // insufficient!



const products = [
  { id: 1, name: "Mobile", price: 15000, inStock: true },
  { id: 2, name: "Laptop", price: 85000, inStock: false },
  { id: 3, name: "Headphones", price: 3000, inStock: true },
  { id: 4, name: "Charger", price: 1500, inStock: true }
];

// find — pehla match dhundo
const laptop = products.find(p => p.name === "Laptop");
console.log(laptop);

// findIndex — index dhundo
const idx = products.findIndex(p => p.name === "Laptop");
console.log(idx); // 1

// some — koi ek bhi match karta hai?
const hasExpensive = products.some(p => p.price > 50000);
console.log(hasExpensive); // true

// every — sab match karte hain?
const allInStock = products.every(p => p.inStock === true);
console.log(allInStock); 


const students = [
  { name: "Ahmad", marks: 85, passed: true },
  { name: "Ali", marks: 45, passed: false },
  { name: "Sara", marks: 92, passed: true },
  { name: "Usman", marks: 38, passed: false },
  { name: "Ayesha", marks: 78, passed: true }
];

const name1 = students.find(n=> n.name === "Sara")
console.log(name1)

const indexOfAli = students.findIndex(i => i.name==="Ali")
console.log(indexOfAli)

const studentMarks = students.some(s => s.marks > 90)
console.log(studentMarks)

const status = students.every( s => s.passed === true)
console.log(status)

const statusPass = students.filter(s => s.passed === true)
console.log(statusPass)

const nameMarks = students.map(s => `${s.name}: ${s.marks}`);
console.log(nameMarks);


  