// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
  if (denominator === 0) {
    console.log(`You can not divide. ${denominator} is equal to 0.`);
  } else if (typeof numerator !== 'number') {
    console.log(`"${numerator}" is not a number`);
  } else if (typeof denominator !== 'number') {
    console.log(`"${denominator}" is not a number`);
  } else {
    const divideRes = numerator / denominator;
    console.log(`${numerator} / ${denominator} = ${divideRes}`);
  }
}

try {
  divide(10, 2);
  divide(10, 0);
  divide(10, 'any text');
} catch (error) {
  console.error('Error');
} finally {
  console.log('Робота завершена');
}
