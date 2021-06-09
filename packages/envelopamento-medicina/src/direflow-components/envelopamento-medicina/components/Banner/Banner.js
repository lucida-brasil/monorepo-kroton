import React from 'react'
import { withStyles } from 'direflow-component'
import styles from './Banner.css'

const Banner = (src) => {
  return (
    <div className="banner">
      <picture>
        <source
          srcSet={src.src}
          media="(min-width: 600px)"
        />
        <img />
      </picture>
    </div>
  )
}

export default withStyles(styles)(Banner)
