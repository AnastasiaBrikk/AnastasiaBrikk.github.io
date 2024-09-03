// Получаем элемент с классом "text" на странице "index"
const textElement = document.querySelector('.text');

// Получаем содержимое элемента
const textContent = textElement.textContent;

// Находим элемент с классом "newText" на странице "new"
const newTextElement = document.querySelector('.newText');

// Устанавливаем содержимое элемента "newText"
newTextElement.textContent = textContent;