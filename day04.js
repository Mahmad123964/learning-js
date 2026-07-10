// function add(a,b){
//     const twoNumbers = a+b;
//     return twoNumbers;
// }

// const multiply = (a,b) => a*b;

// console.log(add(5,3))
// console.log(multiply(4,3))

// const getDiscountPrice = (price,discount) => {
//     const discountAmount = price*discount
//     return price - discountAmount
// }

// console.log(getDiscountPrice(1000,0.10))
// console.log(getDiscountPrice(5000,0.15))

// let city = "Lahore"

// function showCity() {
//     let message = `I live in ${city}`
//     console.log(message)
// }

// showCity();
// console.log(city)
// console.log(message) // errror because message is local variable cannot access outside it's scope which is function

// const calculateTotal = (price,quantity) => price*quantity;
// const applyDiscount = (total, discount) => total-(total*discount)

// module.exports = {calculateTotal,applyDiscount}

const  Base_fare = 50;
const  Rate_per_km = 30;
const calculateRickshawFare = (km) => {

    if(typeof km !== "number" || !Number.isFinite(km)) {
        throw new Error ("Distance must be vaild number")
    }
    if(km < 0) {
        throw new Error ("Distance must be Positive ")
    }
   
    return Base_fare+(km*Rate_per_km)
}





module.exports = {calculateRickshawFare}


