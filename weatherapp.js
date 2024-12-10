const apiKey = '5b2a4c5ad43f8097bc4d6e521cf1fd35'; // Add your OpenWeatherMap API key here
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Base URL for OpenWeatherMap

let inputVar = document.getElementById('input-city'); // Input field for city name
let buttonVar = document.getElementById('btn-get-weather'); // Button to trigger weather fetch
let resultVar = document.getElementById('weather-result'); // Div to display the weather result

// Add an event listener to the button
buttonVar.addEventListener('click', async () => {
  const cityName = inputVar.value.trim(); // Get the city name from the input field

  if (!cityName) {
    alert('Please enter a city name');
    return; // Stop execution if no city name is entered
  }

  try {
    // Fetch weather data from the API
    const response = await fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message); // Use the error message from the API
    }

    // Call the function to display weather data
    displayWeatherData(data);
    inputVar.value='';
    
  } catch (error) {
    // Handle any errors and display an error message
    resultVar.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});

// Function to display weather data in the DOM
const displayWeatherData = (data) => {
  resultVar.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
  inputVar.innerHTML='';
};
