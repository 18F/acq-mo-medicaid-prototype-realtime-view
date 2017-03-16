import 'uswds';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cookies from 'react-cookie';
import { setAPIHeader } from './api';
import { Login as LoginAction } from './actions';

import '../node_modules/uswds/src/stylesheets/uswds.scss';
import './styles/main.scss';
import { Header, Footer, Login, Logout, LandingPage, DCNLookup, Spenddown, Eligibility, Coverage, LoginRedirect } from './components';

import reducers from './reducers';

const stateStore = createStore(
  reducers,
  applyMiddleware(thunk)
);

const tokenFromCookie = cookies.load('token');
if (tokenFromCookie) {
  setAPIHeader('Authorization', tokenFromCookie);
  stateStore.dispatch(LoginAction.getUserInfo());
}

function App(props) {
  return (
    <div>
      <main>
        {props.children}
      </main>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

function requireLogin(Component) {
  // return () => (<LoginRedirect><Component /></LoginRedirect>);
  // For now, disable login
  return () => (<Component />);
}

ReactDOM.render(
  <Provider store={stateStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={requireLogin(DCNLookup)} />
        <Route path="/spenddown/:dcn" component={requireLogin(Spenddown)} />
        <Route path="/landing" component={requireLogin(LandingPage)} />
        <Route path="/eligibility" component={requireLogin(Eligibility)} />
        <Route path="/eligibility/:participantID" component={requireLogin(Eligibility)} />
        <Route path="/coverage" component={requireLogin(Coverage)} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
