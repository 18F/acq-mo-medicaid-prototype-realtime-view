import React from 'react';
import { connect } from 'react-redux';
import { Login as loginActions } from '../actions';

function logout(props) {
  setTimeout(() => props.logout(), 0);
  return null;
}

function mapDispatchToProps(dispatch) {
  return {
    logout() {
      dispatch(loginActions.logout());
    }
  }
}

export default connect(null, mapDispatchToProps)(logout);
