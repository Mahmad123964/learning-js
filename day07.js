// console.log("--- For loop ---")

// for(let i=0;i< 5;i++) {
//     console.log(`Student ${i+1}`)
// }

// console.log("--- While loop ---")

// let count = 1;
// while(count <=3){
//     console.log(`Round ${count}`)
//     count++
// }

// console.log("--- forEach ---");
// const cities = ["Lahore","Karachi"]
// cities.forEach(city => {
//     console.log(`city : ${city}`)
// })

const orders = [
  { id: 1, item: "Mobile", price: 15000, status: "delivered" },
  { id: 2, item: "Laptop", price: 85000, status: "pending" },
  { id: 3, item: "Headphones", price: 3000, status: "delivered" },
  { id: 4, item: "Charger", price: 1500, status: "pending" },
  { id: 5, item: "Watch", price: 12000, status: "delivered" }
];

orders.forEach(order => {
    console.log(`Orders Details ${order.id}: ${order.item} - Rs.${order.price} - ${order.status}`)
})

const del = orders.filter(order=> order.status === "delivered")
console.log(del)

const pen = orders.filter(order=> order.status === "pending")
console.log(pen)

const total = del.reduce((sum, order) => sum + order.price, 0);
console.log(`Total delivered: Rs.${total}`);



const getDelivered = (orders) => 
  orders.filter(order => order.status === "delivered");

const getPending = (orders) => 
  orders.filter(order => order.status === "pending");

const getDeliveredTotal = (orders) => 
  getDelivered(orders).reduce((sum, order) => sum + order.price, 0);

module.exports = { getDelivered, getPending, getDeliveredTotal };