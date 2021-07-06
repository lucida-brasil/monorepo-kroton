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
  const indicatorStyles = {
    '-webkit-transition': 'opacity .25s ease-in',
    '-moz-transition': 'opacity .25s ease-in',
    '-ms-transition': 'opacity .25s ease-in',
    '-o-transition': 'opacity .25s ease-in',
    transition: 'opacity .25s ease-in',
    opacity: .3,    
    'box-shadow': '1px 1px 2px rgb(0 0 0 / 90%)',
    background: `${element.color}`,
    'border-radius': '50%',
    width: '8px',
    height: '8px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '0 8px',
  }
  const indicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          style={{
            ...indicatorStyles,
            background: `${element.color}`,
            border: `1px solid ${element.color}`,
            width: 9,
            height: 9,
            opacity: 1.0
          }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      )
    }
    return (
      <li
        style={indicatorStyles}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    )
  }
  return (
    <Styled styles={[styles, carouselStyle, indicatorStyles]}>
      <div className="carrousel-cards___container">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          showArrows={true}
          centerMode
          centerSlidePercentage={
            HTMLActions.getWindowDimensions().width >= 1024 ? 30 : 100
          }
          transitionTime={200}
          renderIndicator={indicator}
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
                  links={item.links}
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
