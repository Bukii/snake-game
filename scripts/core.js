var canvasFillStyle = "black";
var colorTheme = {
    50: "#FFF8E1",
    100: "#FFECB3",
    200: "#FFE082",
    300: "#FFD54F",
    400: "#FFCA28",
    500: "#FFC107",
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00",
};

// light mode
var lightBGColr = "#FFFFFF";
var lightErrColr = "#B00020";
var lightPrimaryColr = colorTheme[500];

// dark mode
var darkBGColr = "#121212";
var darkErrColr = "#CF6679";
var darkPrimaryColr = colorTheme[200];

var errColr = lightErrColr;
function getErrColr() {
    return errColr = (canvasFillStyle.match("black")) ? lightErrColr : darkErrColr;
}
