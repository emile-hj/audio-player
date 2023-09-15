// import styles from './Pause.module.css'
import React from 'react'

const Pause = (props) => {
  return (
    <button className="playPauseBtn pause" onClick={props.onClick} type="button">Pause</button>
  )
}

export default Pause
