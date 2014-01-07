document.addEventListener('DOMContentLoaded', function() {

	// Return a number from 1 - 6 inclusive
	var roll = function() {
		return (Math.round(Math.random() * 5) + 1);
	}

	// Update HTML
	var rollDice = function() {
		document.querySelector('h1 span.number').innerHTML = roll();
	}

	// Roll the dice on page load
	rollDice();

	// Roll the dice upon button click
	document.querySelector('button.roll').addEventListener('click', rollDice);

});
