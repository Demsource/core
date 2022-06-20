import React, { useState } from "react";
import SliderCard from "./SliderCard";
import "./AssetsSlider.css";
import add from "../../icons/add.svg";
import toggleOn from "../../icons/toggle-on.svg";
import toggleOff from "../../icons/toggle-off.svg";
import cardAvatar_1 from "../../icons/card-avatar-1.svg";
import cardAvatar_2 from "../../icons/card-avatar-2.svg";
import cardAvatar_3 from "../../icons/card-avatar-3.svg";

function AssetsSlider() {
  const [stakedOnly, setStakedOnly] = useState(false);
  const [selectedCard, setSelectedCard] = useState(1);

  const selectCard = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="slider-wrapper">
      <div className="s-header">
        <div className="s-h-actions">
          <div className="add-assets">
            <img src={add} alt="Add Assets Icon" />
            <div>Add Assets</div>
          </div>
          <div
            className="staked-filter"
            onClick={() => {
              setStakedOnly((stakedState) => !stakedState);
            }}
          >
            <img
              src={stakedOnly ? toggleOn : toggleOff}
              alt="Staked only filter toggle"
            />
            <div>Staked only</div>
          </div>
        </div>
        <div className="s-h-search">
          <input type="search" placeholder="Search to Token" />
        </div>
      </div>
      <div className="slider-cards">
        <SliderCard
          keyId={1}
          selectCard={selectCard}
          cardData={{
            avatar: cardAvatar_1,
            heading: "CMCX (CMCX)",
            cmcx: false,
            quantity: false,
            stake: { available: 345.400214, amount: 30 },
            value: { amount: "345.400214", cmcx: true, approx: "(~ $20.1231)" },
          }}
          isSelected={selectedCard === 1 ? true : false}
        />
        <SliderCard
          keyId={2}
          selectCard={selectCard}
          cardData={{
            avatar: cardAvatar_2,
            heading: "CMCX (CMCX)",
            cmcx: false,
            quantity: false,
            stake: { available: 345.400214, amount: 30 },
            value: { amount: "345.400214", cmcx: true, approx: "(~ $20.1231)" },
          }}
          isSelected={selectedCard === 2 ? true : false}
        />
        <SliderCard
          keyId={3}
          selectCard={selectCard}
          cardData={{
            avatar: cardAvatar_3,
            heading: "CMCX (CMCX)",
            cmcx: false,
            quantity: false,
            stake: { available: 345.400214, amount: 30 },
            value: { amount: "345.400214", cmcx: true, approx: "(~ $20.1231)" },
          }}
          isSelected={selectedCard === 3 ? true : false}
        />
      </div>
      <div className="s-lift-arrows"></div>
    </div>
  );
}

export default AssetsSlider;
