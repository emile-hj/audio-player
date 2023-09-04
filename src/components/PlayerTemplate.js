// import styles from './PlayerTemplate.module.css'
import React from 'react'

const PlayerTemplate = ({ active, children }) => {
  return <div className={`playerWrapper ${active ? 'active' : ''}`}>{children}</div>
}

export default PlayerTemplate
