import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Login as LoginActions } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      showPassword: false
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentWillMount() {
    if (this.props.user) {
      hashHistory.replace('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      hashHistory.replace('/');
    }
  }

  setUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  toggleShowPassword(e) {
    this.setState({
      showPassword: e.target.checked
    });
  }

  doLogin() {
    this.props.performLogin(this.state.username, this.state.password);
  }

  clearForm() {
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="login_username">Username</label>
        <input type="text" id="login_username" value={this.state.username} onChange={this.setUsername} />

        <label htmlFor="login_password">Password</label>
        <input type={this.state.showPassword ? 'text' : 'password'} id="login_password" value={this.state.password} onChange={this.setPassword} />
        <input id="login_show_password" type="checkbox" name="login_show_password" value="truth" onChange={this.toggleShowPassword} />
        <label htmlFor="login_show_password">Show password</label>

        <button onClick={this.doLogin}>Login</button>
        <button className="usa-button-secondary" onClick={this.clearForm}>Clear</button>
      </div>
    );
  }
}

Login.propTypes = {
  user: React.PropTypes.shape(),
  performLogin: React.PropTypes.func.isRequired
};

Login.defaultProps = {
  user: false
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    performLogin(username, password) {
      dispatch(LoginActions.login(username, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
