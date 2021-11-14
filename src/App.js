import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import { AppBar, Box, Typography, Container } from '@mui/material';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Typography variant='h5' component='div' align='center' sx={{ flexGrow: 1 }}>
              Anecdotes
            </Typography>
          </AppBar>
        </Box>
      </Container>
      <br />
      <Container>
        <Notification />
        <br />
        <Filter />
        <AnecdoteList />
      </Container>
      <br />
      <Container>
        <AnecdoteForm />
      </Container>
    </div>
  );
};

export default App;
