import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

export const useToDo = () => {
	const initialState = [];

	const init = () => {
		return JSON.parse(localStorage.getItem('todos')) || [];
	};

	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	const todosCount = todos.length;
	const pendingTodosCount = todos.filter(todo => !todo.done).length;

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const newTodo = todo => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};
		dispatch(action);
	};

	const deleteTodo = id => {
		const action = {
			type: 'Delete Todo',
			payload: id,
		};
		dispatch(action);
	};

	const doneTodo = id => {
		const action = {
			type: 'Complete Todo',
			payload: id,
		};
		dispatch(action);
	};

	const updateTodo = (id, description) => {
		const action = {
			type: 'Update Todo',
			payload: { id, description },
		};
		dispatch(action);
	};

	return {
		todos,
		todosCount,
		pendingTodosCount,
		newTodo,
		deleteTodo,
		doneTodo,
		updateTodo,
	};
};

export default useToDo;
