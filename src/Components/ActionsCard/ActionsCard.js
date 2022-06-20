import React from "react";
import CornerDecor from "../Other/CornerDecor/CornerDecor";
import "./ActionsCard.css";

function ActionsCard({ children }) {
  return (
    <div className="actions-card">
      {children}
      <CornerDecor />
    </div>
  );
}

export default ActionsCard;
