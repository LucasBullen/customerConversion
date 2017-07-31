function calculate() {
	var walkers = parseInt(document.getElementById("walk-bys-input").value);
	var probability = parseInt(document.getElementById("conversion-probability-input").value);
	var profit = parseFloat(document.getElementById("profit-input").value);

	if(isNaN(walkers)|| isNaN(probability) || isNaN(profit)){
		document.getElementById("error-text").innerHTML = "Ensure all fields are filled correctly";
		document.getElementById("result-text").innerHTML = "";
	}else{
		document.getElementById("error-text").innerHTML = "";
		var result = walkers * (probability / 100) * profit;
		document.getElementById("result-text").innerHTML = "$" + result + " Profit";
	}
}