// see https://www.youtube.com/watch?v=Td-2D-_7Y2E
// SEE ALSO https://www.youtube.com/watch?v=GsyfB4URaYQ

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickUser } from '../action/actionCreators';

@connect(
  //pass store-state as props
  state => ({
   users: state.users
  }),
  //pass actionCreators as props
  dispatch => ({
    clickUser: bindActionCreators(clickUser, dispatch)
  })
)
class Home extends React.Component {

  render() {
    var list = this.props.users.map((user) =>{
      return (
        <li
          key={user.id}
          onClick={()=> this.props.clickUser(user)}
        >
          {user.name}
        </li>
      );
    });

    return (
      <div>
        <h1>Dumb reducers</h1>
        <ul>
          {list}
        </ul>
        <a href="/test">test</a>
      </div>
    );
  };
};


export default Home;
