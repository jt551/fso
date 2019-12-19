const FilterCountries = (arr, query) => {
    return arr.filter(obj => obj.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  };

export default FilterCountries;