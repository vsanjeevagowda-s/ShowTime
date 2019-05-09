import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
class SidebarNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: true
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Row className='vh-100'>
        <Col 
        sm={2} 
        className='border p-0'>
          <ul className='ul-side-nav'>
            <li className='pt-2 pb-2 text-center border-bottom rgba-indigo-light bg-secondary text-light'>
              <a href='#/' className='text-light'>Home</a>
            </li>
            <li className='pt-2 pb-2 text-center border-bottom rgba-indigo-light'>
              <a href='#/favourites'>Favourites</a>
            </li>
          </ul>
        </Col>
        <Col 
        sm={10} 
        xs={12} >{children}</Col>
      </Row>
    )
  }
}
export default SidebarNav;