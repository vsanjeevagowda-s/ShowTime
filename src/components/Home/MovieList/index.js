import MovieList from './MovieList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  listMovies
} from '../../../actions/movie.actions';


const mapStateToPRops = state => {
  console.log('mapStateToPRops/ state', state);
  const { items } = state.movie;
  return { items }
}

const actions = {
  listMovies
}
export default withRouter(connect(mapStateToPRops, actions)(MovieList));