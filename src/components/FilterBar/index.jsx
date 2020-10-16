import React from 'react';
import './style.scss';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <button>Personas</button>
      <button>Challenges</button>
      <button>Tools</button>
      <button>Your deck</button>
    </div>
  );
}

export default FilterBar;