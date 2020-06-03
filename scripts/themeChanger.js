var themeButton = document.getElementById("brightness");
var span = document.getElementsByTagName("span");
themeButton.addEventListener("click", clickHandler);

function clickHandler() {
    if (themeButton.innerHTML.split(" ")[0] == "Light") {
        // current state: LIGHT mode
        // change displayed text
        themeButton.innerHTML = "Dark Theme";

        // change the site according to theme
        document.body.style.backgroundColor = lightBGColr;
        document.body.style.color = "black";
        for (var i = 0; i < span.length; i++) {
            span[i].style.color = lightPrimaryColr;
        }

        // adjust the fillStyle the grid should be colored
        canvasFillStyle = "black";
    } else {
        // current state: DARK mode
        // change displayed text
        themeButton.innerHTML = "Light Theme";

        // change the site according to theme
        document.body.style.backgroundColor = darkBGColr;
        document.body.style.color = "white";
        for (var i = 0; i < span.length; i++) {
            span[i].style.color = darkPrimaryColr;
        }

        // adjust the fillStyle the grid should be colored
        canvasFillStyle = "white";
    }
    
    if (document.getElementById("errorMsg") != null) {
        document.getElementById("errorMsg").style.color = getErrColr();
    }
}