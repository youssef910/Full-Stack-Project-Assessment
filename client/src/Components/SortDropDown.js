import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Box, Select } from 'grommet';
import { Unsorted } from 'grommet-icons';

const SortDropDown = ({ handleSorting }) => {
  const objectOptions = [
    {
      label: 'By Date',
      value: 'added_at',
    },
    {
      label: 'By Name',
      value: 'title',
    },
    {
      label: 'By Rating',
      value: 'rating',
    },
  ];
  return (
    <Box fill align='center' justify='center'>
      <Select
        icon={<Unsorted color='blue' />}
        id='select'
        name='select'
        placeholder='Sort By'
        labelKey='label'
        valueKey={{ key: 'value', reduce: true }}
        value={objectOptions.value}
        options={objectOptions}
        onChange={({ value: nextValue }) => {
          handleSorting(nextValue);
        }}
      />
    </Box>
  );
};

export default SortDropDown;
