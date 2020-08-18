var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");

console.log(squares)

for(var i=0; i<squares.length; i++){
	// change background color of squares
	squares[i].style.background = colors[i];

	// add click listener to squares

}