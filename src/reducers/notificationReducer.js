const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;

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

export const setNotification = (text, seconds) => {
  return async (dispatch) => {
    dispatch(notificationChange(text));
    setTimeout(() => {
      dispatch(notificationChange(''));
    }, seconds * 1000);
  };
};

export default notificationReducer;
