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
})
.catch(err => {
	console.error(err);
});
}
var verifybutton=document.getElementById("btn")
verifybutton.addEventListener("click",verifyphone)