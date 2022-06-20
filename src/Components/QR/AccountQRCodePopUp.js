import React from "react";
import "./AccountQRCodePopUp.css";
import qrSample from "../../icons/qr-sample.png";
import clipboard from "../../icons/clipboard.svg";

function AccountQRCodePopUp({ copyToClipboard, closePopUp }) {
  return (
    <>
      <div className="popup-qr-img">
        <img src={qrSample} alt="QR" />
      </div>
      <div className="popup-qr-code">
        <h3>Account QR Code</h3>
        <div className="qr-code">
          <h4>KMeKssrW285WoPZptbHVEPjx5b5g1ALK1q</h4>
          <img
            src={clipboard}
            alt="Copy to clipboard"
            onClick={() => {
              copyToClipboard(
                `${true ? "KMeKssrW285WoPZptbHVEPjx5b5g1ALK1q" : ""}`
              );
            }}
          />
        </div>
      </div>
      <div className="popup-save-qr">
        <h5 onClick={() => closePopUp()}>Save QR Code</h5>
      </div>
    </>
  );
}

export default AccountQRCodePopUp;
