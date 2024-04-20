import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

const App = () => {
  return (
    <main>
      <h1>Todo React + TypeScript</h1>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App