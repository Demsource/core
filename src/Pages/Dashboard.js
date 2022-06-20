import React from "react";
import Search from "../Components/Search/Search";
import AccountQRCode from "../Components/QR/AccountQRCode";
import ActionsCard from "../Components/ActionsCard/ActionsCard";
import ACResources from "../Components/ActionsCard/ACResources";
import ACCOREPower from "../Components/ActionsCard/ACCOREPower";
import AssetsSlider from "../Components/AssetsSlider/AssetsSlider";
import TransactionHistory from "../Components/TransactionHistory/TransactionHistory";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard">
      <Search withFilters={true} />
      <AccountQRCode />
      <div className="action-cards">
        <ActionsCard children={<ACResources />} />
        <ActionsCard children={<ACCOREPower />} />
      </div>
      <AssetsSlider />
      <TransactionHistory />
    </main>
  );
}

export default Dashboard;
