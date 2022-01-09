import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

const SortDropDown = ({ handleSorting }) => {
  function handleSelect(e) {
    handleSorting(e);
  }

  return (
    <Dropdown className='col-4' onSelect={handleSelect}>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        SortBy
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey='title'>By name</Dropdown.Item>
        <Dropdown.Item eventKey='added_at'>By Date</Dropdown.Item>
        <Dropdown.Item eventKey='rating'>By Rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropDown;
