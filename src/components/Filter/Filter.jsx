import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './Filter.css';

export const Filter = ({ label, options, value, onChange, ...props }) => {
  return (
    <div className="filter">
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

Filter.propTypes = {
  /**
   * Label for the filter
   */
  label: PropTypes.string,
  /**
   * Options for the filter
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * Current value of the filter
   */
  value: PropTypes.string,
  /**
   * Handler to be called when the filter value changes
   */
  onChange: PropTypes.func,
};

Filter.defaultProps = {
  label: 'Filter',
  options: ['all', 'status', 'category', 'date'],
  value: 'all',
  onChange: undefined,
};