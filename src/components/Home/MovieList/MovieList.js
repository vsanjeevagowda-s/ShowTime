import React, { Component } from 'react';
import {
  Row,
} from 'reactstrap';
import MovieCard from '../../MovieCard';

class MovieList extends Component {
  constructor(props){
    super(props);
    this.showMovieDetails = this.showMovieDetails.bind(this);
  }

  componentDidMount() {
    const { listMovies } = this.props;
    listMovies();
  }

  showMovieDetails(item){
    const { history } = this.props;
    history.push(`/movies/${item.id}`);
  }

  render() {
    const { items } = this.props;
    return (
      <Row className='vh-100 of-scroll'>
        {items && items.map(item => {
          return <MovieCard 
          item={item} 
          showMovieDetails={this.showMovieDetails}/>
        })}
      </Row>
    );
  }
}

export default MovieList;