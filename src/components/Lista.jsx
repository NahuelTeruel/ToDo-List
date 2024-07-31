import Item from './Item';
import PropTypes from 'prop-types';

function Lista({
	todos,
	updateTodo,
	deleteTodo,
	doneTodo,
}) {
	return (
		<ul>
			{todos.map(todo => (
				<Item
					key={todo.id}
					todo={todo}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
					doneTodo={doneTodo}
				/>
			))}
		</ul>
	);
}

Lista.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	).isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	doneTodo: PropTypes.func.isRequired,
};

export default Lista;
