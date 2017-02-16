// dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// pages
import App from './components/App'
import Test from './components/Test'
import Remove from './components/Remove'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
          <Route path="/test" component={Test} />
          <Route path="/edit/:id" component={Remove} />
        </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));
