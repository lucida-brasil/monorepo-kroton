/* eslint-disable react/prop-types */
import { Styled } from 'direflow-component'
import React from 'react'
import styles from './Cards.css'

const Card = ({ image, title, modalidade, content, links, buttonColor }) => {
  let styleButton = `.card__button--inscrever {
        width: 150px;
        height: 40px;                                  
        background: ${buttonColor};
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
    .card__button--inscrever:hover{                        
      filter: opacity(0.8);
    }`
  return (
    <Styled styles={[styles, styleButton]}>
      <div className="card__container">
        <div className="card__image">
          <img srcSet={image} />
        </div>
        <div className="card__content">
          <div className="card__title">
            <span className="card__title--text">{title}</span>
            <div className="card__card__title--modalidade--around">
              <span className="card__title--modalidade">{modalidade}</span>
            </div>
          </div>
          <span className="card__content--text">{content}</span>
        </div>
        <div className="card__button">
          <div>
            <button className="card__button--inscrever">
              {'INSCREVER-SE'}
            </button>
          </div>
          <div>
            <a className="card__button--saiba">{'SAIBA MAIS'}</a>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default Card
