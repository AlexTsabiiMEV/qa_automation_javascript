// Завдання 2 Функція для розвороту рядка
// Завдання: Напишіть тіло функції reverseString, яка приймає рядок і повертає його в зворотньому порядку.


let inputString = "Hello this is string";

function reverseString (inputString) {
    
    let newString = "";
    
    for (let i = inputString.length - 1; i >= 0; i--) { 
        newString += inputString[i]; 
    }

    return newString;

}

console.log(reverseString(inputString));