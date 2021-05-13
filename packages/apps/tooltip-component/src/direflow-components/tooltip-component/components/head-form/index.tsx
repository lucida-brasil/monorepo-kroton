import React, { useEffect, useState } from "react";
import TooltipEnem from "../tootip-enem";
import styles from "./head-form-component.style.css";
import { Styled } from "direflow-component";
import Modal from "@ui-components/components"


function simulateMouseClick() {
  const enem = document.getElementById("enem");
  const mouseEvent: any = {
    view: window,
    isTrusted: true,
    bubbles: true,
    cancelable: true
  }
  if (enem)
    enem.dispatchEvent(
      new MouseEvent("click", mouseEvent)
    );
}

const HeadFormComponent = () => {
  const [btnEnemClick, setEnemClick] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => setOpenDialog(false);
  useEffect(() => {
    window.setTimeout(() => setOpenDialog(true), 3000);
  }, []);

  const handleEnemClick = () => {
    if (btnEnemClick === false) simulateMouseClick();
    setEnemClick(true);
  };

  const handleVestibularClick = () => {
    if (btnEnemClick === true) simulateMouseClick();
    setEnemClick(false);
  };

  return (
    <Styled styles={styles}>
      <div>
        <div className="container">
          <div>
            <h4 className="font text">
              {"Como você gostaria de ingressar na Anhanguera?"}
            </h4>
             <Modal></Modal>
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
          <TooltipEnem open={openDialog} onClose={handleClose}/>
        </div>
      </div>
    </Styled>
  );
};

export default HeadFormComponent;
