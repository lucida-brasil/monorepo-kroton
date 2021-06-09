import { Styled } from 'direflow-component'
import React from 'react'
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Card from '../Card/Card'
import styles from './CarouselCards.css'
import { CardContent } from '../../../../content/CardContent'
import { Carousel } from 'react-responsive-carousel'
import { HTMLActions } from '../../../../../../libs/hooks'

const CarouselCards = () => {
  const element = document.querySelector('envelopamento-medicina')
  return (
    <Styled styles={[styles, carouselStyle]}>
      <div className="carrousel-cards___container">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          showArrows={true}
          centerMode
          centerSlidePercentage={HTMLActions.getWindowDimensions().width >= 1024 ? 30 : 100}
          transitionTime={200}
          useKeyboardArrows
        >
          {CardContent.map((item, index) => {
            return (
              <div className="card__carousel-item" key={index}>
                <Card                  
                  image={item.image}
                  title={item.title}
                  modalidade={item.modalidade}
                  content={item.content}
                  link={item.link}
                  buttonColor={element.color}
                />
              </div>
            )
          })}
        </Carousel>
      </div>
    </Styled>
  )
}

export default CarouselCards
