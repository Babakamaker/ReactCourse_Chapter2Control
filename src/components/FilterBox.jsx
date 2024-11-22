/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const FilterBox = ({ onFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterBox;
