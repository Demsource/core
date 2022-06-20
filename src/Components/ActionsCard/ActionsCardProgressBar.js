import React, { useEffect, useRef, useState } from "react";
import infoIcon from "../../icons/info.svg";
import "./ActionsCardProgressBar.css";

function ActionsCardProgressBar({ proportion, desc }) {
  const [showDescription, setShowDescription] = useState(false);

  const descRef = useRef(null);

  const handleClickOutside = (event) => {
    if (descRef && !descRef.current.contains(event.target)) {
      setShowDescription(false);
    }
  };

  useEffect(() => {
    if (showDescription)
      document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDescription]);

  return (
    <div className="ac-progress-bar">
      <div className="pb-info">
        <div className="pbi-proportion">
          {proportion.state}/{proportion.max}
        </div>
        <div className="pbi-desc">
          <img
            src={infoIcon}
            alt="Info Icon"
            onClick={() => setShowDescription((descState) => !descState)}
          />
          <h5>{desc.heading}</h5>
          {showDescription && (
            <div ref={descRef} className="desc-text">
              {desc.text}
              <div className="dt-figure"></div>
            </div>
          )}
        </div>
      </div>
      <div className="pb">
        <div
          className="pb-fill"
          style={{ width: (proportion.state / proportion.max) * 100 + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default ActionsCardProgressBar;
