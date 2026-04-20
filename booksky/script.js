var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-buttton")

addpopupbutton.addEventListener("click" ,function(){
    popupoverlay.style.display="nlock"
    popupbox.style.display="block"
})