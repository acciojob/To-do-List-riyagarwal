//your code here
const addTodo = () => {
	const todoItem = document.getElementById('newTodoInput').value;
	if(todoItem) {
		let liItem = document.createElement('li');
		liItem.textContent = 'todoItem';
		document.getElementById('todoList').appendChild(liItem)

		document.getElementById('newTodoInput').value('')
	}
}
