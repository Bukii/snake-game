// function to display the pause screen when "space" (the pause button) is pressed
function showPauseScreen(e) {
    // reload the background color of the pause screen before actually 
    // displaying it, to display the right color when the theme has changed
    pauseScreen.style.backgroundColor = getPauseColr();

    // get all position-related attributes of the canvas
    // It is important to call it everytime the pause screen is shown, in order to
    // readjust it automatically, when the viewport shrinks or increases
    var rect = canvas.getBoundingClientRect();
    pauseScreen.style.top = rect.top + "px";

    // make the pauseScreen visible
    // I use flex as a display type to better adjust the content in it
    pauseScreen.style.display = "flex";
}

function initializePauseScreen() {
    // get all position-related attributes of the canvas
    var rect = canvas.getBoundingClientRect();

    // set a few values for the screen itself
    pauseScreen.style.backgroundColor = getPauseColr();
    pauseScreen.style.position = "absolute";
    pauseScreen.style.top = rect.top + "px";
    pauseScreen.style.width = rect.width + "px";
    pauseScreen.style.height = rect.height + "px";
    pauseScreen.style.display = "none";
    pauseScreen.style.justifyContent = "center";
    pauseScreen.style.alignItems = "center";
    pauseScreen.style.opacity = 0.5;

    pauseText.style.fontSize = "40px";
}