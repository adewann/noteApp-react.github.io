// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ keyword, onSearch }) => {
  return (
    <div className="note-search">
      <input
        type="text"
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Cari catatan..."
      />
    </div>
  );
};

export default SearchBar;
