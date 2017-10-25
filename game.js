
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

    todayTemps=response.list[0].temp.day;
    todayForecast=response.list[0].weather[0].main;
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

// function displayImage(placement, id, src) {
//   $(placement).append("<img id='" + id + "' src='images/" + src + "' height='100px' width='auto'>");
// }

function getDressed() {

var girlclothes = { hotWeather: ["girlDress1.png", "girlTank1.png","boyShorts1.png", "girlSkirt1.png", "girlHat1.png", "boyHat2.png"],
                    coldWeather: ["girlShirt1.png","girlShirt2.png","boyPants1.png", "boyPants2.png"],
                  colderWeather: ["girlShirt2.png", "girlShirt3.png", "boyPants1.png", "boyPants2.png", "scarf2.png"]
};

var boyclothes = { hotWeather: ["boyTshirt1.png","boyTshirt2.png","boyShorts1.png", "boyShorts2.png","boyHat1.png", "boyHat2.png"],
                   coldWeather: ["boyShirt1.png","boyTshirt2.png","boyPants1.png", "boyPants2.png"],
                 colderWeather: ["boyShirt2.png", "boyShirt3.png", "boyPants1.png", "boyPants2.png", "scarf1.png"]
};

var character = ["girl.png", "boy.png"];

var genderClothes = "girlclothes";

console.log(todayTemps);

  //build conditionals that displays the correct graphics
$("#character").append("<img id='gender' src='images/girl2.png' height='500px' width='auto'>");

if (todayTemps > 80) {
  $("#overall-results").text("It's warm! Be sure to dress lightly. Help dress me!");

    // for(var i = 0; i < girlclothes.hotWeather.length; i++) {
    //   displayImage("#tops", '#tops-' + i,girlclothes.hotWeather[i]);

      $("#tops").append("<h4 class='text-center'> Your Tops </h4>");
      $("#tops").append("<img id='top-1' src='images/" + girlclothes.hotWeather[0] + "' height='150px' width='auto'>");
      $("#tops").append("<img id='top-2' src='images/" + girlclothes.hotWeather[1] + "' height='150px' width='auto'>");
      $("#bottoms").append("<h4 class='text-center'> Your Bottoms </h4>");
      $("#bottoms").append("<img id='bottom-1' src='images/" + girlclothes.hotWeather[2] + "' height='100px' width='auto'>");
      $("#bottoms").append("<img id='bottom-2' src='images/" + girlclothes.hotWeather[3] + "' height='100px' width='auto'>");
      $("#accessories-1").append("<h4 class='text-center'> Your Accessories </h4>");
      $("#accessories-1").append("<img id='accessories-1' src='images/" + girlclothes.hotWeather[4] + "' height='50px' width='auto'>");
      $("#accessories-1").append("<img id='accessories-2' src='images/" + girlclothes.hotWeather[5] + "' height='50px' width='auto'>");
  }

else if ( todayTemps > 60 ){
  $("#overall-results").text("It may be cooler! Be sure to dress warmly. Help dress me!");

      $("#tops").append("<h4 class='text-center'> Your Tops </h4>");
      $("#tops").append("<img id='top-1' src='images/" + girlclothes.coldWeather[0] + "' height='100px' width='auto'>");
      $("#tops").append("<img id='top-2' src='images/" + girlclothes.coldWeather[1] + "' height='100px' width='auto'>");
      $("#bottoms").append("<h4 class='text-center'> Your Bottoms </h4>");
      $("#bottoms").append("<img id='bottom-1' src='images/" + girlclothes.coldWeather[2] + "' height='150px' width='auto'>");
      $("#bottoms").append("<img id='bottom-2' src='images/" + girlclothes.coldWeather[3] + "' height='150px' width='auto'>");
}
else if ( todayTemps > 30 ){
    $("#overall-results").text("It will be COLD! Be sure to dress as warm as you can. Help dress me!");

      $("#tops").append("<h4 class='text-center'> Your Tops </h4>");
      $("#tops").append("<img id='top-1' src='images/" + girlclothes.colderWeather[0] + "' height='100px' width='auto'>");
      $("#tops").append("<img id='top-2' src='images/" + girlclothes.colderWeather[1] + "' height='100px' width='auto'>");
      $("#bottoms").append("<h4 class='text-center'> Your Bottoms </h4>");
      $("#bottoms").append("<img id='bottom-1' src='images/" + girlclothes.colderWeather[2] + "' height='100px' width='auto'>");
      $("#bottoms").append("<img id='bottom-2' src='images/" + girlclothes.colderWeather[3] + "' height='100px' width='auto'>");
      $("#accessories-1").append("<h4 class='text-center'> Your Accessories </h4>");
      $("#accessories-1").append("<img id='accessories-1' src='images/" + girlclothes.colderWeather[4] + "' height='100px' width='auto'>");
}

else {
  alert("Oops");
  }
}
