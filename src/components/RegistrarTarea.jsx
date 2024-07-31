import { useForm } from '../hooks/useForm';
import PropTypes from 'prop-types';

function RegistrarTarea ({ newTodo }) {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodoRegistrar = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		newTodo(newTodoRegistrar);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Añadir una tarea'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
}

RegistrarTarea.propTypes = {
	newTodo: PropTypes.func.isRequired,
};

export default RegistrarTarea;