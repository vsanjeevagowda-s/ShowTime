import React, { Component } from 'react';
import {
  Row,
  Col,
  CardImg,
  Button,
} from 'reactstrap';

class Moviedetail extends Component {

  componentDidMount() {
    const {
      match,
      getMovieDetails,
      getMovieCasts
    } = this.props;
    debugger
    const { id } = match.params;
    getMovieDetails(id)
      .then(resp => getMovieCasts(id));
  }

  showCrew() {
    const { casts_crew: { cast } } = this.props;

    console.log('cast =>', cast);
    return <React.Fragment>
      <Col sm={12}>
        <div className='h3 mt-4'>Movie Casts</div>
      </Col>
      {cast && cast.map(item => {
        return (
          <Col key={item.credit_id} className='shadow-sm m-2 p-2'>
            <div className='text-center'>
              <img src={`http://image.tmdb.org/t/p/w185/${item.profile_path}`} className='width-inherit' alt={item.name} />
            </div>
            <div className='h5 pt-1 text-center'>{item.name}</div>
            <div><p className='text-center'>{item.character}</p></div>
          </Col>)
      })}
    </React.Fragment>
  }

  render() {
    const { item } = this.props;
    console.log('item ===>', item)
    return (
      <React.Fragment>
        <Row >
          <Col sm={4} className='pr-0'>
            <CardImg src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} />
          </Col>
          <Col sm={8} className='pl-0 bg-light'>
            <Row className='m-0'>
              <Col sm={12} className='mb-2'>
                <span className='h3 '>{item.original_title}</span>
              </Col>
              <Col sm={1} className='m-auto'>
                <div className='h-2rem w-2rem p-1 text-center rounded-circle bg-secondary text-light'>{item.vote_average}</div>
              </Col>
              <Col sm={11}>
                <Button color='secondary' className='m-1'>Make as Favorite</Button>
                <Button outline color='secondary'>Play Trailer</Button>
              </Col>
              <Col sm={12} className='mt-2'>
                <div className='h5'>Overview</div>
                <p>{item.overview}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {this.showCrew()}
        </Row>
      </React.Fragment>
    )
  }
}
export default Moviedetail;