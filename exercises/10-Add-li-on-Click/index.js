let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var buttonElement = document.getElementById("myList");
	var myNewLi = document.createElement("li");
	var text = document.createTextNode("Forth element");
	myNewLi.appendChild(text);
	buttonElement.appendChild(myNewLi);
});
