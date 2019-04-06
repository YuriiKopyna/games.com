document.querySelector('.button-more-content')
	.addEventListener('click', addGame);

function addGame() {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status ===200) {
			document.querySelector('.vrally')
				.innerHTML = xhr.responseText;
		}
	}
	xhr.open('GET', 'game.html', true);
	xhr.send();
}	