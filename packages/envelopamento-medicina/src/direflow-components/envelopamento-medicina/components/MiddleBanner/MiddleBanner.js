import { withStyles } from 'direflow-component'
import React from 'react'
import styles from './MiddleBanner.css'
import PropTypes from 'prop-types'
import CarouselMedicina from '../Carousel/CarouselMedicina'

// eslint-disable-next-line react/prop-types
const MiddleBanner = ({src, color}) => {
    return (
    <div className="middle-banner__container">
      <div className="middle-banner__image">
        <picture>
          <source srcSet={src}/>
          <img className="image" srcSet={src}/>
        </picture>
      </div>
      <div className="carousel__position">
        <CarouselMedicina color={color} />
      </div>
    </div>
  )
}

MiddleBanner.defaultProps = {
  srcArray: PropTypes.arrayOf(PropTypes.string)
}

export default withStyles(styles)(MiddleBanner)
