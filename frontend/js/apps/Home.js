// see https://www.youtube.com/watch?v=Td-2D-_7Y2E

import React from 'react';
import { connect } from 'react-redux';

// fetch user date via promise
import { fetchPostsWithRedux } from '../action/actionCreators';

@connect((store) => {
  return {
    title: "test"
  }
})
class Home extends React.Component {
  componentWillMount(){
    console.log(this.props.dispatch(fetchPostsWithRedux()));
    console.log(this.props.title)
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        <a href="/test"></a>
      </div>
    );
  };
};

export default Home;
