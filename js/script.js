function hideElementById(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = "none";
    }
}

function showElementById(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = "block";
    }
}