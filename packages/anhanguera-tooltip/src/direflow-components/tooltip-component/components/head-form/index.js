/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from 'react'
import TooltipEnem from '../tootip-enem'
import { Styled } from 'direflow-component'
import { HTMLActions } from '@zoly-cro/hooks'
import { unifyAceiteSMS } from './interceptions/unifyAceiteSMS'
import { handleElements } from './interceptions/handleElements'
import { mutationObserver } from './interceptions/handleRenderGatilho'

const HeadFormComponent = () => {
  const component = document.querySelector('zoly-head-form-component')
  const element = document.getElementById('enem')
  var styles = `.container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: auto;
  }
  
  .font {
    font-weight: bold;
  }
  
  .font.text {
    font-size: 1.39rem;
    color: ${component.color};
  }
  
  .btn__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .btn__item {
    width: 49%;
    height: 34px;
    border-radius: 50px;
    background: transparent;
    border: 1px solid #57585a;
    box-sizing: border-box;
    font-weight: bold;
    color: #57585a;
  }
  
  .btn__item:hover {
    border: 1px solid ${component.color};
    background-color: ${component.color};
    color: white;
  }
  
  .btn__item[aria-checked="true"] {
    border: 1px solid ${component.color};
    background-color: ${component.color};
    color: white;
  }
  
  .modal__position {
    position: absolute;
    transform: translateX(250%) translateY(-60%);
  
  }`
  const hostname = window.location.hostname.split('.')[1]
  const [btnEnemClick, setEnemClick] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const handleClose = () => setOpenDialog(false)
  useEffect(() => {
    const hj = window.hj ||  function () {
        (hj.q = hj.q || []).push(arguments)
      }
    hj('trigger', 'funil_variation_b')
    window.setTimeout(() => setOpenDialog(true), 3000)
    unifyAceiteSMS()
    handleElements(component.university)
    //mutationObserver(component.color)
  }, [])

  const handleEnemClick = () => {
    if (btnEnemClick === false) HTMLActions.simulateMouseClick(element)
    setEnemClick(true)
    HTMLActions.pushDataLayer({
      event: 'event',
      eventCategory: `${hostname}:graduacao`,
      eventAction: 'clique:botao',
      eventLabel: `${hostname}:nota-enem`
    })
  }

  const handleVestibularClick = () => {
    if (btnEnemClick === true) HTMLActions.simulateMouseClick(element)
    setEnemClick(false)
    HTMLActions.pushDataLayer({
      event: 'event',
      eventCategory: `${hostname}:graduacao`,
      eventAction: 'clique:botao',
      eventLabel: `${hostname}:vestibular-online`
    })
  }

  return (
    <Styled styles={styles}>
      <div>
        <div className="container">
          <div>
            <h4 className="font text">
              {`Como voc?? gostaria de ingressar na ${component.university}?`}
            </h4>
          </div>
        </div>
        <div className="btn__container">
          <button
            aria-checked={!btnEnemClick}
            className="btn__item"
            type="button"
            value="VESTIBULAR ONLINE"
            onClick={handleVestibularClick}
          >
            VESTIBULAR ONLINE
          </button>
          <button
            aria-checked={btnEnemClick}
            className="btn__item enem"
            type="button"
            value="NOTA ENEM"
            onClick={handleEnemClick}
          >
            NOTA ENEM
          </button>
        </div>
        <div className="modal__position">
          <TooltipEnem
            open={openDialog}
            onClose={handleClose}
            color={component.color}
          />
        </div>
      </div>
    </Styled>
  )
}

HeadFormComponent.defaultProps = {
  color: 'black',
  university: 'universidade'
}

export default HeadFormComponent
