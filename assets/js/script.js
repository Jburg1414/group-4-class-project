// Potential local storage script

var phoneNumber = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
document.querySelector(".btn").addEventListener("click", () => {
    searchHistory.push(document.querySelector(".phone-number").value);
    localStorage.searchHistory = JSON.stringify(searchHistory);
});

// var phoneNumber = document.getElementById('inputnumber').value;

// // load phone numbers from local storage
//     var loadNumbers = function() {
//         numbers = JSON.parse(localStorage.getItem("numbers"));
//     };

//     var saveNumbers = function(phonenumero) {
//         localStorage.setItem("numbers", phonenumero);
//     };

// var verifyphone=function(){
//     var phonenumber=document.getElementById("inputnumber").value
// fetch(`https://veriphone.p.rapidapi.com/verify?phone=${phonenumber}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "veriphone.p.rapidapi.com",
// 		"x-rapidapi-key": "9fbbd5f392mshabbee8212399231p112230jsne35da2362a26"
// 	}
// })
// .then(response => {
//     return response.json()
// }).then(response => {
// 	console.log(response);
//     var html=` <article class="tile is-child notification is-primary">
//     <p class="subtitle">Phone Number:${response.international_number}</p>
//     <p class="subtitle">Local Number:${response.local_number}</p>
//     <p class="subtitle">Region:${response.phone_region}</p>
//     <p class="subtitle">Country:${response.country}</p>
//   </article>`
//   document.getElementById("information").innerHTML = html
// })
// .catch(err => {
// 	console.error(err);
// });

// saveNumbers(phonenumber);
// }

var verifyphone=function(){
    var phonenumber=document.getElementById("inputnumber").value
fetch(`http://apilayer.net/api/validate?access_key=aaac1f9216c8aaaa4df1f2799c00507f&number=${phonenumber}`, {
    "method": "GET",
})
.then(response => {
    return response.json()
}).then(response => {
    console.log(response);
    var html= `<article class="tile is-child notification is-primary">
    <p class="subtitle">Valid:${response.valid}</p>
    <p class="subtitle">Number:${response.number}</p>
    <p class="subtitle">Location:${response.location}</p>
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
  }


var verifybutton=document.getElementById("btn")
verifybutton.addEventListener("click",verifyphone)

// load phone numbers from local storage
var loadNumbers = function() {
    numbers = JSON.parse(localStorage.getItem("numbers"));
};

var saveNumbers = function(phonenumero) {
    localStorage.setItem("numbers", phonenumero);
};
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=049fdcb7f6798f3b2a9c0c795a52058f