import { HiOutlineTrash } from 'react-icons/hi'
import { Checkbox } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import styles from './Task.module.css'
import { IconContext } from 'react-icons';

export function Task () {
  return (
    <>
      <div className={styles.card}>
        <Checkbox
        icon={<RadioButtonUncheckedOutlinedIcon />}
        checkedIcon={<CheckCircleIcon />}
          sx={{
            color: 'var(--blue-400)',
            '&.Mui-checked': {
              color: 'var(--purple-700)',
            }
          }}
        />
        <div className={styles.description}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.        </div>
        <div>
          <IconContext.Provider value={{ size: '1rem' }}>
            < HiOutlineTrash />
          </IconContext.Provider>
        </div>
      </div>
    </>
  )
}