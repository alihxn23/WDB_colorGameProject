var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// change background color of squares
	squares[i].style.background = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
		} else{
			messageDisplay.textContent = "Try again";
			this.style.background = "#232323"
		}
	});

}

var changeColor = (color) => {
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
	h1.style.background = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * squares.length) 
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return `rgb(${red}, ${green}, ${blue})`;
}