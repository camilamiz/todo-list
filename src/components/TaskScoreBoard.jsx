import styles from './TaskScoreBoard.module.css'

export function TaskScoreBoard() {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.createdTasks}>
        <div className={styles.createdTasksText}>Tarefas criadas</div>
        <div className={styles.createdTasksScore}>5</div>
      </div>
      <div className={styles.finishedTasks}>
        <div className={styles.finishedTasksText}>Concluídas</div>
        <div className={styles.finishedTasksScore}>2 de 5</div>
      </div>
    </div>
  )
}