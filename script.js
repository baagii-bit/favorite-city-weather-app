/*
links JS file to html
create var for the id
    get access to the input field
creat button
creat function to fetch API data

create function to fetch api data when button is clicked
    addiventlistenter

grab all 4 elements from HTML
New function to display data into 4 html elements
convert temp to C/F


*/

var inputField = document.querySelector('#city');
var button = document.querySelector('#get-weather');
var tempEL = document.querySelector('#temp');
var cityNameEl = document.querySelector('#city-name');
var pressureEl = document.querySelector('#pressure');
var descriptionEl = document.querySelector('#description');


function fetchData() {
    var cityName = inputField.value
    var apiKey = 'b115aeec8696817f7e9209fc8c39c2cf'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    
    fetch(requestUrl)
        .then(function(response) {
        return response.json()
        })
        .then(function(weatherData) {
            console.log(weatherData);

            var highTemp = weatherData.main.temp_max;
            highTemp = highTemp -273.15;
            var lowTemp = weatherData.main.temp_min;
            lowTemp =  lowTemp -273.15;


            tempEL.textContent = "Highs of " + highTemp + " and low of " + lowTemp + ".";
            cityNameEl.textContent = weatherData.name;
            pressureEl.textContent = "High presssure of: " + weatherData.main.pressure;
            descriptionEl.textContent = weatherData.weather[0].description;
            
        });

    inputField.value = "";

}


button.addEventListener('click', fetchData)