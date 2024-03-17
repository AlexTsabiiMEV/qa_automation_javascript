// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
import { Book } from './book.js';

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  printInfo() {
    console.log(
      `Book title: "${this.title}", Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`,
    );
  }
}

const harryPotterTwo = new EBook(
  'Harry Potter and the Chamber of Secrets',
  'J.K. Rowling',
  '1998',
  '.pdf',
);

harryPotterTwo.printInfo();
