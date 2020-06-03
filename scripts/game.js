var canvas, ctx, points, errorMsg, highScore, pauseScreen, pauseText;
var pause = false;

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    points = document.getElementById("points");
    highScore = document.getElementById("highScore");
    pauseScreen = document.getElementById("pause-screen");
    pauseText = document.getElementById("pause-text");

    // set the pauseScreen div according to the canvas
    this.initializePauseScreen();

    // initial sets
    points.innerHTML += tailSize;
    highScore.innerHTML += highestScore;

    document.addEventListener("keydown", keyDownEvent);

    // render X times per second
    var x = 8;
    setInterval(draw, 1000 / x);
};

// game world
var gridSize = (tileSize = 20); // 20 x 20 = 400 and that's the size of the canvas
var nextX = (nextY = 0);
var highestScore = 0;

// snake
var defaultTailSize = 2;
var tailSize = defaultTailSize;
var snakeTrail = [];
var snakeX = (snakeY = 10);
var snakeDir = 0;

// apple
var appleX = (appleY = 15);

// draw
function draw() {
    if (!pause) {
        // unset pause screen
        pauseScreen.style.display = "none";

        // move snake in next pos
        snakeX += nextX;
        snakeY += nextY;

        // snake over game world?
        if (snakeX < 0) {
            snakeX = gridSize - 1;
        }
        if (snakeX > gridSize - 1) {
            snakeX = 0;
        }

        if (snakeY < 0) {
            snakeY = gridSize - 1;
        }
        if (snakeY > gridSize - 1) {
            snakeY = 0;
        }

        //snake bite apple?
        if (snakeX == appleX && snakeY == appleY) {
            // the old tail size is needed to properly display the counter, when the new length of the tailSize
            // has increased by one
            // without this: "Length: 99" -> "Length:100"
            // with this solution: "Length: 99" -> "Length: 100"
            oldTailSize = tailSize.toString().length;

            tailSize++;

            // imcrement length counter
            points.innerHTML = points.innerHTML.substring(0, points.innerHTML.length - oldTailSize) +
                tailSize;

            var oldAppleX = appleX;
            var oldAppleY = appleY;

            getNewAppleCoords();

            var done = true;
            while (true) {
                // reset done after every try to get proper results
                done = true;

                if (appleX == oldAppleX && appleY == oldAppleY) {
                    // if new apple coords match the old ones (same place), then get new coords
                    // and check them again
                    getNewAppleCoords();
                    done = false;
                } else {
                    for (var i = 0; i < snakeTrail.length; i++) {
                        if (snakeTrail[i].x == appleX && snakeTrail[i].y == appleY) {
                            // if x and y coordinate of any part of the snakeTrail is equal to the apples position
                            // get new appleX and appleY
                            getNewAppleCoords();

                            // set done to false, so it will loop another time to check if the new apples coordinates
                            // don't match the coordinates of any part of the snake
                            done = false;

                            // could also use break but since that worked for me, I just kept it
                            i = snakeTrail.length;
                        }
                    }
                }

                // if done is true (if the coordinates don't interfere with each other) 
                //it breaks out of the while and continues with the normal code
                if (done) {
                    break;
                }
            }
        }

        //paint background
        ctx.fillStyle = canvasFillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // paint snake
        ctx.fillStyle = "green";
        for (var i = 0; i < snakeTrail.length; i++) {
            ctx.fillRect(
                snakeTrail[i].x * tileSize,
                snakeTrail[i].y * tileSize,
                tileSize,
                tileSize
            );

            //snake bites it's tail?
            if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
                oldHighScoreSize = highestScore.toString().length;

                // set highScore if it's your new best
                if (tailSize > highestScore && snakeDir != 0) {
                    highestScore = tailSize;
                    highScore.innerHTML = highScore.innerHTML.substring(0, highScore.innerHTML.length -
                        oldHighScoreSize) + highestScore;
                }

                tailSize = defaultTailSize;

                // set length count to zero
                points.innerHTML = "Length: " + tailSize;
            }
        }

        // paint apple
        ctx.fillStyle = "red";
        ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);

        //set snake trail
        snakeTrail.push({
            x: snakeX,
            y: snakeY
        });
        while (snakeTrail.length > tailSize) {
            snakeTrail.shift();
        }
    } else {
        showPauseScreen(pause);
    }
}

function getNewAppleCoords() {
    appleX = Math.floor(Math.random() * gridSize);
    appleY = Math.floor(Math.random() * gridSize);
}