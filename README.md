# HTML, CSS, and JavaScript Weather App

A simple and responsive weather application built using HTML, CSS, and JavaScript. This project allows users to check the current weather conditions for any city around the world using data from a weather API.

## Features

- **Real-time Weather Data**: Fetches weather data from a public API, providing users with up-to-date information.
  
- **Search Functionality**: Users can search for weather information by city name.
  
- **Responsive Design**: Adapts to different screen sizes for a seamless experience on mobile, tablet, and desktop devices.
  
- **Dynamic Weather Icons**: Displays weather icons and information that match the current weather conditions.
  
- **Error Handling**: Displays user-friendly error messages if a city is not found or if there is a network issue.

## Screenshots

![Weather App Screenshot](https://github.com/onepiece-coding/html-css-and-javascript-weather-app/blob/main/screenshots/1.png)

![Weather App Screenshot](https://github.com/onepiece-coding/html-css-and-javascript-weather-app/blob/main/screenshots/2.png)

![Weather App Screenshot](https://github.com/onepiece-coding/html-css-and-javascript-weather-app/blob/main/screenshots/3.png)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
  
- A code editor like [Visual Studio Code](https://code.visualstudio.com/) if you want to edit the code.

### Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/onepiece-coding/html-css-and-javascript-weather-app.git
   
2. Navigate into the project directory:
   
   ```bash
   cd html-css-and-javascript-weather-app
   ```

3. Open the index.html file in your web browser to view the app.
   
### Usage:

1. Open the app in your browser.
   
2. Enter the name of the city in the search input field.
   
3. Click the "Search" button or press "Enter" to fetch the weather information.
   
4. The app will display the current temperature, weather conditions, humidity, and other details for the specified city.
   
### Project Structure:

   ```bash
   html-css-and-javascript-weather-app/
   │
   ├── index.html          # Main HTML file
   ├── styles.css           # Stylesheet for styling the app
   ├── scripts.js           # JavaScript file for fetching and displaying weather data
   └── README.md           # Documentation file
   ```

### Customization:

- Change the API Key: To use a different weather API or replace the existing API key, update the script.js file with your own API key.
  
- Modify Styling: Edit the style.css file to change the look and feel of the app.
  
- Add More Features: Extend the app by adding features like a 7-day forecast or integrating additional weather details.
  
### Technologies Used:

- HTML - For structuring the user interface.
  
- CSS - For styling and layout, making the app visually appealing.
  
- JavaScript - For fetching weather data from the API and updating the UI dynamically.
  
### API Information:

This weather app uses a public weather API to fetch real-time data. Ensure you sign up for an API key and replace it in the script.js file if needed.

### API Usage

1. Register at OpenWeatherMap or another weather API provider.

2. Obtain your API key.

3. Replace the placeholder in script.js:

   ```bash
   const API_KEY = 'YOUR_API_KEY';
   ```

### Contributing:

Contributions are welcome! If you have suggestions for improvements or find any issues, feel free to open an issue or submit a pull request.

#### Steps to Contribute:

1. Fork the repository.
   
2. Create a new branch (git checkout -b feature/YourFeatureName).
   
3. Commit your changes (git commit -m 'Add some feature').
   
4. Push to the branch (git push origin feature/YourFeatureName).
   
5. Open a pull request.

### Acknowledgments:

- Thanks to OpenWeatherMap for providing the weather API.
  
- Inspired by various weather app projects online.
