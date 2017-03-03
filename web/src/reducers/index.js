import updeep from 'updeep';
import Actions from '../actions';

const stateShape = {
  user: false
};

export default function reducer(state = stateShape, action) {
  let newState = state;

  switch (action.type) {
    case Actions.Login.messages.SET_USER:
      newState = updeep({ user: action.user }, newState);
      break;

    default:
      break;
  }

  return newState;
}
