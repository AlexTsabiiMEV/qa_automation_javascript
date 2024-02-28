// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.


export class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
      }

      printInfo() {
        console.log(`Book title: "${this.title}", Author: ${this.author}, Year: ${this.year}`)
    }
}

let harryPotter = new Book("Harry Potter and the philosopher's stone","J.K. Rowling","1997");
let lordOfTheRings = new Book("Lord of the rings: The Fellowship of the Ring","J. R. R. Tolkien","1954");
let songOfIceAndFire = new Book("A Song of Ice and Fire: A Game of Thrones", "George R. R. Martin", "1996");



harryPotter.printInfo();
lordOfTheRings.printInfo();
songOfIceAndFire.printInfo();



