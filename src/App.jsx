import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { TaskScoreBoard } from "./components/TaskScoreBoard/TaskScoreBoard";
import { TodoForm } from "./components/TodoForm/TodoForm";

import './global.css'

const tasks = [
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: true,

  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,

  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <TodoForm />
        <TaskScoreBoard />
        <List tasks={tasks} />
      </div>
    </div>
  )
}

export default App
