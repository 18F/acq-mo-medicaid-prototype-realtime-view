import uswds from 'uswds';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header, Footer, LandingPage, Eligibility } from './components';
import reducers from './reducers';

const stateStore = createStore(reducers);

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
        <IndexRoute component={LandingPage} />
        <Route path="/eligibility" component={Eligibility} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
