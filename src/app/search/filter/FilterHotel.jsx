import React from 'react';
import Star_filter from './components/Star_filter';
import Price_filter from './components/Price_filter';

import Pagination_Filter from './components/Pagination_Filter';

const FilterHotel = () => {
  return (
    <aside>
      <h3>Filter By:</h3>
      <Star_filter />
      <Price_filter />
    </aside>
  );
};

export default FilterHotel;
