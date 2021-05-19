/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Styled } from "direflow-component";

// eslint-disable-next-line react/prop-types
const TooltipEnem = ({ open, onClose, color }) => {
  var styles = `
  .modal__enem {
    width: 15.5rem;
    height: 10rem;
    filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));
  }
  
  .paper {
    line-height: 1.6;
    background-color: white;
    border-radius: 4px;
    box-shadow: 5;
  }
  
  .title {
    align-self: flex-start;
    color: ${color};
    font-weight: 700;
    font-size: 0.97rem;
    padding: 11px 74px 7px 17px;
  }
  
  .text {
    padding: 0 16px 22px 17px;
    font-size: 12px;
  }
  
  .btn__close::after {
    position: absolute;
    right: 0;
    content: "X";
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #879fad;
    margin-top: 8px;
    margin-right: 12px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  .display-block {
    display: block;
  }
  
  .display-none {
    display: none;
  }
  
  @media only screen and (max-width: 768px){
    .modal__enem {
      display: none;
    }
  }
  `;
  const showHideClassName = open
    ? `modal__enem display-block`
    : `modal__enem display-none`;
  return (
    <Styled styles={styles}>
      <div className={showHideClassName}>
        <div className="paper">
          <a onClick={onClose} className="btn__close"></a>
          <div className="title">Ei, você sabia disso?</div>
          <div className="text">
            Você pode usar sua <strong>nota do Enem</strong> se fez a prova nos{" "}
            <strong>últimos dez anos</strong>. Se você optar pela inscrição
            através da nota do Enem,{" "}
            <strong>não precisará realizar o vestibular tradicional.</strong>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default TooltipEnem;
