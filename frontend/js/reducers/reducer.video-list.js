export default function(state = [], action) {

  switch(action.type) {
    case 'FETCH_DATA':
      return state;

    case 'FETCH_DATA_SUCCESS': {
      let newState = [].concat(state, action.payload);
      return newState;
    }

    case 'FETCH_DATA_FAIL': {
      let error = [].concat(state, action.payload);
      return error;
    }

    case 'SAVE_DATA': {
      return state;
    }
    case 'SAVE_DATA_SUCCESS': {
      let newState = [].concat(state, action.payload);
      return newState;
    }

    case 'SAVE_DATA_FAIL': {
      let error = [].concat(state, action.payload);
      return error;
    }

    case 'REMOVE_VIDEO': {
      return state;
    }

    case 'REMOVE_VIDEO_SUCCESS': {
      let newState = state.filter((video) => {
        return video._id !== action.payload
      })
      return newState;
    }

    case 'REMOVE_VIDEO_FAIL': {
      let error = [].concat(state, action.payload);
      return error;
    }

    default:
      return state;
  }

}
