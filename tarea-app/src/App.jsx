import TodoList from './input_tareas.jsx'
import ComponentePeticionApi from "./componentePeticionApi"
import TaskList from './TaskList.jsx'

function App() {
  return (
    <div>
      <h1 id="titulo">~Tareas por hacer~</h1>
      <TodoList/>
      <TaskList/>
      <footer>
        <ComponentePeticionApi/>
      </footer>
    </div>
//Recordar siempre empezar los nombres de los componentes en mayuscula
//Es recomendable que los componentes, a excepción del Navbar, vayan en App.jsx que en main.jsx
  )
}

export default App


