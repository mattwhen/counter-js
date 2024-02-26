// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.button-container');

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		console.log(e);
		// add event listener to every single button.
		console.log(e.currentTarget.classList); // where was the click?
		const style = e.currentTarget.classList;

        // Increment/Decrease/Reset count variable
		if (style.contains('decrease')) {
			count--;
		} else if (style.contains('increase')) {
			count++;
		} else if (style.contains('reset')) {
			count = 0;
		}
		// Apply color to value based on the current count
		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else if (count == 0) {
			value.style.color = 'black';
		}
		value.textContent = count;
	});
});

// Event delegation
// btnContainer.addEventListener('click', function(e) {
//     console.log(e.target.classList); // where was the click?
// })
