// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>;
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>;
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викориcтайте метод Promise.all передавши як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

function getToDoList() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Some error');
                }
                return response.json();
            })
            .then(todo => {
                resolve(todo); // Виправлено з data на todo
            })
            .catch(error => {
                reject(error);
            });
    });
}

getToDoList()
    .then(todo => {
        console.log('Todo:', todo);
    })
    .catch(error => {
        console.error('Error:', error);
    });


function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Some error');
                }
                return response.json();
            })
            .then(user => {
                resolve(user);
            })
            .catch(error => {
                reject(error);
            });
    });
}

Promise.all([getToDoList(), getUsers()])
    .then(([todo, user]) => { // Виправлено з data на user
        console.log('All ToDo:', todo);
        console.log('All User Data:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
