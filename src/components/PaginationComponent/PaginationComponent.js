import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = ({ count, page, onChange }) => {
  const handleChange = (event, value) => {
    onChange(value);
  };

  return (
    <Pagination count={count} page={page} onChange={handleChange} />
  );
};

export default PaginationComponent;
