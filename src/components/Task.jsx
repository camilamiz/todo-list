import { HiOutlineTrash } from 'react-icons/hi'

import styles from './Task.module.css'

export function Task () {
  return (
    <>
      <div className={styles.card}>
        <input type="checkbox" />
        <div className={styles.description}>
          Integer urna interdum massa libero auctor massa libero auctor massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </div>
        < HiOutlineTrash />
      </div>
    </>
  )
}