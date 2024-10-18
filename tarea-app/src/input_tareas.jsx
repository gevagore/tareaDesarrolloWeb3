import React, { useState } from 'react';

const TodoList = () => {
  // Estado para almacenar el texto del input
  const [task, setTask] = useState('');
  
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Maneja el cambio en el input
  const handleInputChange = (e) => {
    setTask(e.target.value); // Actualiza el estado con el nuevo valor
  };

  // Maneja la adición de una nueva tarea
  const handleAddTask = () => {
    if (task.trim()) { // Verifica que no esté vacío
      // Agrega la nueva tarea con un id único
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(''); // Limpia el input después de agregar
    }
  };

  // Maneja la eliminación de una tarea
  const handleDeleteTask = (id) => {
    // Filtra las tareas y elimina la que coincide con el id
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div id='tareas'>
      {/* Input para escribir la tarea */}
      <input id='entradaTarea'
        type="text"
        value={task}
        onChange={handleInputChange} // Llama a la función al cambiar el input
        placeholder="Escribe una tarea"
      />
      {/* Botón para agregar la tarea */}
      <button id='botonTareas' onClick={handleAddTask}>Agregar Tarea</button>

      {/* Lista de tareas */}
      <ul>
        {tasks.map((t) => (
          <li key={t.id} class="listaTareas">
            {t.text} {/* Muestra el texto de la tarea */}
            {/* Botón para eliminar la tarea */}
            <button class='botonEliminar' onClick={() => handleDeleteTask(t.id)} style={{ marginLeft: '10px' }}>
              🗑️ {/* Icono de tacho de basura */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoList;