import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { notificationChange, setNotification } from '../reducers/notificationReducer';
import { TextField, Button, Divider } from '@mui/material';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    dispatch(createAnecdote(content));

    dispatch(setNotification(`you created a new anecdote '${content}'`, 10));
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <TextField
            variant='outlined'
            fullWidth={true}
            id='anecdote'
            label='Enter new anecdote...'
            name='anecdote'
          />
        </div>
        <Button variant='contained' type='submit'>
          create
        </Button>
      </form>
    </>
  );
};

export default AnecdoteForm;
