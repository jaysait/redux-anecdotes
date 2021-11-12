import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import anecdoteReducer from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer, { notificationChange } from './reducers/notificationReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  message: notificationReducer,
});

const store = createStore(reducer, composeWithDevTools());

//console.log('state...', store.getState());
//store.dispatch(notificationChange('what the ....'));
//console.log('state...', store.getState());
export default store;
