// input
// starting with left and then going clockwise
function keyDownEvent(e) {
    switch (e.keyCode) {
        case 37: // left
            if (snakeDir != 39) {
                nextX = -1;
                nextY = 0;
                snakeDir = 37;
            } else {
                unableKeyEvent();
            }
            break;
        case 38: // up
            if (snakeDir != 40) {
                nextX = 0;
                nextY = -1;
                snakeDir = 38;
            } else {
                unableKeyEvent();
            }
            break;
        case 39: // right
            if (snakeDir != 37) {
                nextX = 1;
                nextY = 0;
                snakeDir = 39;
            } else {
                unableKeyEvent();
            }
            break;
        case 40: // down
            if (snakeDir != 38) {
                nextX = 0;
                nextY = 1;
                snakeDir = 40;
            } else {
                unableKeyEvent();
            }
            break;
    }
}