import Favourite from './Favourite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  listFavorites
} from '../../actions/movie.actions';

const mapStateToPRops = state => {
  const { favorites } = state.movie;
  return { favorites }
}

const actions = {
  listFavorites
}

// export default Favourite;
export default withRouter(connect(mapStateToPRops, actions)(Favourite));