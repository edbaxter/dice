document.addEventListener('DOMContentLoaded', function() {

	// Define elements
	var numberElement = document.querySelector('h1 span.number');
	var buttonElement = document.querySelector('button.roll');

	// Return a number from 1 - 6 inclusive
	var roll = function() {
		return (Math.round(Math.random() * 5) + 1);
	}

	// Update HTML
	var rollDice = function(event) {

		// Remove the current value
		numberElement.innerHTML = '.';

		// Disable button
		buttonElement.setAttribute('disabled', 'disabled');
		buttonElement.innerHTML = 'Rolling Dice';

		// Add a random delay to give the impression that a real dice is being rolled
		setTimeout(function(){

			// Roll dice
			numberElement.innerHTML = roll();

			// Enable button
			buttonElement.removeAttribute('disabled');
			buttonElement.innerHTML = 'Roll Again';

		}, (Math.random() * 300) + 200);

	}

	// Roll the dice on page load
	rollDice();

	// Roll the dice upon button click
	buttonElement.addEventListener('click', rollDice);

});
