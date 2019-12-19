import React from 'react'

const Filter = (props) => {
    return (
      <div>
        <label htmlFor="filterinput">Find a Country</label>
        <input
          type="text"
          className="form-control"
          id="filterinput"
          placeholder="Country"
          value={props.filter}
          onChange={props.handleFilterChange}
        />
      </div>
    );
}
export default Filter;
