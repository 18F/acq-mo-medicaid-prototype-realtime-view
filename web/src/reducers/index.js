import updeep from 'updeep';
import cookies from 'react-cookie';
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

    default:
      break;
  }

  return newState;
}
