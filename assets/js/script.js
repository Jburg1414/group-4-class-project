var phoneNumber = document.getElementById('inputnumber').value;

var verifyphone=function(){
    var phonenumber=document.getElementById("inputnumber").value
fetch(`http://apilayer.net/api/validate?access_key=aaac1f9216c8aaaa4df1f2799c00507f&number=${phonenumber}`, {
    "method": "GET",
})
.then(response => {
    return response.json()
}).then(response => {
    console.log(response);
    var html= `<article class="title is-child notification is-primary">
    <p class="subtitle">Valid:${response.valid}</p>
    <p class="subtitle">Number:${response.number}</p>
    <p class="subtitle" id="location">Location:${response.location}</p>
    <p class="subtitle">Carrier:${response.carrier}</p>
  </article>`
  document.getElementById("information").innerHTML = html
})
.catch(err => {
    console.error(err);
});

saveNumbers(phonenumber);
}

var verifybutton=document.getElementById("btn")
verifybutton.addEventListener("click",verifyphone)

function createDiv() {
    let div = document.createElement('div');
    div.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(div);
  };

// load numbers for the first time
// loadNumbers();

// load phone numbers from local storage
// var loadNumbers = function() {
//     numbers = JSON.parse(localStorage.getItem("numbers"));
// };

var saveNumbers = function(phonenumero) {
    localStorage.setItem("numbers", phonenumero);
};

// function to get weather based on phone number location
var getWeather = function() {

    var numberLocation = $("#location")
    console.log(numberLocation);

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${numberLocation}&appid=8cab3bb02def5dd471eb0acffee86b41&units=imperial`;
    
    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
            return response.json();
        };
    }) .then(function(data) {
        console.log(data);
    }) .catch(function(error) {
        console.log(error);
    })
};

var weatherButton = document.getElementById("weather");
weatherButton.addEventListener("click", getWeather);
