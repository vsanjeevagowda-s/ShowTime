import React, { Component } from 'react';
import { Route } from "react-router-dom";
import SidebarNav from '../SidebarNav';
import Home from '../Home';
import Favourite from '../Favourite';
import Moviedetail from '../Home/MovieList/Moviedetail';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <SidebarNav>
        <Route  exact path='/' component={Home} />
        <Route  exact path='/favourites' component={Favourite} />
        <Route  exact path='/movies/:id' component={Moviedetail} />
        </SidebarNav>
      </React.Fragment>
    )
  }
}
export default  Layout;