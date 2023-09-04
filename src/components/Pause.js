import styles from './Pause.module.css'
import React from 'react'

const Pause = (props) => {
  return (
    <button className={styles.pause} src={props.src} onClick={props.onClick} />
  )
}

export default Pause
