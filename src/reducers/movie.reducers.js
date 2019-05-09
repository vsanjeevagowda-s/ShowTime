import {
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILURE,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_CASTS_SUCCESS
} from '../actions/movie.actions';

const initialState = {
  items: [],
  item: '',
  casts_crew: [],
}

const movie = (state = initialState, action) => {
  switch(action.type){
    case LIST_MOVIE_SUCCESS:
    return {
      ...state,
      items: action.resp.results,
    }
    case LIST_MOVIE_FAILURE:
    return {
      ...state
    }
    case GET_MOVIE_DETAILS_SUCCESS:
    return {
      ...state,
      item: action.resp
    }
    case GET_MOVIE_DETAILS_FAILURE:
    return {
      ...state,
    }
    case GET_MOVIE_CASTS_SUCCESS:
    return {
      ...state,
      casts_crew: action.resp
    }
    default:
    return state;
  }
};

export default movie;