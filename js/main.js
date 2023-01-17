var licence=prompt("licence id true or false");
var age=parseInt(prompt("Enter your age"));
var qulifiction=(prompt("Enter your Qulification"));

if(age>18 && qulifiction>10){
	if(licence=="true"){
		document.write("elgible for licence")
	}
	else{
		document.write("eligible for licence failed in test")
	}
}
else{
	document.write("not eligible for licence")
}