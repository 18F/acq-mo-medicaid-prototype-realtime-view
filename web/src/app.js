import 'uswds';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Header, Footer, Login, LandingPage, Eligibility } from './components';
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

ReactDOM.render(
  <Provider store={stateStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/eligibility" component={Eligibility} />
        <Route path="/eligibility/:participantID" component={Eligibility} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
