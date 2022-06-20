import React, { useState } from "react";
import "./SearchFilters.css";
import arrowDown from "../../icons/arrow-down.svg";
import SearchFiltersOptions from "./SearchFiltersOptions";

function SearchFilters({ filterBy, updateFilter }) {
  const [isHiddenOptions, setIsHiddenOptions] = useState(true);

  const toggleIsHiddenOptions = () => {
    setIsHiddenOptions((optionsState) => !optionsState);
  };

  return (
    <div className="search-filters" onClick={toggleIsHiddenOptions}>
      {filterBy ? filterBy : "All Filters"}
      <img src={arrowDown} alt={`arrow icon`} />
      {!isHiddenOptions && (
        <SearchFiltersOptions filterBy={filterBy} updateFilter={updateFilter} />
      )}
    </div>
  );
}

export default SearchFilters;
