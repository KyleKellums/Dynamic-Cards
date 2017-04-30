"use strict";
console.log("Hi there");

let textArea = document.getElementById('textarea');
let cardContainer = document.getElementById("container");

// 1. EventListener "click" happens on create-button. This calls the function "createCard"
document.getElementById("createBtn").addEventListener("click", createCard);

function createCard(event){ //
	var cardOutput = textArea.value; //we get the text from users input via .value
	console.log("textValue", cardOutput); //check to see if that data is passing
	var cardPlace = `<div class="card">
						<p>${cardOutput}</p>
						<button class="cardDelete" type="submit">Delete</button>
					</div>`;
		cardContainer.innerHTML = cardPlace; //remember to place this INSIDE the function
	addEvents(); //the card has been created, now events need to be added by another function
	};

function addEvents(){
	var deleteButtons = document.getElementsByClassName("cardDelete");
	// console.log("lookingforclick", deleteButtons);
		for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", function(event){
			// console.log("check the event", event);
		cardContainer.removeChild(event.target.closest("div"));
		})
	}
		// console.log("I clicked delete", event);
};




	// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
	// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
