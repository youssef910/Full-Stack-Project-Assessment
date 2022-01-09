import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchVideos = ({ handleSearch }) => {
  const initialState = '';
  const [searchWord, setSearchWord] = useState(initialState);
  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleSearch(searchWord);
    setSearchWord(initialState);
  };
  return (
    <Form className='d-flex col-4' onSubmit={handleSubmitSearch}>
      <FormControl
        type='search'
        placeholder='Search'
        className='me-2'
        value={searchWord}
        onChange={handleSearchWord}
      />
      <Button variant='success' onClick={handleSubmitSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchVideos;
