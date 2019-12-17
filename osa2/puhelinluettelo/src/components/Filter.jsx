import React from 'react'

const Filter = (props) => {
    return (
        <div>
        <label htmlFor="filterinput">Filter results</label>
    <input
            type="text"
            className="form-control"
            id="filterinput"
            placeholder="Filter"
            value={props.filter}
            onChange={props.handleFilterChange}
          />
        </div>
    )
}
export default Filter;
