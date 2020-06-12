const initialState = {
  isFetching: false,
  smurfs: [],
  errror: "",
}

export const listReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_SMURFS_START":
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_SMURFS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: ''
      };
    case 'FETCH_SMURFS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      case "POST_SMURF_START":
        return {
          ...state,
          isFetching: true
        };
      case 'POST_SMURF_SUCCESS':
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
          error: ''
        };
    default:
      return state;
  }
}