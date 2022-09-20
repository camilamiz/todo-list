import { Header } from "./components/Header";

import './global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <form action="">
        <input type="text" namesoace="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>
      <div>
        <span>Tarefas criadas</span>
        <span>Concluídas</span>
      </div>
      <div>Lista   </div>
    </div>
  )
}

export default App
