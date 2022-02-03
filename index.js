// declare global variable
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const addBtn = $('.input__form button');
const input = $('.input__form input');
const list = $('.list ul');
const removeBtn = $('.remove-all');

// create list item
function createItem() {
	if (input.value.length === 0) return;

	const li = document.createElement('li');
	li.className = 'list__item';
	li.innerHTML = `<i class="fas fa-check"></i><p>${input.value}</p><span>x</span>`;
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

// when user click remove all button
function handleDeleteAll() {
	list.innerHTML = '';
}

removeBtn.addEventListener('click', handleDeleteAll);

// when user click x element
function handleDeleteItem(evt) {
	if (evt.target.nodeName !== 'SPAN') return;

	const liElement = evt.target.parentElement;
	list.removeChild(liElement);
}

list.addEventListener('click', handleDeleteItem);

// when user click item inside list
function handleToggleItem(evt) {
	if (evt.target.nodeName !== 'P') return;

	const currentElement = evt.target;
	currentElement.classList.toggle('list__item__p--toggle');

	const parentElement = currentElement.parentElement;
	const iElement = parentElement.querySelector('i');
	iElement.classList.toggle('list__item__i--open');
}

list.addEventListener('click', handleToggleItem);
