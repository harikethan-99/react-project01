import React, { Component } from 'react';
import logo from './logo.svg';
import { Media, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import {DISHES} from './shared/dishes'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      dish : DISHES
    }
  }

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristornte Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dish}/>
    </div>
  );
}
}
export default App;
