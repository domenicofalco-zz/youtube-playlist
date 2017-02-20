import axios from 'axios';

const getURI = 'http://localhost:8888/api/playlists';
const postURI = 'http://localhost:8888/insert';
const removeURI = 'http://localhost:8888/delete/'

export function fetchData() {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA' });
    axios.get(getURI)
      .then(function (response) {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'FETCH_DATA_FAIL', payload: error })
      });
  }
}

export function saveData(video) {
  return dispatch => {
    dispatch({ type: 'SAVE_DATA' });
    axios.post(postURI, video)
      .then(function (response) {
        dispatch({ type: 'SAVE_DATA_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'SAVE_DATA_FAIL', payload: error })
      });
    }
};

export function removeData(videoId) {
  return dispatch => {
    dispatch({ type: 'REMOVE_VIDEO' });
    axios.post(removeURI + videoId)
      .then(function (response) {
        dispatch({ type: 'REMOVE_VIDEO_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'REMOVE_VIDEO_FAIL', payload: error })
      });
    }
};
