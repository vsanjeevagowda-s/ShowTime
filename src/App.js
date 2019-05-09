import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Container
} from 'reactstrap';
import Main from './components/Main/Main';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Main />
        </Container>
      </React.Fragment>
    );
  }
};


export default App;
