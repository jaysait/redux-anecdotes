import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { notificationChange, setNotification } from '../reducers/notificationReducer';
const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
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
    </div>
  );
};

export default AnecdoteList;
