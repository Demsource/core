import React from "react";
import CornerDecor from "../Other/CornerDecor/CornerDecor";
import TransactionData from "./TransactionData";
import "./TransactionHistory.css";

function TransactionHistory() {
  return (
    <div className="transaction-history">
      <div className="t-h-header">
        <div className="t-h-col-1">Hash</div>
        <div className="t-h-col-2">From</div>
        <div className="t-h-col-3">To</div>
        <div className="t-h-col-4">Transaction Type</div>
        <div className="t-h-col-5">Result</div>
        <div className="t-h-col-6">Amount</div>
      </div>
      <div className="t-h-body">
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={10}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Trigger Smart Contracts", cmcx: false }}
          result={"Success"}
          amount={230}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Transfer", cmcx: true }}
          result={"Success"}
          amount={101}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={1.201}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={0.1111}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={0.00001}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={354}
        />
        <TransactionData
          hash={"0xC7...061b"}
          from={"TPibCCjU...3oHHx"}
          to={"TPibCCjU...3oHHx"}
          transactionType={{ type: "Stake", cmcx: true }}
          result={"Success"}
          amount={1}
        />
      </div>
      <CornerDecor />
    </div>
  );
}

export default TransactionHistory;
