//variables
var ApiKey="fb63e6c2bdd7b63a68498ad2e6e8dcb8";
var city;
var previous;
var latitude;
var longitude;
var queryURL;
var queryUrlFive;
var searchBtn=document.getElementById("searchBtn");


//to get the previous search history
previous=localStorage.getItem("City");
var previousSearch=document.getElementById("previous-search");
previousSearch.textContent=previous;
// var btnList = $('<p>');
// btnList.textContent=previous;
// previousSearch.appendChild(btnList);


//to get city name from user  
searchBtn.addEventListener("click", function(){
     city=document.getElementById("search").value;

     //to store the search city name to local storage
     localStorage.setItem("City",city);
     queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + ApiKey;

     //to get data for a particular city
     fetch(queryURL)
     .then(function (response) {
     return response.json();
     })
     .then(function (data) {
          document.getElementById("city-temp").textContent=data.main.temp+" F";
          document.getElementById("city-wind").textContent=data.wind.speed+" MPH";
          document.getElementById("city-humidity").textContent=data.main.humidity+" %";
          latitude=data.coord.lat;
          longitude=data.coord.lon;


          //to get data for 5 days for that particular city
          queryUrlFive="http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + ApiKey;
          console.log(queryUrlFive);
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
               document.getElementById("temp"+c).textContent=dataSet.list[i].main.temp+" F";
               document.getElementById("wind"+c).textContent=dataSet.list[i].wind.speed+" MPH";
               document.getElementById("humidity"+c).textContent=dataSet.list[i].main.humidity+" %";
               c++;
          }
     });
     });
});


     