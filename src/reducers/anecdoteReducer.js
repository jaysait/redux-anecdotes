import anecdoteService from '../services/anecdotes';

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({ type: 'NEW_ANECDOTE', data: newAnecdote });
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    //TODO just add get by id method on service then just update it instead of all and find?
    const anecdotes = await anecdoteService.getAll();
    const anecdote = anecdotes.find((a) => a.id === id);
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    await anecdoteService.update(id, changedAnecdote);
    dispatch({ type: 'VOTE_ANECDOTE', data: { id } });
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote));
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }

  return state;
};

export default reducer;
