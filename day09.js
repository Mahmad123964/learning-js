async function getWeather(city) {
  try {
    console.log("Data aa raha hai...");
    
    // 1. Data mango
    const response = await fetch(
      `https://wttr.in/${city}?format=j1`
    );
    
    // 2. JSON mein convert karo
    const data = await response.json();
    
    // 3. Temperature nikalo
    const temp = data.current_condition[0].temp_C;
    
    console.log(`${city} ka temperature: ${temp}°C`);
    
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getWeather("Lahore");