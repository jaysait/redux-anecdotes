import React from 'react';
import { filterChange } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(filterChange(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      <TextField
        id='filter'
        label='enter filter...'
        type='search'
        variant='filled'
        name='filter'
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
