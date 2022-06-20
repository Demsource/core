import React from "react";
import "./SliderCard.css";
import threeDots from "../../icons/three-dots.svg";

function SliderCard({ cardData, isSelected, keyId, selectCard }) {
  return (
    <div
      className="slider-card"
      style={
        isSelected
          ? { cursor: "default", border: "2px solid #0500FF", height: "172px" }
          : {}
      }
      onClick={() => {
        selectCard(keyId);
      }}
    >
      <div className="sc-heading">
        <img src={cardData?.avatar} alt="card avatar" />
        <h3>
          {cardData?.heading}{" "}
          {cardData?.cmcx ? <span className="cmcx">CMCX</span> : ""}
        </h3>
      </div>
      <div className="sc-infos">
        {cardData?.stake ? (
          <h4 className="i-stake">
            <div>
              <strong>Available:</strong> {cardData?.stake?.available}
            </div>
            <div>
              <strong>Stake:</strong> {cardData?.stake?.amount}
            </div>
          </h4>
        ) : (
          ""
        )}
        {cardData?.quantity ? (
          <h4>
            <div>
              <strong>Quantity:</strong> {cardData?.quantity}
            </div>
          </h4>
        ) : (
          ""
        )}
        <h4>
          <div>
            <strong>Value:</strong> {cardData?.value.amount}{" "}
            {cardData?.value.cmcx ? <span className="cmcx">CMCX</span> : ""}
            <i>{cardData?.value.approx}</i>
          </div>
        </h4>
      </div>
      {isSelected && (
        <div className="actions">
          <div>Send</div>
          <div>Receive</div>
          <div>JustSwap</div>
          <div className="three-dot">
            <img src={threeDots} alt="three dots" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderCard;
