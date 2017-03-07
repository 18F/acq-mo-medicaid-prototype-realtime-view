import updeep from 'updeep';
import cookies from 'react-cookie';
import { hashHistory } from 'react-router';
import { Login as LoginActions } from '../actions';
import { setAPIHeader, removeAPIHeader } from '../api';

const stateShape = {
  user: false,
  participants: []
};

export default function reducer(state = stateShape, action) {
  let newState = state;

  switch (action.type) {
    case LoginActions.messages.SET_USER:
      newState = updeep({ user: action.user }, newState);
      cookies.save('token', action.user.token);
      setAPIHeader('Authorization', action.user.token);
      break;

    case LoginActions.messages.LOGOUT:
      newState = updeep({ user: false }, newState);
      cookies.remove('token');
      removeAPIHeader('Authorization');
      hashHistory.replace('/');
      break;

    default:
      break;
  }

  return newState;
}
