import React from 'react';
import { TextField } from '@material-ui/core';

const Search= ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label="Search"
      variant="outlined"
    />
  );
};

export default Search;