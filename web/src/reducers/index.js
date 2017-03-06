import updeep from 'updeep';
import cookies from 'react-cookie';
import Actions from '../actions';
import api from '../api';

const stateShape = {
  token: cookies.load('token'),
  participants: [ ]
};

export default function reducer(state = stateShape, action) {
  let newState = state;

  switch (action.type) {
    case Actions.Login.messages.SET_USER:
      newState = updeep({ user: action.user }, newState);
      cookies.save('token', action.user.token);
      api.setHeader('Authorization', action.user.token);
      break;

    default:
      break;
  }

  return newState;
}
