import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { TaskScoreBoard } from "./components/TaskScoreBoard";
import { TodoForm } from "./components/TodoForm";

import './global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <TodoForm />
        <TaskScoreBoard />
        <List />
      </div>
    </div>
  )
}

export default App
