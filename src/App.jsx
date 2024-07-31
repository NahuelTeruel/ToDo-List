import './App.css'
import Lista from './components/Lista';
import RegistrarTarea from './components/RegistrarTarea'
import useToDo from './hooks/useToDo';

function App() {
    const {
      todos,
      todosCount,
      pendingTodosCount,
      newTodo,
      deleteTodo,
      doneTodo,
      updateTodo,
    } = useToDo();
  
    return (
      <>
        <div className='card-to-do'>
          <h1>Lista de tareas</h1>
          <div className='counter-todos'>
            <h3>
              N° Tareas: <span>{todosCount}</span>
            </h3>
            <h3>
              Pendientes: <span>{pendingTodosCount}</span>
            </h3>
          </div>
  
          <div className='add-todo'>
            <h3>Agregar Tarea</h3>
            <RegistrarTarea newTodo={newTodo} />
          </div>
  
          <Lista
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
          />
        </div>
      </>
    );
}

export default App
