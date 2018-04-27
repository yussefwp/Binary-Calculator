// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

// 

var number = "";//Final value.
var firstValue = "";//First binary value.
var binaryArray = []; //An array to hold the expression.
var secondValue = "";//Second binary value.
var memoryValue = ""; //Value in the memory.
var Calc = {

//Assigning multiple buttons to different keys to the major key (View).
View : {
  textRow : {id: "textRow", type: "text", value: ""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttonNot : {id: "buttonNot", type: "button", value: "~", onclick:""},
  buttonPlus : {id: "plus", type: "button", value: "+", onclick:""},
  buttonMod : {id: "mod", type: "button", value: "%", onclick:""},
  buttonLeftShift : {id: "lShift", type: "button", value: "<<", onclick:""},
  buttonRightShift : {id: "rShift", type: "button", value: ">>", onclick:""},
  buttonMinus : {id: "minus", type: "button", value: "-", onclick:""},
  buttonAnd : {id: "and", type: "button", value: "&", onclick:""},
  buttonOr : {id: "or", type: "button", value: "|", onclick:""},
  buttonMultiply : {id: "multiply", type: "button", value: "*", onclick:""},
  buttonDivision : {id: "division", type: "button", value: "/", onclick:""},
  buttonMR : {id: "MR", type: "button", value: "MR", onclick:""},
  buttonM_MINUS : {id: "mMinus", type: "button", value: "M-", onclick:""},
  buttonM_Plus : {id: "mPlus", type: "button", value: "M+", onclick:""},
  buttonClear : {id: "clear", type: "button", value: "C", onclick:""},
  buttonM_Clear : {id: "mClear", type: "button", value: "MC", onclick:""},
  buttonEqual : {id: "equal", type: "button", value: "=", onclick:""}

},

//The function that runs the whole project.
run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},

//Adding the elements of the element to a string to pass is
displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

//Displaying the buttions
display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonNot);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonPlus);
  s += Calc.displayElement(Calc.View.buttonMod);
  s += Calc.displayElement(Calc.View.buttonLeftShift);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonRightShift);
  s += Calc.displayElement(Calc.View.buttonMinus);
  s += Calc.displayElement(Calc.View.buttonAnd);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonOr);
  s += Calc.displayElement(Calc.View.buttonMultiply);
  s += Calc.displayElement(Calc.View.buttonDivision);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonM_MINUS);
  s += Calc.displayElement(Calc.View.buttonM_Plus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonClear);
  s += Calc.displayElement(Calc.View.buttonM_Clear);
  s += Calc.displayElement(Calc.View.buttonEqual);
  s += "</tr></td></table>";
  return s;
},

//Running the onClick property of each button.
attachHandlers : function() {
  Calc.View.button1.onclick = "Calc.button1Handler()"; 
  Calc.View.button0.onclick = "Calc.button0Handler()"; 
  Calc.View.buttonClear.onclick = "Calc.buttonClearHandler()";
  Calc.View.buttonPlus.onclick = "Calc.buttonPlusHandler()";
  Calc.View.buttonEqual.onclick = "Calc.buttonEqualHandler()";
  Calc.View.buttonMinus.onclick = "Calc.buttonMinusHandler()";
  Calc.View.buttonMultiply.onclick = "Calc.buttonMultiplyHandler()";
  Calc.View.buttonMod.onclick = "Calc.buttonModHandler()";
  Calc.View.buttonLeftShift.onclick = "Calc.buttonLeftShiftHandler()";
  Calc.View.buttonRightShift.onclick = "Calc.buttonRightShiftHandler()";
  Calc.View.buttonAnd.onclick = "Calc.buttonAndHandler()";
  Calc.View.buttonOr.onclick = "Calc.buttonOrHandler()";
  Calc.View.buttonMR.onclick = "Calc.buttonMRHandler()";
  Calc.View.buttonM_Plus.onclick = "Calc.buttonM_PlusHandler()";
  Calc.View.buttonM_MINUS.onclick = "Calc.buttonM_minusHandler()";
  Calc.View.buttonM_Clear.onclick = "Calc.buttonM_clearHandler()";
},

//Convert from Decimal to Binary function
decimalToBinary : function(number){
	var finalValue = "";
	var numbersSwitched = [];
	var binaryNumber = [];
	var index = 0;
	
	while(number > 0 ){
		binaryNumber[index] = number%2;
		++index;
	if(number%2 == 1){
		number -= 1;
		number /= 2;
	}else{
	number /= 2;
	}
}
	
	var length = binaryNumber.length;
	var lastIndex = binaryNumber.length;
	for(j = 0; j < length+1; j++){
		numbersSwitched[j] = binaryNumber[lastIndex];
		lastIndex--;
	}
	
	var valueString = numbersSwitched.toString();
	var split = valueString.split(",");

	for(i = 0; i < length+1; ++i){
		finalValue += split[i];
	}
	return finalValue;
},

//Handler for button 1.
button1Handler : function() {
	number += "1";
	document.getElementById("textRow").value = number;
},

//Handler for button 0.
button0Handler : function(){
	number += "0";
	document.getElementById("textRow").value = number;
},

//Handler for clearing.
buttonClearHandler : function(){
	number = "";
	document.getElementById("textRow").value = number;
},

//Handler for addition.
buttonPlusHandler : function(){
	number += "+";
	document.getElementById("textRow").value = number;
},
//Handler for subtraction.
buttonMinusHandler : function(){
	number += "-";
	document.getElementById("textRow").value = number;
},

//Handler for multiplication
buttonMultiplyHandler : function(){
	number += "*";
	document.getElementById("textRow").value = number;
},

//Handler for mod (remainder)
buttonModHandler : function(){
	number += "%";
	document.getElementById("textRow").value = number;
},

//Handler for <<
buttonLeftShiftHandler : function() {
	
	number += "<<";
	document.getElementById("textRow").value = number;
	
},

//Handler for >>
buttonRightShiftHandler : function(){
	number += ">>";
	document.getElementById("textRow").value = number;
},

//Handler for & (and)
buttonAndHandler : function(){
	number += "&";
	document.getElementById("textRow").value = number;
},

//Handler for | (or)
buttonOrHandler : function(){
	number += "|";
	document.getElementById("textRow").value = number;
},

//Handler for MR
buttonMRHandler : function(){
	document.getElementById("textRow").value = Calc.decimalToBinary(memoryValue);
	console.log("The memory value saved is : " + Calc.decimalToBinary(memoryValue));
},

//Handler for M+
buttonM_PlusHandler : function(){
	memoryValue = number;
	console.log("The memory value is : " + Calc.decimalToBinary(memoryValue));
},

//Handler for M-
buttonM_minusHandler : function(){
	document.getElementById("textRow").value = memoryValue - number;
	console.log("The memory value minus the current number is : " + Calc.decimalToBinary(memoryValue - number));	
},

//Handler for MC
buttonM_clearHandler : function(){
	memoryValue = "";
	console.log("The current memory value is : " + Calc.decimalToBinary(memoryValue));
},

//Handler fo the equal button.
buttonEqualHandler : function(){
	if(number.includes("+")){//If the operation is addition.
		var split = number.split('+');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal + secondToDecimal;//Add the first and the second number together.
		document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the addition value in binary form.
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the Addition operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
		
	}else if(number.includes("-")){//If the operation is subtraction.
		var split = number.split('-');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		
		//Check which numbe id greater the subtract.
		if(firstToDecimal > secondToDecimal){
			number = firstToDecimal - secondToDecimal;
			document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the subtraction value in binary form.
			
			//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the subtraction operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
		
		}else{
			number = secondToDecimal - firstToDecimal;
					document.getElementById("textRow").value = "-" + Calc.decimalToBinary(number);//Return the subtraction value in binary form.
					
					//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the subtraction operation between " + firstValue + " and " + secondValue + " is: -" + Calc.decimalToBinary(number) + " which is: -" + number + " in decimal");
		
		}
	}else if(number.includes("*")){
		var split = number.split('*');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal * secondToDecimal;//Multiply the values together;
		document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the multiplication operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	}
	else if(number.includes("%")){
		var split = number.split('%');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal % secondToDecimal;//Multiply the values together;
		document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the Mod (Remainder) operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	
	}else if(number.includes("<<")){
		var split = number.split('<<');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal
		number = firstToDecimal << secondToDecimal;//shift left the value.
		document.getElementById("textRow").value = Calc.decimalToBinary(number);;//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal);
		console.log("The value of the << operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	
	}else if(number.includes(">>")){
		var split = number.split('>>');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal >> secondToDecimal;//shift right the value
		document.getElementById("textRow").value = Calc.decimalToBinary(number);;//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal);
		console.log("The value of the >> operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	}
	
	else if(number.includes("&")){
		var split = number.split('&');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal & secondToDecimal;//AND the values together;
		document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the & operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	}
	
	else if(number.includes("|")){
		var split = number.split('|');
		firstValue = split[0];
		secondValue = split[1];
		var firstToDecimal = parseInt(firstValue,2);//convert the first number to binary.
		var secondToDecimal = parseInt(secondValue,2);//Convert the second number to decimal.
		number = firstToDecimal | secondToDecimal;//OR the values together;
		document.getElementById("textRow").value = Calc.decimalToBinary(number);//Return the addition value in binary form.
		
		
		//Just for double checking
		console.log("The first value is: " + firstValue + " which is: " + firstToDecimal + " in decimal.");
		console.log("The second value is: " + secondValue + " which is: " + secondToDecimal + " in decimal.");
		console.log("The value of the | operation between " + firstValue + " and " + secondValue + " is: " + Calc.decimalToBinary(number) + " which is: " + number + " in decimal");
	}
},


addition : function(first, second) {
	document.getElementById("textRow").value = first + second;
	
},


} // end of Calc;
