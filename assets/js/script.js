var veriphoneKey = "1509DD13CE574F1CB5E4DBF14C7019B3";
var openweatherKey = "8cab3bb02def5dd471eb0acffee86b41";
var phoneInputEl = document.querySelector(".phone-number");
var submitBtnEl = document.querySelector("#btn");
var number = Number(phoneInputEl);

function getNumberInfo (number) {
 return fetch(
     `https://api.veriphone.io/v2/verify?phone=${number}&key=${veriphoneKey}`)
        .then(function(response) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
            });
        });

};

var getWeather = function() {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

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
