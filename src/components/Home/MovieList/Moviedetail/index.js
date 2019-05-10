import Moviedetail from './Moviedetail';
import { connect } from 'react-redux';
import {
  getMovieDetails,
  getMovieCasts,
  addTofavoriteList
} from '../../../../actions/movie.actions';


const mapStateToPRops = state => {
  const { item, casts_crew } = state.movie;
  return { item, casts_crew }
}

const actions = {
  getMovieDetails,
  getMovieCasts,
  addTofavoriteList,
}

export default connect(mapStateToPRops, actions)(Moviedetail);