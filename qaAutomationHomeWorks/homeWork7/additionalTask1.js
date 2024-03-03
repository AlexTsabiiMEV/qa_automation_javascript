// Завдання: Імплементуйте функцію filterGreaterThanValue, яка приймає число minValue та масив з числами numbersList. Функція має повертати новий масив який містить лише числа більші за передане minValue.

// function filterGreaterThanValue(minValue, numbersList) { }

const minValue = 9;

const numbersList = [1,2,3,4,5,6,7,8,9,10];


function filterGreaterThanValue (minValue, numbersList) {
    
    let newNumbersList = [];

    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] > minValue) {
            newNumbersList.push(numbersList[i]);
        } 
      }
      
      return newNumbersList;

}

console.log(filterGreaterThanValue(minValue, numbersList));

 