import fetch from 'fetch';

export const Login = {
  messages: {
    SET_USER: 'set user object'
  },

  setUser(username) {
    return { type: Login.messages.SET_USER, user: { username }};
  }
};

export default {
  Login
};
