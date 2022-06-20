import React from "react";
import ActionsCardProgressBar from "./ActionsCardProgressBar";
import "./ACResources.css";

function ACResources() {
  return (
    <div className="ac-resources">
      <h3>Resources</h3>
      <div className="ac-pbs-actions-wrapper">
        <div className="pb-with-action">
          <ActionsCardProgressBar
            proportion={{ state: 102, max: 321 }}
            desc={{
              heading: "Energy",
              text: "Abides pot bands, dumb internal links founder sowing doubt merchantibility.",
            }}
          />
          <div className="ac-action">Obtain</div>
        </div>
        <div className="pb-with-action">
          <ActionsCardProgressBar
            proportion={{ state: 1205, max: 1645 }}
            desc={{
              heading: "Bandwidth",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quaerat!",
            }}
          />
          <div className="ac-action">Rent</div>
        </div>
      </div>
    </div>
  );
}

export default ACResources;
