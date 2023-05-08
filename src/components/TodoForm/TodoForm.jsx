import styles from './TodoForm.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai'

const handleOnClick = event => {
  console.log('hellooo!!!!!!')
  event.preventDefault();
}

export function TodoForm () {
  return (
  <form className={styles.todoForm} action="">
    <textarea
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
    <button onClick={handleOnClick}>
      Criar <AiOutlinePlusCircle />
    </button>
  </form>
  );
}
