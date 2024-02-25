// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.


let book = {
    title: "Harry Potter",
    author: "Joan K Rowling",
    year: 1997
}


let { title, author } = book;

console.log(`Назва книги "${title}", автор ${author}`);