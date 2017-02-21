import axios from 'axios';
import config from '../../../app-config';

export function fetchData() {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA' });
    axios.get(config.playlistAPI)
      .then(function (response) {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'FETCH_DATA_FAIL', payload: error })
      });
  }
};

export function saveData(video) {
  return dispatch => {
    dispatch({ type: 'SAVE_DATA' });
    axios.post(config.insertURI, video)
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
    axios.post(config.removeURI + videoId)
      .then(function (response) {
        dispatch({ type: 'REMOVE_VIDEO_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'REMOVE_VIDEO_FAIL', payload: error })
      });
    }
};

export function editData(id, video) {
  return dispatch => {
    dispatch({ type: 'EDIT_VIDEO' });
    axios.post(config.editURI + id, video)
      .then(function (response) {
        dispatch({ type: 'EDIT_VIDEO_SUCCESS', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'EDIT_VIDEO_FAIL', payload: error })
      });
    }
};
