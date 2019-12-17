//import React from 'react'

const FilterItems = (arr, query) => {
    return arr.filter(obj => obj.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  };

export default FilterItems