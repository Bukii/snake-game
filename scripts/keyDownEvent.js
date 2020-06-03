// input
// starting with left and then going clockwise
function keyDownEvent(e) {
    switch (e.keyCode) {
        case 32: // space for pause
            // this is the simplified version of if else to switch the boolean state of "pause"
            pause = !pause;
            break;
        case 37: // left
            // 39: When the current direction is this number, a error message will be shown
            // -1: The snake will move one tile to the left (x-coordinate)
            // 0: The snake will stay on the same level on the y-axis
            // 37: The pressed keyCode (stands for "left") - To define the new direction
            checkIfValid(39, -1, 0, 37);
            break;
        case 38: // up
            checkIfValid(40, 0, -1, 38);
            break;
        case 39: // right
            checkIfValid(37, 1, 0, 39);
            break;
        case 40: // down
            checkIfValid(38, 0, 1, 40);
            break;
    }
}

// function to check validation, so there's no duplicate code
function checkIfValid(wrongDir, x, y, newDir) {
    if (!pause) {
        if (snakeDir != wrongDir) {
            nextX = x;
            nextY = y;
            snakeDir = newDir;
        } else {
            unableKeyEvent();
        }
    }
}