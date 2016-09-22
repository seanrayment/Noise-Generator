//CAN ONLY BE RUN ONCE PER REFRESH//
var hasRun = false


var board = document.getElementById('board')
var boardWidth = board.width //450px
var boardHeight = board.height //450px
var gridWidth = 0

var redChecked = false
var greenChecked = false
var blueChecked = false

var ctx = board.getContext("2d")

//button onclick runs this function
var run = function() {

	redChecked = document.getElementById('red').checked
	greenChecked = document.getElementById('green').checked
	blueChecked = document.getElementById('blue').checked

	gridWidth = parseInt(document.getElementById('pixelWidth').value,10)

	if (!hasRun) {
		setInterval(generate, 100)
		hasRun = true
	}
}

var randomRGB = function(color) {
	var RGB = [Math.floor(Math.random() * 255) + 1,
			   Math.floor(Math.random() * 255) + 1,
			   Math.floor(Math.random() * 255) + 1]
	switch (color) {
		case "red":
			if (!redChecked) {
				RGB[0] = 0
			}
		case "green":
			if (!greenChecked) {
				RGB[1] = 0
			}
		case "blue":
			if (!blueChecked) {
				RGB[2] = 0
			}
		default:
	}

	return RGB
			   
	//return Math.floor(Math.random() * 255) + 1
}

var generate = function() {

	ctx.clearRect(0, 0, boardWidth, boardHeight)

	for (i = 0; i < boardWidth; i += gridWidth) {

		ctx.beginPath()
		ctx.moveTo(i,0)
		ctx.lineTo(i,boardHeight)
		ctx.stroke()
		console.log(gridWidth)
	}

	for (i = 0; i < boardHeight; i += gridWidth) {

		ctx.beginPath()
		ctx.moveTo(0,i)
		ctx.lineTo(boardWidth,i)
		ctx.stroke()
	}

	for (i = 0; i < boardWidth; i += gridWidth) {
		for (z = 0; z < boardHeight; z += gridWidth) {
			if ((Math.floor(Math.random() * 2) + 1) == 1) {
				ctx.fillStyle = "rgb("
								+randomRGB('red')[0]
								+ ","
								+randomRGB('green')[1]
								+","
								+randomRGB('blue')[2]
								+")"
				
				ctx.fillRect(i,z,gridWidth,gridWidth)
			}
			
		}
	}
	
	console.log("clicked!")
}

