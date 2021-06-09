/* eslint-disable react/prop-types */
import { Styled } from 'direflow-component'
import React from 'react'
import { carouselContent } from '../../../../content/CarouselContent'
import styles from './Carousel.css'
import { Carousel } from 'react-responsive-carousel'
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { HTMLActions } from '../../../../../../libs/hooks'

const CarouselMedicina = ({ color }) => {
  let cssAdicional = `.btn__saiba-mais{
                          padding: auto;                                               
                          background: ${color};
                          width: 50%;
                          height: 3rem;
                          font-family: Lato;
                          font-size: 15px;
                          font-style: normal;
                          font-weight: 700;
                          line-height: 15px;
                          letter-spacing: 0em;
                          text-align: center;
                          border: 0;
                          color: #4D4D4D;
                          cursor: pointer;
                      }
                      .btn__saiba-mais:hover{                        
                        filter: opacity(0.8);
                    }`

  
  return (
    <Styled styles={[styles, carouselStyle, cssAdicional]}>
      <div className="carousel__container">
        <div className="carousel__background">
          <Carousel
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            showArrows={HTMLActions.getWindowDimensions().width > 600 ? true : false} 
            infiniteLoop={true}
            transitionTime={200}
            useKeyboardArrows
          >
            {carouselContent.map((item, index) => {
              return (
                <article key={index} className="carousel__slide">
                  <div className="svg">{item.svg(color)}</div>
                  <div className="title">{item.title}</div>
                  <div className="content">{item.content}</div>
                </article>
              )
            })}
          </Carousel>
          <div className="btn__saiba-mais--position">
            <button className="btn__saiba-mais">SAIBA MAIS</button>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default CarouselMedicina
