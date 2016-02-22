// GO!
var navBarStatus = {
	showing: true
}
var buttonStatus = {
	clicked: true
}


document.querySelector(".answer-box button").addEventListener('click',function() {
	//alert('yay this button works!')
	var navBar = document.querySelector(".nav-menu")
	if (navBarStatus.showing) {
		navBar.style.opacity = 0; 
		navBarStatus.showing = false
	}
	else {
		navBar.style.opacity = 1;
		navBarStatus.showing = true 
	}
	var button = document.querySelector(".answer-box button")
	if (buttonStatus.clicked) {
		button.textContent = "Show Nav"
		buttonStatus.clicked = false
	}
	else {
		button.textContent = "Hide Nav"
		buttonStatus.clicked = true 
	}
})


var inputBox = document.querySelector('input[type="text"]')
var userGuestList = document.querySelector(".guest-list")
var addGuest = function(keyEvent) {
	var listItem = keyEvent.srcElement 
	if (keyEvent.keyCode === 13) {
		var userInput = listItem.value 
		var li = document.createElement("li")
		li.classList.add("newGuest")
		li.textContent = userInput
		userGuestList.appendChild(li)
		listItem.value = ""
	}
}
inputBox.addEventListener("keydown",addGuest) 



var input = document.querySelector("#add-guest-bonus input")
var guestList = document.querySelector("#add-guest-bonus ul")

var addGuest = function(input) {

	if (input.keyCode === 13) {
		var newGuest = document.createElement('li')
		newGuest.innerHTML = input.target.value + "<button>X</button>"
		newGuest.classList.add('guest')
		newGuest.querySelector('button').addEventListener('click',function() {
			guestList.removeChild(newGuest)
		})
		guestList.appendChild(newGuest)
		input.target.value = ''
	}
}
input.addEventListener('keypress',addGuest)