// Завдання 1 Функція для визначення парних чисел
// Завдання: Імплементуйте функцію isEven, яка приймає число і повертає true, якщо число парне, і false, якщо число непарне.

let num;

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(0));
console.log(isEven(3));
console.log(isEven(4));
