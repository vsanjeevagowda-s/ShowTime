import React, { Component } from 'react';
import {
  Row,
  Col,
  CardImg,
  Button
} from 'reactstrap';

function truncate(input) {
  if (input.length > 5)
    return input.substring(0, 180) + '...';
  else
    return input;
};

const MovieDetails = ({ item, showMovieDetails }) => {
  console.log('item==>', item);
  return (
    <Row className='po-re h-100pc'>
      <Col sm={3} className='pr-0'>
        <div className='text-center rounded-circle bg-secondary text-light p-1 h-2rem w-2rem'>
          {item.vote_average}
        </div>
      </Col>
      <Col sm={9} className='pl-0'>
        <span >
          {item.title}
        </span>
        <p>{item.release_date}</p>
      </Col>
      <Col sm={12}>
        <small>
          {truncate(item.overview)}
        </small>
      </Col>
      <Col><hr/></Col>
      <Col  className='po-ab bt-0'>
        <Button 
        outline 
        color="secondary"
        className='btn-sm'
        onClick={() => showMovieDetails(item)}>More Info</Button>
      </Col>
    </Row>
  )
}

class MovieCard extends Component {

  render() {
    const { 
      item, 
      showMovieDetails 
    } = this.props;
    return (
      <Col sm={6} className='p-0'>
        <div className=' border m-2'>
          <Row className='m-0'>
            <Col className='p-0'>
              <CardImg src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} />
            </Col>
            <Col className='my-2'>
              <MovieDetails 
              item={item}
              showMovieDetails={showMovieDetails} />
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

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
    debugger
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