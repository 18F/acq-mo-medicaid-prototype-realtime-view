import updeep from 'updeep';
import cookies from 'react-cookie';
import { hashHistory } from 'react-router';
import Actions from '../actions';
import { setAPIHeader } from '../api';

const stateShape = {
  user: false,
  participants: [ ]
};

export default function reducer(state = stateShape, action) {
  let newState = state;

  switch (action.type) {
    case Actions.Login.messages.SET_USER:
      newState = updeep({ user: action.user }, newState);
      cookies.save('token', action.user.token);
      setAPIHeader('Authorization', action.user.token);
      break;

    case Actions.Login.messages.LOGOUT:
      newState = updeep({ user: false }, newState);
      cookies.remove('token');
      setAPIHeader('Authorization', undefined);
      hashHistory.replace('/');
      break;

    default:
      break;
  }

  return newState;
}
