// src/components/TaskList.jsx
// Importamos React y el hook useState desde la librería de React
import React, { useState } from 'react';

// Definimos el componente funcional TaskList
const TaskList = () => {
  // Inicializamos el estado 'tasks' como un array vacío usando useState
  const [tasks, setTasks] = useState([]);

  // Simulación de carga de datos desde una API usando useEffect
  React.useEffect(() => {
    // Realizamos una petición a la API para obtener la lista de tareas
    fetch('https://jsonplaceholder.typicode.com/todos')
      // Convertimos la respuesta en formato JSON
      .then((response) => response.json())
      // Actualizamos el estado 'tasks' con los datos obtenidos
      .then((data) => setTasks(data))
      // Capturamos y mostramos cualquier error que ocurra durante la carga
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez al montar el componente

  // Renderizamos el componente
  return (
    <div className="container mt-5">
      <h2>Lista de Tareas</h2>
      <ul>
        {/* Mapeamos a través del array 'tasks' y generamos un elemento <li> por cada tarea */}
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li> // Usamos el id de la tarea como clave única
        ))}
      </ul>
    </div>
  );
};

// Exportamos el componente TaskList para poder utilizarlo en otras partes de la aplicación
export default TaskList;
