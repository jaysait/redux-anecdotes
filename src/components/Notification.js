import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
const Notification = () => {
  const notification = useSelector((state) => state.message.message);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  if (notification === '') {
    return null;
  }
  return (
    <Alert variant='filled' severity='success'>
      {notification}
    </Alert>
  );
};

export default Notification;
