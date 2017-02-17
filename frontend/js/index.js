// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// pages
import Layout from './apps/Layout';
import Home from './apps/Home';
import Test from './apps/Test';

// store
import store, { history } from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>

            <IndexRoute component={Home} />
            <Route path="test" component={Test} />

          </Route>
        </Router>
      </Provider>
    );
  };
};


ReactDOM.render(<App />, document.getElementById('app'));
