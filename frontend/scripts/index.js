var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/boo.webp") {
        myImage.setAttribute("src", "images/boo-negative.webp");
    } else {
        myImage.setAttribute("src", "images/boo.webp");
    }
};


var buttonChangeUser = document.querySelector("button")
var pageHeader = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    pageHeader.textContent = "Mozilla is cool, " + myName;
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    pageHeader.textContent = "Mozilla is cool, " + storedName;
  }

buttonChangeUser.onclick = function () {
    setUserName();
  };