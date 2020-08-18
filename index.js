var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// change background color of squares
	squares[i].style.background = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			console.log("correct");
		} else{
			console.log('wrong');
		}
	});

}