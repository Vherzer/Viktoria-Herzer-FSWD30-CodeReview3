

function calculateinsurance(){
	var name="John Doe";
	var age=20;

	var country="Austria";
	var horsepower=150;
	var insurance=Math.round((horsepower*100)/(age+150));
	document.getElementById("result").innerHTML = insurance + "€";
}
console.log(document.getElementById('age').value);
