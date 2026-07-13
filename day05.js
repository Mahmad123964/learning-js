// const cart = ["Mobile","Headphones","Charger "]


// console.log(cart[0])
// console.log(cart[1])
// console.log(cart[2])

// console.log(cart.length)
// console.log(cart[cart.length-1])

// cart[1] = "Earbuds"
// console.log(cart)

// cart.push("Laptop")
// console.log(cart)

// cart.pop("Laptop")
// console.log(cart)

// cart.unshift("Pc")
// console.log(cart)

// cart.shift("Pc")
// console.log(cart)

// const price = [15000,3000,1500,8000,500]

// const withTax = price.map(price =>parseFloat(price*1.1).toFixed(2) )
// console.log(withTax)

// const expensive = price.filter(price => price > 5000)
// console.log(expensive)

// const total = price.reduce((sum,price)=> sum + price,0)
// console.log(total)


// const transactions = [5000, -2000, 3000, -1500, 8000, -500];

// const addPkr = transactions.map(transactions => transactions+500)
// console.log(addPkr)

// const fPostive = transactions.filter(transactions => transactions>0)
// console.log(fPostive)

// const fNegitive = transactions.filter(transactions => transactions<0)
// console.log(fNegitive)

// const finalBalance = transactions.reduce((sum,transactions)=> sum+transactions,0)
// console.log(finalBalance)


// const transactions = [5000, -2000, 3000, -1500, 8000, -500];

// const getDeposits = (transactions) => {
//     const dep = transactions.filter(amount => amount>0)
//     return dep;
// }

// const getWithdrawals = (transactions) =>{
//     const dep1 = transactions.filter(amount => amount<0)
//     return dep1;
// }

// const getBalance = (transactions) =>{
//     const finalBalance = transactions.reduce((sum,amount)=> sum+amount,0)
//     return finalBalance
// }

// console.log(getDeposits(transactions))
// console.log(getWithdrawals(transactions))
// console.log(getBalance(transactions))

// module.exports = {getDeposits,getWithdrawals,getBalance}

const nums = [1, 2, 3, 4, 5];
const result = nums.filter(n => n % 2 === 0);
console.log(result);