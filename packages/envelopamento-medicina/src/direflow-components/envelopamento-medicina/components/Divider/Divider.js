import { withStyles } from 'direflow-component'
import React from 'react'
import styles from './Divider.css'

const Divider = (text) => {
  return (
    <div id="divider">
        <div id="text">
            <div dangerouslySetInnerHTML={{__html: text.text}}></div>
        </div>
    </div>
  )
}

export default withStyles(styles)(Divider)
