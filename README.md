# React Weather Application

![WeatherISgood](https://github.com/therealdope/Weather_Website/blob/main/src/assets/Weather_Website.png)

---

## Overview
This is a React-based weather application that provides the following features:

- A **Navigation Bar** displaying links and options.
- A **Header Component** with a search functionality to set and display Weather of selected city.
- Integration with the **OpenWeatherMap API** to fetch and display weather data for multiple cities.
- A **dashboard** shows weather and time of selected city and other predefined cities.

---

## Features

#### NavBar Component
- Displays links such as Home, Blogs, Map, Photos, Videos, and Phone.
- Includes an option to Log out.
- Utilizes **Ionicons** for intuitive icons next to each link.

#### Header Component
- Displays the selected city (or a default message if no city is selected).
- Includes an input field to search for a city.
- Allows the user to press `Enter` to search and set a new city.
- Displays additional icons such as Weather, Calendar, and Notifications.

#### Weather Data Fetching
- **Axios** is used to fetch data from the OpenWeatherMap API.
- Fetches temperature, high, low, and weather descriptions for multiple cities.
- Handles API errors, including invalid API keys and non-existent cities.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/therealdope/Weather_Website
   ```
2. Navigate to the project directory:
   ```bash
   cd Weather_Website
   ```
3. Install dependencies (select -> react + java script):
   ```bash
   npm create vite
   ```
4. Install additional dependencies (for api):
    ```bash
    npm install axios
    ```
5. Genetare API_KEY on `https://openweathermap.org/` and insert it in `api.jsx` file.
---

## Usage

1. Start the application:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173/`.
4. Search for a city in the Header Component to view weather data.

---

## Project Structure
```
Directory structure:
└── therealdope-Weather_Website/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── API/
        │   └── api.jsx
        ├── assets/
        └── components/
            ├── Dashboard/
            │   ├── Dashboard.css
            │   └── Dashboard.jsx
            ├── Header/
            │   ├── Header.css
            │   └── Header.jsx
            └── NavBar/
                ├── NavBar.css
                └── NavBar.jsx

```

---

## Dependencies

- **vite**: Java script tool to create web-Application.
- **Axios**: For API requests.
- **Ionicons**: For icons.

---

## Future Improvements

1. Add more features to the weather data, such as wind speed and humidity.
2. Implement user authentication for personalized experiences.
3. Improve styling and responsiveness.
4. Usage of Navigation Bar Dynamically.
