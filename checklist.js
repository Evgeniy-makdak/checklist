let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		list.innerHTML += `<li>${input.value}</li>`;
		input.value = '';
	}
});
