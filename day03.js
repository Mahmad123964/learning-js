// let age = 18;
// let price = 100;

// console.log(age == 18)
// console.log(age === 18)
// console.log(age == "18")
// console.log(age === "18")

// console.log(price > 50)
// console.log(price < 50)
// console.log(price >= 50)
// console.log(price !== 50)

// let userAge = 25;
// let hasExperiencec = true;
// let isStudent = false;
// let isFreelance = true;

// console.log(userAge >= 22 && hasExperiencec )
// console.log(userAge >= 22 && isStudent )
// console.log( isStudent || isFreelance )
// console.log( isStudent || false )

// console.log(!isStudent);                     // true
// console.log(!hasExperiencec);  

// let orderAmount = 1500;

// if(orderAmount > 2000) {
//     console.log("Free delivery")
// } else if(orderAmount > 1000) {
//      console.log("Delivery: 100 rupees")
// } else {
//      console.log("Delivery: 200 rupees")
// }

// let temperature  = 35;

// if(temperature > 40) {
//     console.log("Bohot garmi hai! Ghar raho 🥵")
// } else if(temperature > 30) {
//      console.log("Garmi hai, pani piyo 💧")
// }else if(temperature > 20) {
//      console.log("Mausam theek hai 😊")
// }else if(temperature > 10) {
//      console.log("Thandi hai, jacket pehno 🧥")
// }else {
//      console.log("Bohot sardi hai! ❄️")
// }

let orderAmount = 1500;

function getDeliveryFee(orderAmount) {
  if(orderAmount > 2000) {
        return 0;
  }else if(orderAmount > 1000) {
     return 100;
   
  }else {
    return 200;
  }

}

module.exports = {getDeliveryFee};

