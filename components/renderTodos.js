// export default function renderTodoList(root) {
//     return ({ todos }) => {
//         root.innerHTML = '';

//         for (let todo of todos) {
//             const eachTodo = { todo };
//             let newTodo = Todo(todo);
//             root.append(newTodo);
//         }
//     };
// }

// export function Todo({ todo }) {
//     const todoItem = document.createElement('div');
//     let todoContent = document.createElement('span');
//     todoContent.textContent = todo.content;

//     todoItem.append(todoContent);
//     todo.append(todoItem);
// }
