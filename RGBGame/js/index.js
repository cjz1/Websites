var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//pick a "red" from 0 - 255
var baser = Math.floor(Math.random() * 256);
//pick a "green" from  0 -255
var baseg = Math.floor(Math.random() * 256);
//pick a "blue" from  0 -255
var baseb = Math.floor(Math.random() * 256);

init();

function init(){
	setupModeButtons();
	setupSquares();
    reset();
	randomColorBase();
	randomColor();
}

function setupModeButtons(){
	randomColorBase();
	randomColor();
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	randomColorBase();
	randomColor();
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#c5c5c5";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	randomColorBase();
	randomColor();
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "rgb(70, 149, 180)";
}

resetButton.addEventListener("click", function(){
	location.reload();
	randomColorBase();
	randomColor();
	reset();
})

function changeColors(color){
	randomColorBase();
	randomColor();
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	randomColorBase();
	randomColor();
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	randomColorBase();
	randomColor();
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColorBase(){
    //pick a "red" from 0 - 255
    var baser = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var baseg = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
	var baseb = Math.floor(Math.random() * 256);
	
	return "rgb(" + baser + ", " + baseg + ", " + baseb + ")";
}

function randomColor(){
	randomColorBase();
    //pick a "red" from 0 - 255
	var addr = Math.floor(Math.random() * 15);
	//pick a "green" from  0 -255
	var addg = Math.floor(Math.random() * 15);
	//pick a "blue" from  0 -255
    var addb = Math.floor(Math.random() * 15);
    
    var r = baser+addr
    var g = baseg+addg
    var b = baseb+addb

	return "rgb(" + r + ", " + g + ", " + b + ")";
}