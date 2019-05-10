import {
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILURE,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIE_CASTS_SUCCESS,
  ADD_TO_FAVORITE_LIST_SUCCESS,
  LIST_FAVORITES_SUCCESS,
  LIST_FAVORITES_FAILURE,
} from '../actions/movie.actions';

const initialState = {
  items: [],
  item: '',
  casts_crew: [],
  favorites: [],
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
      item: action.resp.result,
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
    case ADD_TO_FAVORITE_LIST_SUCCESS:
    return {
      ...state,
      item: action.resp.result,
    }
    case LIST_FAVORITES_SUCCESS:
    return {
      ...state,
      favorites: action.resp.result,
    }
    case LIST_FAVORITES_FAILURE:
    return {
      ...state,
    }
    default:
    return state;
  }
};

export default movie;