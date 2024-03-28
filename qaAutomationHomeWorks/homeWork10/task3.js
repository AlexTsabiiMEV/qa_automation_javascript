async function getToDoList() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!response.ok) {
      throw new Error('Some error');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function getUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    if (!response.ok) {
      throw new Error('Some error');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const [todo, user] = await Promise.all([getToDoList(), getUsers()]);
    console.log('ToDo:', todo);
    console.log('User Data:', user);
  } catch (error) {
    console.error('Error:', error);
  }
})();
