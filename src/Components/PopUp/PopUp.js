import React from "react";
import "./PopUp.css";
import closePopup from "../../icons/close-popup.svg";

function PopUp({ heading, closePopUp, children }) {
  return (
    <div
      className="popup-background"
      onClick={(e) => {
        e.target.className === "popup-background" && closePopUp();
      }}
    >
      <div className="qr-popup">
        <div className="popup-heading">
          <h2>{heading}</h2>
          <img
            src={closePopup}
            alt="Close Popup Icon"
            onClick={() => closePopUp()}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default PopUp;
