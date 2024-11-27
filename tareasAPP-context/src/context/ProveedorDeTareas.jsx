import { createContext, useContext, useState } from 'react';

const TareasContext = createContext(); 
//createContext me devuelve un objeto. Este mismo tiene una funcion o componente llamado Provider. Provider va a ser quien gestione la info a heredar por el resto de los componentes
// Desde esta linea de codigo puedo accer a Provider escribiendo TareasContext.Provider en forma de etiquetas

 export const ProveedorDeTareas = ({ children }) => {


    const tareasIniciales = [
    { id: 1, nombre: 'Hacer la compra', descripcion: 'Comprar alimentos y productos necesarios.' },
    { id: 2, nombre: 'Estudiar React', descripcion: 'Revisar la documentación y hacer ejercicios.' },
    { id: 3, nombre: 'Ir al gimnasio', descripcion: 'Realizar ejercicios de cardio y pesas.' },
    ];
    
    const [tareas, setTareas] = useState(tareasIniciales);
    
    // Función para agregar una nueva tarea
    const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    };
    
    // Función para eliminar una tarea
    const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
    };
    
    // Función para editar una tarea
    const editarTarea = (id, nuevaTarea) => {
    const nuevasTareas = tareas.map((tarea) =>
    tarea.id === id ? { ...tarea, ...nuevaTarea } : tarea
    );
    setTareas(nuevasTareas);
    };
    
    return (
    <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, editarTarea }}>
    {children}
    </TareasContext.Provider>
    );
    };
    
    export const useTareasContext = () => useContext(TareasContext);

    export default ProveedorDeTareas;
    