import React, { useState } from "react";

import "./search.css";

export const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="containerBelow">
      <div className="titleOfContainerBelow" data-testid="search">
        <li>Search top news from Great Britain by term</li>
      </div>
      <form className="searchForm">
        <input
          placeholder="Search term..."
          value={searchQuery}
          onChange={handleInputChange}
          className="searchTermInputField"
        />
      </form>
    </div>
  );
};
