function videos(state = {}, action) {

  switch (action.type) {

    case 'FETCH_REQUEST': {
      return state;
    }

    case 'FETCH_SUCCESS': {
      let newState = Object.assign({}, state, action.playlist);
      return newState;
    }

    case 'FETCH_ERROR': {
      return state;
    }

    default: {
      return state
    }

  }

}

export default videos;
