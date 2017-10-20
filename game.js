$("#submit").on("click", function(event) {
  event.preventDefault();

  var city = $("#input").val();
  console.log(city);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $("#weather").text(response.main.humidity);

});
});
