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

  });
});
// Second Day
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
// Third Day
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
