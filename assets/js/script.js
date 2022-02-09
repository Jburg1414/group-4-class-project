var phoneNumber = document.getElementById('inputnumber').value;

// load phone numbers from local storage
    var loadNumbers = function() {
        numbers = JSON.parse(localStorage.getItem("numbers"));
    };

    var saveNumbers = function(phonenumero) {
        localStorage.setItem("numbers", phonenumero);
    };

var verifyphone=function(){
    var phonenumber=document.getElementById("inputnumber").value
fetch(`https://veriphone.p.rapidapi.com/verify?phone=${phonenumber}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "veriphone.p.rapidapi.com",
		"x-rapidapi-key": "9fbbd5f392mshabbee8212399231p112230jsne35da2362a26"
	}
})
.then(response => {
    return response.json()
}).then(response => {
	console.log(response);
    var html=` <article class="tile is-child notification is-primary">
    <p class="subtitle">Phone Number:${response.international_number}</p>
    <p class="subtitle">Local Number:${response.local_number}</p>
    <p class="subtitle">Region:${response.phone_region}</p>
    <p class="subtitle">Country:${response.country}</p>
  </article>`
  document.getElementById("information").innerHTML = html
})
.catch(err => {
	console.error(err);
});

saveNumbers(phonenumber);
}

function createDiv() {
    let div = document.createElement('div');
    div.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(div);
  }


var verifybutton=document.getElementById("btn")
verifybutton.addEventListener("click",verifyphone)

// load numbers for the first time
loadNumbers();

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=049fdcb7f6798f3b2a9c0c795a52058f