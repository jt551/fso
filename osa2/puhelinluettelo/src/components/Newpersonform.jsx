import React from 'react'

const NewPersonForm = (props) => {
    return (
        <div>
        <form onSubmit={props.formSubmit}>
        <div className="form-group">
          <label htmlFor="nameinput">Add new name</label>
          <input
            type="text"
            className="form-control"
            id="nameinput"
            placeholder="Name"
            value={props.newName}
            onChange={props.handleChange}
          />
          <label htmlFor="phoneinput">number</label>
          <input
            type="text"
            className="form-control"
            id="phoneinput"
            placeholder="Number"
            value={props.newNumber}
            onChange={props.handleNumChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
         Add
        </button>
      </form>
        </div>
    )
}
export default NewPersonForm;
