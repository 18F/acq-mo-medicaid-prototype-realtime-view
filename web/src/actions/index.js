import Frisbee from 'frisbee';

const api = new Frisbee({
  baseURI: 'http://localhost:8081',
  headers: {
    'Content-type': 'application/json'
  }
});

export const Login = {
  messages: {
    SET_USER: 'set user object'
  },

  login(username, password) {
    return (dispatch) => {
      api.post('/login', { body: { username, password }}).then(res => {
        dispatch({ type: Login.messages.SET_USER, user: res.body });
      });
    };
  }
};

export default {
  Login
};
