export const LIST_MOVIE_SUCCESS = 'LIST_MOVIE_SUCCESS';
export const LIST_MOVIE_FAILURE = 'LIST_MOVIE_FAILURE';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';
export const GET_MOVIE_CASTS_SUCCESS = 'GET_MOVIE_CASTS_SUCCESS';
export const GET_MOVIE_CASTS_FAILURE = 'GET_MOVIE_CASTS_FAILURE';

const API_KEY = '0c1e8da2e9c9c27817279e3d01152994';

const UPCOMMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=0c1e8da2e9c9c27817279e3d01152994&language=en-US&page=1';

const MOVIE_DETAILS_URL = 'https://api.themoviedb.org/3/movie';

export const listMovies = () => (dispatch) => {
  return fetch(UPCOMMING_MOVIES_URL)
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
  const URL = `${MOVIE_DETAILS_URL}/${movId}?api_key=${API_KEY}&language=en-US`;
  return fetch(URL)
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