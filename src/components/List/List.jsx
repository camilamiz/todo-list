import { Task } from '../Task'

import styles from './List.module.css'

export function List() {
  return(
    <>
      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  )
}