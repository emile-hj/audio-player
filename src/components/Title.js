import styles from './Title.module.css'
import React from 'react'

const Title = (props) => {
  return <h2 className={styles.title}>{props.title}</h2>
}

export default Title
