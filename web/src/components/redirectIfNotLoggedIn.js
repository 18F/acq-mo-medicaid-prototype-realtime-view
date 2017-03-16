import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

function redirectIfNotLoggedIn(props) {
  if (props.loggedIn) {
    return (
      <div>
        {props.children}
      </div>
    );
  }
  setTimeout(() => hashHistory.replace('/login'), 0);
  return null;
}

redirectIfNotLoggedIn.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    loggedIn: (state.user !== false)
  };
}

export default connect(mapStateToProps)(redirectIfNotLoggedIn);
