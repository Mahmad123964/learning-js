function getWeather(city){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(city ===""){
                reject("City name is required ")
            } else {
                resolve ({
                    city: city,
                    temp:18,
                    condition: "Rainy"
                });
            }
        },2000);
    });
}

async function showWeather(){
    console.log("Weather fetch ho raha hai...")

    try {
        const weather = await getWeather("Lahore")
        console.log(`City: ${weather.city}`);
        console.log(`Temperature: ${weather.temp}°C`);
        console.log(`Condition: ${weather.condition}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
    
}

showWeather();