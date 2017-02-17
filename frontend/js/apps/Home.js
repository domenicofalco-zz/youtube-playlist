// see https://www.youtube.com/watch?v=Td-2D-_7Y2E

import React from 'react';
import { connect } from 'react-redux';

// fetch user date via promise
import { fetchPostsWithRedux } from '../action/actionCreators';

@connect((store) => {
  return {
    playlist: store.videos.playlist
  }
})
class Home extends React.Component {
  componentWillMount(){
    // fetch data from API
    this.props.dispatch(fetchPostsWithRedux());
  }

  render() {

    let list = this.props.playlist.map((video, i) => (
      <li key={i}>{video.title} {video.url} {video.image}</li>
    ));

    return (
      <div>
        <h1>Data from DB</h1>
        <ul>
          {list}
        </ul>
        <a href="/test">test</a>
      </div>
    );
  };
};

export default Home;
