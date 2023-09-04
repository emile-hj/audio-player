import styles from './Time.module.css'
import React from 'react'

const Time = (props) => {
  return <div className={styles.time}>{props.time}</div>
}

export default Time
