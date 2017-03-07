import Frisbee from 'frisbee';
import { api, setAPIHeader } from '../api';

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
  },

  getUserInfo() {
    return (dispatch) => {
      api().get('/login').then(res => {
        if (res.status === 200) {
          dispatch({ type: Login.messages.SET_USER, user: res.body });
        } else {
          setAPIHeader('Authorization', undefined);
        }
      })
    };
  }
};

export default {
  Login
};
