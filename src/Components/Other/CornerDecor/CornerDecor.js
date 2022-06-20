import React from "react";
import "./CornerDecor.css";

function CornerDecor() {
  return (
    <>
      <div className="decor-box db-top-left">
        <div className="db-tl-top"></div>
        <div className="db-tl-left"></div>
      </div>
      <div className="decor-box db-top-right">
        <div className="db-tr-top"></div>
        <div className="db-tr-right"></div>
      </div>

      <div className="decor-box db-bottom-left">
        <div className="db-bl-bottom"></div>
        <div className="db-bl-left"></div>
      </div>
      <div className="decor-box db-bottom-right">
        <div className="db-br-bottom"></div>
        <div className="db-br-right"></div>
      </div>
    </>
  );
}

export default CornerDecor;
