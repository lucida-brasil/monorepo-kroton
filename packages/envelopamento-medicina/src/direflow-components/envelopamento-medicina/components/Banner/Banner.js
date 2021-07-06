/* eslint-disable react/prop-types */
import React from 'react'
import { withStyles } from 'direflow-component'
import styles from './Banner.css'
import { HTMLActions } from '@zoly-cro/hooks'

const Banner = ({srcDesk, srcMobile}) => {
  const handleClick = () => {
    const hostname = window.location.hostname.split('.')[1] 
    HTMLActions.pushDataLayer({
      event:'event',
      eventCategory:`${hostname}:graduacao`,
      eventAction:'clique:botao',
      eventLabel: `${hostname}:clique-banner`
    })
    return window.location.href = 'http://www.consultec.com.br/inscbd/2005insc/main_concurso.php?id_concurso=317022'
  }
  return (
    <div className="banner">
      <picture  onClick={handleClick}>
        <source
          media="(min-width: 768px)"
          srcSet={srcDesk}         
        />
         <source
          media="(max-width: 600px)"
          srcSet={srcMobile}
        />
        <img />
      </picture>
    </div>
  )
}

export default withStyles(styles)(Banner)
