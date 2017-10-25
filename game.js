// First day weather tracker
var show;
var lon;
var lat;

$("#today").on("click", function(event) {
  event.preventDefault();
  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";
  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text(response.list[0].temp.day + " (F)");
    $("#forecast-desc").text(response.list[0].weather[0].main + ", " + response.list[0].weather[0].description);
    $("#air-desc").text(response.list[0].humidity + "%");
    var icon = response.list[0].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $(".icon").html("<img class=icons src='" + iconUrl + "'>");
    // Added breezometer air quality api and sinked it to the response from the weather api
    var lon = response.city.coord.lon;
    var lat = response.city.coord.lat;
    console.log(lon);
    console.log(lat);
    var queryURLTwo = "https://api.breezometer.com/baqi/?lat=" + lat + "&lon=" + lon + "&key=fb9700086a3d410bb5256a0acc91cb88";
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.breezometer_aqi);
      console.log(response.random_recommendations.children);
      $("#quality").text(response.breezometer_description);
      $("#children").text(response.random_recommendations.children + ".");
    });
  });
});
// Second Day Weather Tracker
$("#tmrw").on("click", function(event) {
  event.preventDefault();
  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";
  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text(response.list[1].temp.day + " (F)");
    $("#forecast-desc").text(response.list[1].weather[0].main + ", " + response.list[1].weather[0].description);
    $("#air-desc").text(response.list[1].humidity + "%");
    var icon = response.list[1].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $(".icon").html("<img class=icons src='" + iconUrl + "'>");
    // Added breezometer air quality api and sinked it to the response from the weather api
    var lon = response.city.coord.lon;
    var lat = response.city.coord.lat;
    console.log(lon);
    console.log(lat);
    var queryURLTwo = "https://api.breezometer.com/baqi/?lat=" + lat + "&lon=" + lon + "&key=fb9700086a3d410bb5256a0acc91cb88";
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.breezometer_aqi);
      console.log(response.random_recommendations.children);
      $("#quality").text(response.breezometer_description);
      $("#children").text(response.random_recommendations.children + ".");
    });
  });
});

// Third Day Weather Tracker
$("#third").on("click", function(event) {
  event.preventDefault();

  var city = $("#pac-input").val();
  console.log(city);
  $("#city-area").text(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial" + "&cnt=3" + "&appid=166a433c57516f51dfab1f7edaed8413";
  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#location").text(response.list[2].temp.day + "(F)");
    $("#forecast-desc").text(response.list[2].weather[0].main + ", " + response.list[2].weather[0].description);
    $("#air-desc").text(response.list[2].humidity + "%");
    var icon = response.list[2].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $(".icon").html("<img class=icons src='" + iconUrl + "'>");
    // Added breezometer air quality api and sinked it to the response from the weather api
    var lon = response.city.coord.lon;
    var lat = response.city.coord.lat;
    console.log(lon);
    console.log(lat);
    var queryURLTwo = "https://api.breezometer.com/baqi/?lat=" + lat + "&lon=" + lon + "&key=fb9700086a3d410bb5256a0acc91cb88";
    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.breezometer_aqi);
      console.log(response.random_recommendations.children);
      $("#quality").text(response.breezometer_description);
      $("#children").text(response.random_recommendations.children + ".");
    });

  });
});
