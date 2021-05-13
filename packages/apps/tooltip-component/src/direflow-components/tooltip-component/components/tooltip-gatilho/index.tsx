import React from "react";
import { Styled } from "direflow-component";
import styles from "./tooltip-gatilho-component.style.css";
import Timer from "react-compound-timer";

const TooltipGatilho = () => {
  //   const showHideClassName = true
  //     ? `modal__gatilho display-block`
  //     : `modal__gatilho display-none`;
  return (
    <Styled styles={styles}>
      <div className="modal__gatilho display-block">
        <div className="paper">
          <div className="modal__text">
            <div className="modal__text title">Ei, não perca tempo!</div>
            <div className="modal__text text">
              Essa oferta vai durar apenas:
            </div>
          </div>
        <div className="timer__around">
          <div className="timer__container">
              <img
                  src={
                    "https://storage.googleapis.com/cro_seo-hospedagem_de_assets/Imagens%20Kroton%20-%20Ex%20Maxymiser/anhanguera/SVGS/ampulheta.svg"
                  }
                />
                <Timer
                  initialTime={900000}
                  direction="backward"
                  formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
                >
                  {() => (
                    <React.Fragment>
                      <Timer.Minutes />:
                      <Timer.Seconds />
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
          </div>
        </div>
    </Styled>
  );
};

export default TooltipGatilho;
