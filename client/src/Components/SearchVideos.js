import React, { useState } from 'react';
import { Box, Button, TextInput, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { FormSearch } from 'grommet-icons';

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
    <Grommet theme={grommet}>
      <Box direction='row' gap='small' width='medium'>
        <TextInput
          icon={<FormSearch />}
          placeholder='Search Videos'
          onChange={handleSearchWord}
        />
        <Button
          primary
          size='small'
          color='lightGreen'
          type='submit'
          label='search'
          onClick={handleSubmitSearch}
        />
      </Box>
    </Grommet>
  );
};

export default SearchVideos;
