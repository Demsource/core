import React, { useState } from "react";
import PopUp from "../PopUp/PopUp";
import AccountQRCodePopUp from "./AccountQRCodePopUp";
import "./AccountQRCode.css";
import clipboard from "../../icons/clipboard.svg";
import QRIcon from "../../icons/qr.svg";

const copyToClipboard = (QRCode) => {
  const el = document.createElement("textarea");
  el.value = QRCode;
  el.style.position = "absolute";
  el.style.height = "0px";
  el.style.width = "0px";
  el.style.left = "-100px";
  el.style.top = "-100px";
  el.style.opacity = "0";
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand("copy");

  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

function AccountQRCode() {
  const [displayPopup, setDisplayPopup] = useState(false);

  return (
    <div className="account-qr-code">
      <p className="qr">TPvJNLZVh1qgcvWKCpC8mZgyEfvLV Qs65H</p>
      <img
        className="clipboard"
        src={clipboard}
        alt="Copy to clipboard"
        onClick={() => {
          copyToClipboard(
            `${true ? "TPvJNLZVh1qgcvWKCpC8mZgyEfvLV Qs65H" : ""}`
          );
        }}
      />
      <img
        className="qr-icon"
        src={QRIcon}
        alt="QR"
        onClick={() => setDisplayPopup(true)}
      />
      {displayPopup && (
        <PopUp
          heading={"Account QR Code"}
          closePopUp={() => setDisplayPopup(false)}
          children={
            <AccountQRCodePopUp
              copyToClipboard={copyToClipboard}
              closePopUp={() => setDisplayPopup(false)}
            />
          }
        />
      )}
    </div>
  );
}

export default AccountQRCode;
