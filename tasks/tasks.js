import { createTodo, logoutUser } from '../fetch-utils.js';

const todoForm = document.getElementById('todo-form');
const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
});

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    const data = await createTodo({
        content: formData.get('newTodo'),
    });
    console.log('app.js ------>', data);
});
