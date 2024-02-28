// Геттери та Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

// Новий масив
let books = [];

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
// Гетери і сетери 
    get newTitle() {
        return this.title = newTitle;
    }

    set newTitle(newTitle) {
        if (typeof newTitle === 'string') {
            this.title = newTitle;
        } else {
            throw new Error("Invalid title type");
        }
    }

    get newAuthor() {
        return this.author = newAuthor;
    }

    set newAuthor(newAuthor) {
        if (typeof newAuthor === 'string') {
            this.author = newAuthor;
        } else {
            throw new Error("Invalid author type");
        }
    }

    get newYear() {
        return this.year = newYear;
    }

    set newYear(newYear) {
        if (typeof newYear === 'string') {
            this.year = newYear;
        } else {
            throw new Error("Invalid year type");
        }
    }
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та  EBook)
    static findOldestBook(books) {
        // Шукаємо найдавнішу книгу
        let oldestBook = books[0]; // Припускаємо, що перший елемент - найдавніший
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    }


    printInfo() {
        console.log(`Book title: "${this.title}", Author: ${this.author}, Year: ${this.year}`);
    }


}


class EBook extends Book {
    constructor (title,author,year,format) {
        super(title,author,year);
        this.format = format;
    }

    get newFormat() {
        return this.format = newFormat;
    }

    set newFormat(newFormat) {
        if (typeof newFormat === 'string') {
            this.format = newFormat;
        } else {
            throw new Error("Invalid format type");
        }
    }
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook
static expandBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
}

    printInfo () {
        console.log(`Book title: "${this.title}", Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`);
    }

}

// Створення нових обєктів
let harryPotter = new Book("Harry Potter and the philosopher's stone", "J.K. Rowling", "1997");
let lordOfTheRings = new Book("Lord of the rings: The Fellowship of the Ring", "J. R. R. Tolkien", "1954");
let songOfIceAndFire = new Book("A Song of Ice and Fire: A Game of Thrones", "George R. R. Martin", "1996");
let harryPotterTwo = new EBook("Harry Potter and the Chamber of Secrets","J.K. Rowling","1998",".pdf");

// Повернення нових обєктів
harryPotter.printInfo();
lordOfTheRings.printInfo();
songOfIceAndFire.printInfo();
harryPotterTwo.printInfo();

//Додаємо елементи в масив
books.push(harryPotter);
books.push(lordOfTheRings);
books.push(songOfIceAndFire);

// Сет новинх властивостей в обєект harryPotter
harryPotter.newTitle = "Harry Potter 8: Need more money";
harryPotter.newAuthor = "AI Rowling";
harryPotter.newYear = "2024";


// Сет новинх властивостей в обєект harryPotterTwo
harryPotterTwo.newFormat = "mp3";


// Повернення новинх властивостей в обєекти harryPotter і harryPotterTwo
harryPotter.printInfo();
harryPotterTwo.printInfo();


//Ще додаємо елементи в масив після сетів
books.push(harryPotter);
books.push(harryPotterTwo);

// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та  EBook)
let oldestBook = Book.findOldestBook(books);
console.log("Oldest book:",oldestBook.title,", Author: ", oldestBook.author,", Year ",oldestBook.year);



// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook


let originalBook = new Book("Harry Potter", "J.K. Rowling", 2001);

let newEBook = EBook.expandBook(originalBook, ".pdf");

console.log(newEBook);







