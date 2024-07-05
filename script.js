'use strict';
/*
	WEB 230 Winter 2022
	Assignment 6
	{Haider Ali, 0828832, and 4/20/2023}
*/
document.querySelector('.todo-list').addEventListener('click', function (event) {
	// Check if the clicked element is an LI
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}

	// Check if the clicked element is a SPAN
	if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove();
	}
});

document.getElementById('add-item').addEventListener('click', function () {
	addItemToList();
});

document.getElementById('new-item-text').addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		addItemToList();
	}
});

function addItemToList() {
	const newItemInput = document.getElementById('new-item-text');
	const newItemText = newItemInput.value.trim();

	if (newItemText.length > 0) {
		const newItem = document.createElement('li');
		const deleteSpan = document.createElement('span');

		deleteSpan.className = 'remove';
		newItem.className = 'todo-item';
		newItem.appendChild(document.createTextNode(newItemText));
		newItem.appendChild(deleteSpan);

		document.querySelector('.todo-list').appendChild(newItem);
		newItemInput.value = '';
	}
}
