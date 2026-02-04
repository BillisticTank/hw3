const monthOptions = document.querySelectorAll('.month')

const monthMainButton = document.getElementById('dropdownMonth-button');

//old code (still works)
//monthOptions.forEach(month => {
	//month.addEventListener('click', function(event) {
		//event.preventDefault();

		//monthMainButton.textContent = this.textContent;
	//});
//});




eventHandler = function(event) {
    event.preventDefault();

	monthMainButton.textContent = this.textContent;
}

monthOptions.forEach(month => {
    $(function() {
        month.addEventListener('click', eventHandler);
    });
});