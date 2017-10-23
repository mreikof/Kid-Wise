var lat;
var long;
getMyPosition();

function getMyPosition() {
  var positionURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyADZidgpAdDcfhioUnpZEqRqg3Z4mhPrQU";
  $.ajax({
    url: positionURL,
    method: "POST"
  }).done(function(response) {
    console.log(response);
    lat = response.location.lat;
    long = response.location.lng;
    console.log(lat);
    console.log(long);
    getAirQuality();
    getWeather();
  });
}

function getWeather() {

  var queryURL = "http://api.wunderground.com/api/3f793d9c699917ce/conditions/q/" + lat + "," + long + ".json";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    console.log(response.current_observation.UV);
    console.log(response.current_observation.temp_f);
    console.log(response.current_observation.weather);
    console.log(response.current_observation.forecast_url);
  });
}

function getAirQuality() {

  var queryURLTwo = "https://api.breezometer.com/baqi/?lat=" + lat + "&lon=" + long + "&key=fb9700086a3d410bb5256a0acc91cb88";
  $.ajax({
    url: queryURLTwo,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    console.log(response.breezometer_aqi);
    console.log(response.breezometer_description);
    console.log(response.random_recommendations.children);
    console.log(response.dominant_pollutant_text.main);
  });
}

var city = $("#input").val();
console.log(city);

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=166a433c57516f51dfab1f7edaed8413";
$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
  $("#weather").text(response.main.humidity);

});
