import React from 'react';
import FilterHotel from './filter/FilterHotel';
import Sort_Filter from './filter/components/Sort_Filter';
import Hotels from './hotels/Hotels';
import Pagination_Filter from './filter/components/Pagination_Filter';

const SearchPage = () => {
  return (
    <div>
      <FilterHotel />
      <section>
        <div>
          <h1>Jaipur: 858 properties found</h1>
          <Sort_Filter />
        </div>
        <Hotels />
        <Pagination_Filter />
      </section>
    </div>
  );
};

export default SearchPage;
