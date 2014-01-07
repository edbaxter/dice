document.addEventListener('DOMContentLoaded', function() {

	// Return a number from 1 - 6 inclusive
	var roll = function() {
		return (Math.round(Math.random() * 5) + 1);
	}

	// Update HTML
	var rollDice = function() {

		var numberElement = document.querySelector('h1 span.number');

		// Remove the current value
		numberElement.innerHTML = '.';

		// Add a random delay to give the impression that a real dice is being rolled
		setTimeout(function(){
			numberElement.innerHTML = roll();
		}, (Math.random() * 300) + 200);

	}

	// Roll the dice on page load
	rollDice();

	// Roll the dice upon button click
	document.querySelector('button.roll').addEventListener('click', rollDice);

});
