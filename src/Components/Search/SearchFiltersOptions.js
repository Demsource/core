import React from "react";
import "./SearchFiltersOptions.css";

function SearchFiltersOptions({ filterBy, updateFilter }) {
  return (
    <ul className="search-filters-options">
      <li
        className={`${!filterBy ? "active-filter" : ""}`}
        onClick={() => {
          updateFilter("All FIlters");
        }}
      >
        All FIlters
      </li>
      <li
        className={`${filterBy === "Token" ? "active-filter" : ""}`}
        onClick={() => {
          updateFilter("Token");
        }}
      >
        Token
      </li>
      <li
        className={`${filterBy === "Accounts" ? "active-filter" : ""}`}
        onClick={() => {
          updateFilter("Accounts");
        }}
      >
        Accounts
      </li>
      <li
        className={`${filterBy === "Contract" ? "active-filter" : ""}`}
        onClick={() => {
          updateFilter("Contract");
        }}
      >
        Contract
      </li>
      <li
        className={`${filterBy === "Txn ID" ? "active-filter" : ""}`}
        onClick={() => {
          updateFilter("Txn ID");
        }}
      >
        Txn ID
      </li>
    </ul>
  );
}

export default SearchFiltersOptions;
