// see https://www.youtube.com/watch?v=Td-2D-_7Y2E
// SEE ALSO https://www.youtube.com/watch?v=GsyfB4URaYQ

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, saveData, removeData, editData } from '../action/actionCreators';
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
    removeData: bindActionCreators(removeData, dispatch),
    editData: bindActionCreators(editData, dispatch)
  })
)

class Home extends React.Component {
  constructor() {
    super();
    this.inputVal = this.inputVal.bind(this);
    this.submit = this.submit.bind(this);
    this.remove = this.remove.bind(this);
    this.editable = this.editable.bind(this);

    this.state = {
      inputVal: '',
    }
  }

  inputVal(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  // load from DB
  componentWillMount() {
    this.props.fetchData();
  }

  // add new
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

  // remove
  remove(e, id) {
    e.preventDefault();
    this.props.removeData(id);
  }

  // edit
  editable(e, id, val) {

    this.submit();
    return true;
    const updateVideo = {
      editable: val,
      url: '',
      image: ''
    };

    this.props.editData(id, val);

    this.setState({
      inputVal: ''
    })
  }

  render() {
    var list = this.props.videoList.map((video, i) => {
      return (
        <li key={video._id} >
          <TitleEditable id={video._id} editable={this.editable} remove={this.remove} title={video.title} change={this.inputVal} showEditor={this.state.showEditor} />
        </li>);
    });

    return (
      <div>
        <h1>DB List</h1>
        <form onSubmit={this.editable}>
          {list}
        </form>
        <form onSubmit={this.submit}>
          <input type="text" autoComplete="off" name="editable" value={this.state.inputVal} onChange={this.inputVal} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  };
};

/*
  ONLY FOR TESTING
*/
class TitleEditable extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.change =this.props.change;
    this.id = this.props.id;
    this.remove = this.props.remove;
    this.showEditor = this.showEditor.bind(this);
    this.inputVal = this.inputVal.bind(this);
    this.save = this.save.bind(this);
    this.editable = this.props.editable.bind(this);

    this.state = {
      inputVal: '',
      showEditor: false
    }
  }

  inputVal(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  showEditor(e) {
    e.preventDefault();
    this.setState({
      showEditor: !this.state.showEditor,
      inputVal: this.title
    })
  }

  save(e, id) {
    //e.preventDefault();

    this.setState({
      showEditor: !this.state.showEditor
    })

    this.editable(id, this.state.inputVal);
  }

  render() {
    return (
      <div style={{display: 'inline'}}>
        {this.state.showEditor &&
          <span>
            <input type="text" style={{width: 50 + 'px', marginRight: 20 + 'px'}} value={this.state.inputVal} onChange={this.inputVal} />
            <button onClick={(e) => this.save(e, this.id)} type="submit">save</button>
          </span>
        }
        {!this.state.showEditor &&
          <span>
            <span style={{marginRight: 20 + 'px'}}>{this.title}</span>
            <i style={{marginRight: 5 + 'px'}} onClick={(e) => this.remove(e, this.id)}>remove</i>
            <i onClick={(e) => this.showEditor(e)}>edit</i>
          </span>
        }
      </div>
    );
  }
}


export default Home;
