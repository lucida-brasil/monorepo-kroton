/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Styled } from 'direflow-component'
import Timer from 'react-compound-timer'
import { HTMLActions } from '@zoly-cro/hooks'

// eslint-disable-next-line react/prop-types
const TooltipGatilho = () => {
  const component = document.querySelector('zoly-tooltip-gatilho')

  var styles = `
    .zoly-gatilho {
      position : absolute !important;
      transform : translateX(250%) translateY(-200%) !important;
    }
    .modal__gatilho {
      width: 14rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));
      animation: timer-in 0.5s ease-in-out forwards;
    }
    .svg__color {
      ${HTMLActions.hexadecimalToFilter(component.color)}
    }
    .timer__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    
    .timer__around {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${component.color};
      box-sizing: border-box;
      border-radius: 5px;
      height: 45px;
      width: 50%;
      margin: auto;
      font-weight: bold;
      letter-spacing: 0.1em;
    }
    
    img {
      padding-right: 5px;
    }
    
    .modal__text {
      font-style: normal;
      font-weight: 700;
      line-height: 134.8%;
      letter-spacing: 0em;
      color: #57585a;
    }
    .modal__text.title {
      font-size: 1.1rem;
      line-height: 134.8%;
      text-align: center;
      color: ${component.color};
    }
    
    .modal__text.text {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 0.831rem;
      line-height: 134.8%;
      text-align: center;
      color: #57585a;
      padding-bottom: 12px;
    }
    
    .paper {
      padding: 10%;
      line-height: 1.6;
      background-color: white;
      border-radius: 4px;
      box-shadow: 5;
    }
    
    .display-block {
      display: block;
    }
    
    .display-none {
      display: none;
    }
    
    .svgColor {
      color
    }
    
    @keyframes timer-in {
      0% {
        transform: translateX(calc(100vw - 320px));
      }
    }
    
    @media only screen and (max-width: 768px){
      .modal__gatilho {
        display: none;
      }
    }`
  return (
    <Styled styles={styles}>
      <div className="modal__gatilho display-block zoly-gatilho">
        <div className="paper">
          <div className="modal__text">
            <div className="modal__text title">Ei, n??o perca tempo!</div>
            <div className="modal__text text">
              Essa oferta vai durar apenas:
            </div>
          </div>
          <div className="timer__around">
            <div className="timer__container">
              <img
                className="svg__color"
                src={
                  'https://storage.googleapis.com/cro_seo-hospedagem_de_assets/Imagens%20Kroton%20-%20Ex%20Maxymiser/anhanguera/SVGS/ampulheta.svg'
                }
              />
              <Timer
                initialTime={900000}
                direction="backward"
                formatValue={value => `${value < 10 ? `0${value}` : value}`}
              >
                {({ start, stop }) => {
                  component.start === true ? start() : stop()
                  return (
                    <React.Fragment>
                      <Timer.Minutes />:
                      <Timer.Seconds />
                    </React.Fragment>
                  )
                }}
              </Timer>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  )
}

TooltipGatilho.defaultProps = {
  color: 'black'
}

export default TooltipGatilho
