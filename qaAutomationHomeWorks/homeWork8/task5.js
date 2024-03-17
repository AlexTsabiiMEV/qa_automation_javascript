// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  { name: 'John Doe', email: 'john.doe@gmail.com', age: 30 },
  { name: 'Harry Potter', email: 'harry.potter@gmail.com', age: 16 },
  { name: 'Dart Vader', email: 'dart.vader@gmail.com', age: 70 },
];

for (const user of users) {
  const { name, email, age } = user;
  console.log(`User name: ${name}, User email: ${email}, User age: ${age}`);
}
