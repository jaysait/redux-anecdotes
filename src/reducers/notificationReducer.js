const notificationReducer = (state = { timer: '', message: '' }, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, message: action.message };
    case 'SET_TIMER':
      return { ...state, timer: action.timer };
    default:
      return state;
  }
};

export const notificationChange = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  };
};
const timerChange = (timer) => {
  return {
    type: 'SET_TIMER',
    timer,
  };
};

export const setNotification = (text, seconds) => {
  return async (dispatch, getState) => {
    const st = getState();

    if (st.message.timer) {
      clearTimeout(st.message.timer);
    }
    dispatch(notificationChange(text));
    const timeoutId = setTimeout(() => {
      dispatch(notificationChange(''));
      dispatch(timerChange(''));
    }, seconds * 1000);
    dispatch(timerChange(timeoutId));
  };
};

export default notificationReducer;
