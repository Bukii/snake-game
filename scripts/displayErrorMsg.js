// function to display an error
function unableKeyEvent(e) {
    // delete the old element in the tree, so it won't overflow
    if (document.getElementById("errorMsg") != null) {
        oldOne = document.getElementById("errorMsg");
        oldOne.parentNode.removeChild(oldOne);
    }
    // create a new paragraph element to display the error message
    var myErrorMsg = document.createElement('p');
    myErrorMsg.id = "errorMsg";

    // get all position-related attributes of the canvas
    var rect = canvas.getBoundingClientRect();

    // style the error message
    // it is essential to make it's position absolute, so the upper part won't move and adjust,
    // when the error message gets displayed
    myErrorMsg.style.position = "absolute";
    myErrorMsg.style.display = "float";
    myErrorMsg.style.width = rect.width + "px";
    myErrorMsg.style.top = rect.bottom + "px";
    myErrorMsg.style.color = getErrColr();
    myErrorMsg.innerHTML = "Unable to move into myself!";

    // output the error message after the canvas
    canvas.after(myErrorMsg);
}