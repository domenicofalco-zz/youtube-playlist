import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Test is a react component test</h1>
        <hr />
        <hr />
        <hr />
      </div>
    );
  }
}


ReactDOM.render(<Test />, document.getElementById('app'));
