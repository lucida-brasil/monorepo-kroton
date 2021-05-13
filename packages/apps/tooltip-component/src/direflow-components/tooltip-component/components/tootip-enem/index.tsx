import React from "react";
import { Styled } from "direflow-component";
import styles from "./tooltip-enem-component.style.css";

interface TooltipEnem {
  open: boolean;
  onClose: any;
}

const TooltipEnem = (props: TooltipEnem) => {
  const showHideClassName = props.open ? `modal__enem display-block` : `modal__enem display-none`;
  return (
    <Styled styles={styles}>
      <div className={showHideClassName}>
        <div className="paper">
        <a onClick={props.onClose} className="btn__close"></a>
            <div className="title">Ei, você sabia disso?</div>
            <div className="text">
              Você pode usar sua <strong>nota do Enem</strong> se fez a prova
              nos <strong>últimos dez anos</strong>. Se você optar pela
              inscrição através da nota do Enem, <strong>não precisará realizar o vestibular tradicional.</strong>
            </div>
          </div>
      </div>
    </Styled>
  );
};

export default TooltipEnem;
