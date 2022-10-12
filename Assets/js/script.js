var ApiKey="fb63e6c2bdd7b63a68498ad2e6e8dcb8";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey;
var queryUrlFive="http://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&appid=" + ApiKey;
var searchBtn=document.getElementById("searchBtn");
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
     var c=1;
    for (var i = 1; i <=dataSet.cnt; i+=9) {
     var date=(dataSet.list[i].dt_txt).split(" ");
     document.getElementById("date"+c).textContent=date[0];
     document.getElementById("icon"+c).textContent=dataSet.list[i].weather.description;
     document.getElementById("temp"+c).textContent=dataSet.list[i].main.temp;
     document.getElementById("wind"+c).textContent=dataSet.list[i].main.temp;
     document.getElementById("humidity"+c).textContent=dataSet.list[i].main.temp;
     c++;
    }
  });
searchBtn.addEventListener("click", function(){
     //alert("testing");
     city=document.getElementById("search").value;
          alert(city);
});