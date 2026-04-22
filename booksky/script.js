var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-buttton")

addpopupbutton.addEventListener("click" ,function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("Cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container = document.querySelector(".container")
var addbook  = document.getElementById("Add-book")
var booktitleinput = document.getElementById("book-title-input")
var booktauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click" , function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class" , "Book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${booktauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}