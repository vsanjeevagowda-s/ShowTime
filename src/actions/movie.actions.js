export const LIST_MOVIE_SUCCESS = 'LIST_MOVIE_SUCCESS';
export const LIST_MOVIE_FAILURE = 'LIST_MOVIE_FAILURE';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';
export const GET_MOVIE_CASTS_SUCCESS = 'GET_MOVIE_CASTS_SUCCESS';
export const GET_MOVIE_CASTS_FAILURE = 'GET_MOVIE_CASTS_FAILURE';
export const ADD_TO_FAVORITE_LIST_SUCCESS = 'ADD_TO_FAVORITE_LIST_SUCCESS';
export const LIST_FAVORITES_SUCCESS = 'LIST_FAVORITES_SUCCESS';
export const LIST_FAVORITES_FAILURE = 'LIST_FAVORITES_FAILURE';

const API_KEY = process.env.REACT_APP_API_KEY;

const MOVIE_DETAILS_URL = process.env.REACT_APP_MOVIE_DETAILS_URL;

const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const listMovies = () => (dispatch) => {
  return fetch(`${ROOT_URL}/upcommingMovies`)
    .then(resp => resp.json())
    .then(resp => {
      return Promise.resolve(dispatch(listMoviesSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(listMoviesFailure(error)));
    })
}

const listMoviesSuccess = (resp) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    resp,
  }
}

const listMoviesFailure = (error) => {
  return {
    type: LIST_MOVIE_FAILURE,
    error,
  }
};

export const getMovieDetails = (movId) => (dispatch) => {
  return fetch(`${ROOT_URL}/upcommingMovies/${movId}`)
    .then(resp => resp.json())
    .then(resp => {
      return Promise.resolve(dispatch(getMovieDetailsSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(getMovieDetailsFailure(error)));
    })
};

const getMovieDetailsSuccess = resp => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    resp,
  }
}

const getMovieDetailsFailure = error => {
  return {
    type: GET_MOVIE_DETAILS_FAILURE,
    error,
  }
}

export const getMovieCasts = (movId) => (dispatch) => {
  const URL = `${MOVIE_DETAILS_URL}/${movId}/credits?api_key=${API_KEY}&language=en-US`;
  return fetch(URL)
    .then(resp => resp.json())
    .then(resp => {
      return Promise.resolve(dispatch(getMovieCaseSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(getMovieCastFailure(error)));
    });
};


const getMovieCaseSuccess = resp => {
  return {
    type: GET_MOVIE_CASTS_SUCCESS,
    resp,
  }
}

const getMovieCastFailure = error => {
  return {
    type: GET_MOVIE_CASTS_FAILURE,
    error,
  }
}

export const addTofavoriteList = (movieId) => (dispatch) => {
  return fetch(`${ROOT_URL}/favorites`,{
    method: 'post',
    body: JSON.stringify({ movieId }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(resp => resp.json())
    .then(resp => {
      return Promise.resolve(dispatch(addToFavoriteListSuccess(resp)))
    })
    .catch(error => {
      return Promise.reject(dispatch(addToFavoriteListFailure(error)));
    });
};

const addToFavoriteListSuccess = (resp) => {
  return {
    type: ADD_TO_FAVORITE_LIST_SUCCESS,
    resp,
  }
}

const addToFavoriteListFailure = (error) => {
  return {
    type: addToFavoriteListFailure,
    error,
  }
};

export const listFavorites = () => (dispatch) => {
  return fetch(`${ROOT_URL}/favorites`)
  .then(resp => resp.json())
  .then(resp => {
    return Promise.resolve(dispatch(listFavoritesSuccess(resp)))
  })
  .catch(error => {
    return Promise.reject(dispatch(listFavoritesFailure(error)));
  })
};

const listFavoritesSuccess = (resp) => {
  return {
    type: LIST_FAVORITES_SUCCESS,
    resp,
  }
};

const listFavoritesFailure = (error) => {
  return {
    type: LIST_FAVORITES_FAILURE,
    error,
  }
}