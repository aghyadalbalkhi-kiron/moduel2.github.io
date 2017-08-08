
var 
	
	userInput = document.getElementById("input"),
	showResult = document.getElementById("result"),
	userSelect = document.getElementById("userchoice");
	
userSelect.onchange = function() {
	
	"use strict";
	showResult.innerHTML = userInput.value * userSelect.value;
	
};


var readPrompt = prompt("Choice From 1 to 3");
    

	
switch (readPrompt) {
    case "1":
       document.write("<p>Good luck </p>");
        break;
    case "3":
        document.write("<p>try to be Best</p>");
        break;
    case "2":
        document.write("<p>Dont give Up</p>");
        break;
   
}

	


