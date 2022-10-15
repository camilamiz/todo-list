import styles from './TodoForm.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai'

export function TodoForm () {
  return (
  <form className={styles.todoForm} action="">
    <textarea
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
    <button>Criar <AiOutlinePlusCircle /></button>
  </form>
  );
}
