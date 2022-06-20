import React from "react";
import ActionsCardProgressBar from "./ActionsCardProgressBar";
import "./ACCOREPower.css";

function ACCOREPower() {
  return (
    <div className="ac-core-power">
      <h3>CORE Power</h3>
      <h4>
        Unwithdrawn Rewards: <span>{0}</span> <strong>CMCX</strong>
      </h4>
      <div className="ac-pbs-actions-wrapper">
        <div className="pb-wrap">
          <ActionsCardProgressBar
            proportion={{ state: 20, max: 20 }}
            desc={{
              heading: "CORE Power",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quaerat!",
            }}
          />
        </div>
        <div className="ac-actions">
          <div className={`ac-action ${false ? "aca-disabled" : ""}`}>
            Get Votes
          </div>
          <div className={`ac-action ${false ? "aca-disabled" : ""}`}>
            Votes
          </div>
          <div className={`ac-action ${true ? "aca-disabled" : ""}`}>Claim</div>
        </div>
      </div>
    </div>
  );
}

export default ACCOREPower;
