import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
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
  const anecdotes = useSelector((state) => state); //THIS IS FOR EX6.5, BUT I DONT LIKE HOW IT WORKS...TODO CHECK IF BEST WAY[...state].sort((a, b) => b.votes - a.votes));
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(voteAnecdote(anecdote.id))}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
