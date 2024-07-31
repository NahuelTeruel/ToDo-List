import { FaTrash } from 'react-icons/fa';
import ActualizarTarea from './ActualizarTarea';
import PropTypes from 'prop-types';

function Item({
	todo,
	updateTodo,
	deleteTodo,
	doneTodo,
}) {
	return (
		<li>
			<span onClick={() => doneTodo(todo.id)}>
				<label className={`container-done ${todo.done ? 'active' : ''}`}></label>
			</span>
			<ActualizarTarea todo={todo} updateTodo={updateTodo} />
			<button
				className='btn-delete'
				onClick={() => deleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
}

Item.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	doneTodo: PropTypes.func.isRequired,
};

export default Item;
