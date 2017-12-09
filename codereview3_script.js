

function calculateinsurance(horsepower, age){
	var name="John Doe";
	var age=20;
	var country="Austria";
	var horsepower=150;
	var insurance=((horsepower*100)/(age+150));
	return insurance;
}
console.log(calculateinsurance());
