// import styles from './Play.module.css'
import React from 'react'

const Play = (props) => {
  return <button className="playPauseBtn play" onClick={props.onClick} type="button">Play</button>
}

export default Play
