// Завдання 2: Копіювання з мутацією

// Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.

// Ось кроки, які вам потрібно виконати:

// Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
// Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
// Виведіть новий масив на консоль.

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(indexMultiplication);

function indexMultiplication(value, index) {
  return value * index;
}

console.log(newNumbers);
