import Frisbee from 'frisbee';
import { api } from '../api';

export const Login = {
  messages: {
    SET_USER: 'set user object'
  },

  login(username, password) {
    return (dispatch) => {
      api().post('/login', { body: { username, password }}).then(res => {
        dispatch({ type: Login.messages.SET_USER, user: res.body });
      });
    };
  }
};

export default {
  Login
};
