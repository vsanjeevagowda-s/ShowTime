import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

const Header = () => {
  return <Row className=''>
    <Col sm={12} xs={12} className='h-4rem text-center display-flex align-item-cent'>
      <a href='#/' className='font-w-700 w-100 h3 text-dark a-decor-none'>Show Time</a>
    </Col>
  </Row>
}
class SidebarNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: true
    }
  }

  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <Row className='vh-100'>
        <Col 
        sm={2} 
        className='p-0 sidebar-bg'>
        <Header/>
          <ul className='ul-side-nav'>
            <li className={`pt-2 pb-2 text-center border-bottom border-top ${(pathname === '/') && 'bg-secondary'}`}>
              <a href='#/' className={`${(pathname === '/') && 'text-white'}`}>Home</a>
            </li>
            <li className={`pt-2 pb-2 text-center border-bottom ${(pathname === '/favourites') && 'bg-secondary'}`}>
              <a href='#/favourites' className={`${(pathname === '/favourites') && 'text-white'}`}>Favourites</a>
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