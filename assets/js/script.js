var verifyphone = function () {
  var phonenumber = document.getElementById("inputnumber").value;
  console.log(phonenumber);
  fetch(
    `https://apilayer.net/api/validate?access_key=aaac1f9216c8aaaa4df1f2799c00507f&number=${phonenumber}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      var html = `<article class="box is-child notification ">
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

    var saveNumbers = JSON.parse(localStorage.getItem("saveNumbers")) ?? [];
    saveNumbers.push(phonenumber);
    localStorage.setItem("saveNumbers", JSON.stringify(saveNumbers));
    console.log(localStorage);

    var numbersHistory = document.getElementById("getNumber");
    numbersHistory.innerHTML = "";
    var numberList = document.createElement("ul");
    for (var i = 0; i < saveNumbers.length; i++) {
        var phoneHistory = document.createElement("li");
        phoneHistory.classList = "button is-outlined is-link is-small is-clickable is-rounded is-inline-block";
        phoneHistory.onclick = searchPhone;
        phoneHistory.appendChild(document.createTextNode(saveNumbers[i]));
        numberList.appendChild(phoneHistory);
        numbersHistory.appendChild(numberList);
    }
};


function searchPhone() {
  $("input").focus();
    console.log(this);
}

var verifybutton = document.getElementById("btn");
verifybutton.addEventListener("click", verifyphone);

function createDiv() {
    document.getElementById("getText").classList.remove("hidden");
}

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
        var weather = `<div class="box column is-6">
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
