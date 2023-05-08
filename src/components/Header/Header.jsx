import styles from './Header.module.css'

import todoLogo from '../assets/todoLogo.svg'

export function Header () {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="Todo List Logo" />
    </div>
  );
}