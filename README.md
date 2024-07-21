# My-Weather-App

A web application that allows users to search for current weather conditions and a 5-day forecast for any city. The application leverages the OpenWeather API to fetch weather data and displays it in a user-friendly interface.

## Link to the Application:
```bash
https://sailorvirgo.github.io/My-Weather-App/
```

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Demo
[Live Demo](#)
```bash
https://app.screencastify.com/v3/watch/cdRv8VheeAwgyiDhBiYK
```


## Features
- Search for current weather conditions by city name.
- View a 5-day weather forecast.
- Maintain search history using local storage.
- Responsive design for seamless usage across devices.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git

2. Navigate to the project directory:
   ```bash
    cd weather-dashboard


## Usage

1. Open the `index.html` file in your web browser.

2. Enter the name of a city in the search input field and click "Search".

3. View the current weather conditions and 5-day forecast for the searched city.

   
## Technologies Used

- HTML

- CSS

- JavaScript

- [OpenWeather API](https://openweathermap.org)


## API Reference

# Fetch Coordinates
 
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`

- Method: GET

- Parameters:

    * `q`: City name

    * `appid`: Your API key

# Fetch Weather

- Endpoint: `https://api.openweathermap.org/data/2.5/forecast`

- Method: `GET`

- Parameters:

    * `lat`: Latitude of the city

    * `lon`: Longitude of the city

    * `appid`: Your API key

    * `units`: Units of measurement (e.g., imperial for Fahrenheit)



## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or improvements.

1. Fork the repository

2. Create a new branch:   

    ```bash
    git checkout -b feature-name


3. Make your chages

4. Commit your chages:

    ```bash
    git commit -m 'Add some feature'

5. Push to the branch:

    ```bash
    git push origin feature-name

6. Submit a pull request
    

## License

This project is licensed under the MIT License - see the LICENSE file for details.    


# File Structure

    
    weather-dashboard
    ├── index.html
    ├── styles.css
    ├── app.js
    └── README.md

