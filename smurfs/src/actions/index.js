import axios from "axios";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_SMURFS_START' });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_SMURFS_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};

export const postSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type: "POST_SMURFS_START" });
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: "POST_SMURF_SUCCESS", payload: res.data})
    })
    getSmurfs();
  }
}