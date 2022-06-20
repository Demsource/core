import React, { useState } from "react";
import "./Search.css";
import searchIcon from "../../icons/search.svg";
import SearchFilters from "./SearchFilters";

function Search({ withFilters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <img src={searchIcon} alt="Search Icon" />
      <input
        type="search"
        placeholder="Search by Address / Txn ID / Token / Block"
        value={searchTerm}
        onChange={handleChange}
        style={withFilters ? { paddingRight: "150px" } : {}}
      />
      {withFilters && (
        <SearchFilters
          filterBy={filterBy}
          updateFilter={(option) => setFilterBy(option)}
        />
      )}
    </div>
  );
}

export default Search;
