import React from "react";
import "./TransactionData.css";

function TransactionData({ hash, from, to, transactionType, result, amount }) {
  return (
    <div className="t-h-data">
      <div className="t-h-col-1">{hash}</div>
      <div className="t-h-col-2">{from}</div>
      <div className="t-h-col-3">{to}</div>
      <div className="t-h-col-4">
        {transactionType.type} {transactionType.cmcx ? <span>CMCX</span> : ""}
      </div>
      <div className={`t-h-col-5 ${result === "Success" ? "col-success" : ""}`}>
        {result}
      </div>
      <div className="t-h-col-6">{amount}</div>
    </div>
  );
}

export default TransactionData;
