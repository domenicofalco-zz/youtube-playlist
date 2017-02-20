// see https://www.youtube.com/watch?v=Td-2D-_7Y2E
// SEE ALSO https://www.youtube.com/watch?v=GsyfB4URaYQ

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, saveData, removeData } from '../action/actionCreators';
import axios from 'axios';


@connect(

  //pass store-state as props
  state => ({
   videoList: state.videoList,
  }),

  //pass actionCreators as props
  dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    saveData: bindActionCreators(saveData, dispatch),
    removeData: bindActionCreators(removeData, dispatch)
  })
)

class Home extends React.Component {
  constructor() {
    super();
    this.inputVal = this.inputVal.bind(this);
    this.submit = this.submit.bind(this);
    this.remove = this.remove.bind(this);

    this.state = {
      inputVal: ''
    }
  }

  componentWillMount() {
    this.props.fetchData();
  }

  inputVal(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();

    const newVideo = {
      title: this.state.inputVal,
      url: '',
      image: ''
    };

    this.props.saveData(newVideo);

    this.setState({
      inputVal: ''
    })
  }

  remove(e) {
    e.preventDefault();
    this.props.removeData(e.target.id);
  }

  render() {
    var list = this.props.videoList.map((video, i) => {
      return (<li key={i}>{video.title} <i id={video._id} onClick={this.remove}>x</i></li>)
    })
    return (
      <div>
        <h1>DB List</h1>
        {list}
        <form onSubmit={this.submit}>
          <input type="text" name="title" autoComplete="off" value={this.state.inputVal} onChange={this.inputVal} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  };
};


export default Home;
