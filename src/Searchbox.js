import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <input type="text" placeholder="Search Robots" onChange={searchChange} />
  );
};

export default Searchbox;
