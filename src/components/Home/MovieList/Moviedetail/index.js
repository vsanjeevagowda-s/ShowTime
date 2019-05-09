import Moviedetail from './Moviedetail';
import { connect } from 'react-redux';
import {
  getMovieDetails,
  getMovieCasts
} from '../../../../actions/movie.actions';


const mapStateToPRops = state => {
  const { item, casts_crew } = state.movie;
  return { item, casts_crew }
}

const actions = {
  getMovieDetails,
  getMovieCasts
}

export default connect(mapStateToPRops, actions)(Moviedetail);