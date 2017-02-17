/*
  CREATE ACTION
*/

/*export function addVideo(videoID, title, url, image) {
  return {
    type: 'ADD_VIDEO',
    videoID,
    title,
    url,
    image
  }
}

export function removeVideo(videoID, i) {
  return {
    type: 'REMOVE_VIDEO',
    videoID,
    i
  }
}

export function editVideo(videoID, title, url, image) {
  return {
    type: 'EDIT_VIDEO',
    videoID,
    title,
    url,
    image
  }
}*/

// fetch data
export function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPostsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPosts() {
  const URL = "http://localhost:8888/api";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    playlist: payload.playlist
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}
