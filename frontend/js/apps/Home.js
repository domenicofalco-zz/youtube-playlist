import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, saveData } from '../action/actionCreators';
import axios from 'axios';
import { Button, FormControl } from 'react-bootstrap';

@connect(

  //pass store-state as props
  store => ({
   videoList: store.videoList,
  }),

  //pass actionCreators as props
  dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    saveData: bindActionCreators(saveData, dispatch)
  })
)

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
      playlistName: '',
      videoUrl: ''
    }
  }

  openForm(e) {
    e.preventDefault();

    this.setState({
      isVisible: !this.state.isVisible,
      playlistName: '',
      videoUrl: ''
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { playlistName, videoUrl } = this.state;

    const newVideo = {
      playlistName,
      videoUrl
    };

    this.props.saveData(newVideo);

    this.setState({
      isVisible: false,
      playlistName: '',
      videoUrl: ''
    });

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateYouTubeUrl() {
    const { videoUrl } = this.state;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);

    return match && match[2].length == 11;
  }

  componentWillMount() {
    this.props.fetchData();
  }

  displayVideo() {
    return (
      <ul>
        {this.props.videoList.map((video, i) =>
          <li key={video._id}>
            Playlist: {video.playlistName}<br />
            Playlist: {video.videoUrl}
          </li>
        )}
      </ul>
    );
  }

  render() {
    let form;

    if(this.state.isVisible) {
      form = <form onSubmit={(e) => this.onSubmit(e)}>

          <FormControl
            value={this.state.videoUrl}
            type='text'
            name='videoUrl'
            onChange={(e) => this.onChange(e)}
            placeholder='Youtube url'
          />
          <FormControl
            value={this.state.playlistName}
            type='select'
            name='playlistName'
            onChange={(e) => this.onChange(e)}
            placeholder='Playlist Name'
          />

          <Button onClick={(e) => this.openForm(e)} bsStyle='link'>Cancel</Button>
          <Button type='submit' bsStyle='primary'>Save</Button>
        </form>;
    } else {
      form = <Button onClick={(e) => this.openForm(e)} bsStyle='primary'>Add Video</Button>;
    }

    return (
      <div>
        {this.props.videoList && this.displayVideo()}
        {form}
      </div>
    );
  };
};

export default Home;
