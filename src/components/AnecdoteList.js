import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { notificationChange, setNotification } from '../reducers/notificationReducer';
import { List, ListItem, ListItemText, Button } from '@mui/material';
const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <ListItem>
        <ListItemText
          primary={anecdote.content}
          secondary={`has ${anecdote.votes} votes`}></ListItemText>

        <Button variant='contained' onClick={handleClick}>
          vote
        </Button>
      </ListItem>
    </div>
  );
};
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    if (state.filter === '') {
      return state.anecdotes;
    } else {
      return state.anecdotes.filter((anec) => {
        return anec.content.toLowerCase().includes(state.filter.toLowerCase());
      });
    }
  }); //THIS IS FOR EX6.5, BUT I DONT LIKE HOW IT WORKS...TODO CHECK IF BEST WAY[...state].sort((a, b) => b.votes - a.votes));
  return (
    <div>
      <List dense={true}>
        {anecdotes.map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(setNotification(`you voted '${anecdote.content}'`, 10));

              dispatch(voteAnecdote(anecdote.id));
            }}
          />
        ))}
      </List>
    </div>
  );
};

export default AnecdoteList;
