//Declare global variables here
var todayTemps;
var todayForecast;

// First day weather tracker

$("#today").on("click", function(event) {
  event.preventDefault();

  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  $("#location").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text("Temperature: " + response.list[0].temp.day + " (F)");
    $("#forecast-desc").text("Forecast: " + response.list[0].weather[0].main + ", " + response.list[0].weather[0].description);
    $("#air-desc").text("Humidity: " + response.list[0].humidity + "%");

    todayTemps = response.list[0].temp.day;
    todayForecast = response.list[0].weather[0].main;

    getDressed();

  });
});
// Second Day Weather Tracker
$("#tmrw").on("click", function(event) {
  event.preventDefault();

  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  $("#location").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text("Temperature: " + response.list[1].temp.day + " (F)");
    $("#forecast-desc").text("Forecast: " + response.list[1].weather[0].main + ", " + response.list[1].weather[0].description);
    $("#air-desc").text("Humidity: " + response.list[1].humidity + "%");

  });
});

// Third Day Weather Tracker
$("#third").on("click", function(event) {
  event.preventDefault();

  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  $("#location").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text("Temperature: " + response.list[2].temp.day + " (F)");
    $("#forecast-desc").text("Forecast: " + response.list[2].weather[0].main + ", " + response.list[2].weather[0].description);
    $("#air-desc").text("Humidity: " + response.list[2].humidity + "%");

  });

});

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

function displayImage(placement, id, src) {
  $(placement).append("<img id='" + id + "' src='images/" + src + "' height='100px' width='auto'>");
}

function getDressed() {

  var girlclothes = {
    hotWeather: ["girlDress1.png", "girlTank1.png", "boyShorts1.png", "girlSkirt1.png", "girlHat1.png", "boyHat2.png"],
    hotWeatherCat: ["#tops", "#tops", "#bottoms", "#bottoms", "#accessories-1", "#accessories-1"],
    coldWeather: ["girlShirt1.png", "girlShirt2.png", "boyPants1.png", "boyPants2.png", "boyHat2.png"],
    coldWeatherCat: ["#tops", "#tops", "#bottoms", "#bottoms", "#accessories-1"],
    colderWeather: ["girlShirt2.png", "girlShirt3.png", "boyPants1.png", "boyPants2.png", "scarf2.png"],
    colderWeatherCat: ["#tops", "#tops", "#bottoms", "#bottoms", "#accessories-1"]
  };

  var boyclothes = {
    hotWeather: ["boyTshirt1.png", "boyTshirt2.png", "boyShorts1.png", "boyShorts2.png", "boyHat1.png", "boyHat2.png"],
    coldWeather: ["boyShirt1.png", "boyTshirt2.png", "boyPants1.png", "boyPants2.png"],
    colderWeather: ["boyShirt2.png", "boyShirt3.png", "boyPants1.png", "boyPants2.png", "scarf1.png"]
  };

  var character = ["girl.png", "boy.png"];
  var genderClothes = "girlclothes";

  console.log(todayTemps);

  //build conditionals that displays the correct graphics
  $("#character").append("<img id='gender' src='images/girl2.png' height='500px' width='auto'>");

  for (var i = 0; i < girlclothes.hotWeather.length; i++) {
    if (todayTemps > 80) {
      $("#overall-results").text("It's warm! Be sure to dress lightly. Help dress me!");
      displayImage(girlclothes.hotWeatherCat[i], girlclothes.hotWeatherCat[i] + "-" + i, girlclothes.hotWeather[i]);
    } else if (todayTemps > 60) {
      $("#overall-results").text("It may be cooler! Be sure to dress warmly. Help dress me!");
      displayImage(girlclothes.coldWeatherCat[i], girlclothes.coldWeatherCat[i] + "-" + i, girlclothes.coldWeather[i]);
    } else if (todayTemps > 30) {
      $("#overall-results").text("It will be COLD! Be sure to dress as warm as you can. Help dress me!");
      displayImage(girlclothes.colderWeatherCat[i], girlclothes.colderWeatherCat[i] + "-" + i, girlclothes.colderWeather[i]);
    } else {
      alert("Oops");
    }
  }
}
// Function to clear out the right side panel - the clothes choices - should the user want to try a different location
function getClear() {
  $("#tops-0").html(" ");
  $("#tops-1").html(" ");
  $("#bottoms-2").html(" ");
  $("#bottoms-3").html(" ");
  $("#accessories-1-4").html(" ");
  $("#accessories-1-5").html(" ");
}
