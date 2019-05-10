import React, { Component } from 'react'
import {
  Row,
} from 'reactstrap';
import MovieCard from '../MovieCard';

class Favourite extends Component {

  componentDidMount() {
    const { listFavorites } = this.props;
    listFavorites();
  }

  render() {
    const { favorites } = this.props;
    return (
      <Row className='vh-100 of-scroll'>
        {favorites && favorites.map(item => {
          return <MovieCard 
          item={item}/>
        })}
      </Row>
    )
  }
}
export default Favourite;