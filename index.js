var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	numSquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick a random color
	pickedColor = pickColor();
	// update colorDisplay
	colorDisplay.textContent = pickedColor;
	// update colors of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	// reset the color of h1
	h1.style.background = "steelblue";
	// update messageDisplay
	messageDisplay.textContent = "";
	// update resetButton 
	resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// change background color of squares
	squares[i].style.background = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
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
	var random = Math.floor(Math.random() * colors.length) 
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