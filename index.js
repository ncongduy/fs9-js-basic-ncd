// declare global variable
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const addBtn = $('.input__form button');
const input = $('.input__form input');

// create list item
function createItem() {
	if (input.value.length === 0) return;

	const list = $('.list ul');
	const li = document.createElement('li');

	li.innerHTML = `
          <input type="checkbox" id="example1">
          <label for="example1">${input.value}</label>
          <span>x</span>`;
	list.appendChild(li);
}

// when user click add button
function handleAddBtn(evt) {
	evt.preventDefault();
	createItem();

	// clear input
	input.value = '';

	// focus on input
	input.focus();
}

addBtn.addEventListener('click', handleAddBtn);
