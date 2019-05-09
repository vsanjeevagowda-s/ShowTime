import React, { Component } from 'react'
import { HashRouter, Route } from "react-router-dom";
import Layout from '../Layout';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={Layout} />
        <Route  exact path='/favourites' component={Layout} />
        <Route  exact path='/movies/:id' component={Layout} />
      </HashRouter>
    )
  }
}
export default Main;