import { Task } from '../Task/Task'

import styles from './List.module.css'

export function List({ tasks }) {
  return(
    <>
      <div className={styles.list}>
        {tasks.map(task => {
          return <Task task={task} />
        })}
      </div>
    </>
  )
}
