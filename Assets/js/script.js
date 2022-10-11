var ApiKey="fb63e6c2bdd7b63a68498ad2e6e8dcb8";
var city="New york";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey;
var queryUrlFive="http://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&appid=" + ApiKey;
console.log(queryUrlFive);
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      document.getElementById("city-temp").textContent=data.main.temp;
      document.getElementById("city-wind").textContent=data.wind.speed;
      document.getElementById("city-humidity").textContent=data.main.humidity;

  });


  fetch(queryUrlFive)
  .then(function (response) {
    return response.json();
  })
  .then(function (dataSet) {
    for (var i = 1; i <=5; i++) {
     document.getElementById("temp"+i).textContent=dataSet.list[i].main.temp;
     document.getElementById("wind"+i).textContent=dataSet.list[i].main.temp;
     document.getElementById("humidity"+i).textContent=dataSet.list[i].main.temp;
     //console.log(dataSet.list[i].main.temp);dataSet.cnt
    }
  });
