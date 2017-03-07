import 'uswds';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Header, Footer, Login, LandingPage, Eligibility, LoginRedirect } from './components';
import reducers from './reducers';

const stateStore = createStore(
  reducers,
  applyMiddleware(thunk)
);

function App(props) {
  return (
    <div>
      <Header />
        <main>
          {props.children}
        </main>
      <Footer />
    </div>
  );
}

function requireLogin(Component) {
  return () => (<LoginRedirect><Component/></LoginRedirect>);
}

ReactDOM.render(
  <Provider store={stateStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={requireLogin(LandingPage)} />
        <Route path="/landing" component={requireLogin(LandingPage)} />
        <Route path="/eligibility" component={requireLogin(Eligibility)} />
        <Route path="/eligibility/:participantID" component={requireLogin(Eligibility)} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
