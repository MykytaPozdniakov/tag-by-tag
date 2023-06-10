import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <FormControl>
        <InputLabel>Filter</InputLabel>
        <Select value={value} onChange={onChange}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'status'}>Status</MenuItem>
          <MenuItem value={'category'}>Category</MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
