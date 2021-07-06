import React from 'react'
import { Styled } from 'direflow-component'
import styles from './App.css'
import { Carousel } from 'react-responsive-carousel'
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { HTMLActions } from '../../../../libs/hooks'

const App = () => {
  const element = document.querySelector('banners-component')
  return (
    <Styled styles={[styles, carouselStyle]}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}
        showArrows={
          HTMLActions.getWindowDimensions().width > 600 ? true : false
        }
        dynamicHeight
        transitionTime={200}
        useKeyboardArrows
        onClickItem={index => {
          return window.location.href = element.banners[index - 1].link
        }}
      >
        {element.banners.map((item, index) => {
          return (
            <div className="banner__click" key={index}>
              <img className="image" srcSet={item.bannerSrc} />
            </div>
          )
        })}
      </Carousel>
    </Styled>
  )
}

export default App
