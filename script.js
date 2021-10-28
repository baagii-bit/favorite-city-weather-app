/*
links JS file to html
create var for the id
    get access to the input field
creat button
creat function to fetch API data

create function to fetch api data when button is clicked
    addiventlistenter

*/

var inputField = document.querySelector('#city');
var button = document.querySelector('#get-weather')



function fetchData() {
    var cityName = inputField.value
    var apiKey = 'b115aeec8696817f7e9209fc8c39c2cf'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    
    fetch(requestUrl)
        .then(function(response) {
        return response.json()
        })
        .then(function(weatherData) {
        console.log(weatherData)
        })

}


button.addEventListener('click', fetchData)