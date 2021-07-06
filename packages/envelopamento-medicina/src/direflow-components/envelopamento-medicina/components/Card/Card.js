/* eslint-disable react/prop-types */
import { Styled } from 'direflow-component'
import React from 'react'
import { HTMLActions } from '@zoly-cro/hooks'
import styles from './Cards.css'

const Card = ({ image, title, modalidade, content, links, buttonColor }) => {
  const hostname = window.location.hostname.split('.')[1]
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
  const handleInscrevase = () => {
    HTMLActions.pushDataLayer({
      event:'event',
      eventCategory:`${hostname}:graduacao`,
      eventAction:'clique:botao',
      eventLabel:`${hostname}:${title.toLowerCase().replace(/\s?\s/g, '-')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`
    })
    return window.location.href = links[0]
  }
  const handleSaibaMais = () => {
    HTMLActions.pushDataLayer({
      event:'event',
      eventCategory:`${hostname}:graduacao`,
      eventAction:'clique:botao',
      eventLabel:`${hostname}:${title.toLowerCase().replace(/\s?\s/g, '-')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`
    })
    return window.location.href = links[1]
  }
  const handleClickCard = () => {
    HTMLActions.pushDataLayer({
      event:'event',
      eventCategory:`${hostname}:graduacao`,
      eventAction:'clique:botao',
      eventLabel:`${hostname}:${title.toLowerCase().replace(/\s?\s/g, '-')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`
    })
    return window.location.href = links[1]
  }
  return (
    <Styled styles={[styles, styleButton]}>
      <div className="card__container">
        <div className="card__image" onClick={handleClickCard}>
          <img srcSet={image} />
        </div>
        <div className="card__content" onClick={handleClickCard}>
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
            <button className="card__button--inscrever" onClick={handleInscrevase}>
              {'INSCREVER-SE'}
            </button>
          </div>
          <div>
            <a className="card__button--saiba" onClick={handleSaibaMais}>{'SAIBA MAIS'}</a>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default Card
