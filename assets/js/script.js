// Potential local storage script

var phoneNumber = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
document.querySelector(".btn").addEventListener("click", () => {
    searchHistory.push(document.querySelector(".phone-number").value);
    localStorage.searchHistory = JSON.stringify(searchHistory);
});

// var phoneNumber = document.getElementById('inputnumber').value;

var verifyphone = function () {
  var phonenumber = document.getElementById("inputnumber").value;
  console.log(phonenumber);
  fetch(
    `http://apilayer.net/api/validate?access_key=aaac1f9216c8aaaa4df1f2799c00507f&number=${phonenumber}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      var html = `<article class="tile is-child notification is-primary">
    <p class="subtitle">Valid:${response.valid}</p>
    <p class="subtitle">Number:${response.number}</p>
    <p class="subtitle" id="location">Location:${response.location}</p>
    <p class="subtitle">Carrier:${response.carrier}</p>
  </article>`;
      document.getElementById("information").innerHTML = html;
    })
    .catch((err) => {
      console.error(err);
    });

  saveNumbers(phonenumber);
};

var verifybutton = document.getElementById("btn");
verifybutton.addEventListener("click", verifyphone);

function createDiv() {
//   let div = document.createElement("div");
//   div.innerText = document.getElementById("getText").innerText;
//   document.body.appendChild(div);
document.getElementById("getText").classList.remove("hidden");
}

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=049fdcb7f6798f3b2a9c0c795a52058f

// load phone numbers from local storage
// var loadNumbers = function() {
//     numbers = JSON.parse(localStorage.getItem("numbers"));
// };

var saveNumbers = function (phonenumero) {
  localStorage.setItem("numbers", phonenumero);
};

// function to get weather based on phone number location
var getWeather = function () {
  var numberLocation = $("#location").text().split(":")[1];
  console.log(numberLocation);

  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${numberLocation}&appid=8cab3bb02def5dd471eb0acffee86b41&units=imperial`;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      var date = new Date(data.dt*1000).toLocaleDateString();
      var weather = ` <div class="box column is-6">
      <h3>${date}</h3>
      <p>Current Temp: ${data.main.temp} ℉</p>
      <p>Current Wind Speed: ${data.wind.speed} MPH</p>
      <p>Current Humidity: ${data.main.humidity} %</p>
  </div>`

  document.getElementById("getText").innerHTML = weather;
    })
    .catch(function (error) {
      console.log(error);
    });
};

var weatherButton = document.getElementById("weather");
weatherButton.addEventListener("click", getWeather);
