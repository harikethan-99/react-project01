import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      dish : DISHES,
      selectedDish : null
    }
  }
  
  onDishselect(dishId){
    this.setState({selectedDish : dishId});
  }

  onselectItem(){
        if(this.state.selectedDish != null){
            return(
                <Dishdetail selected={this.state.dish.filter((seldish) => seldish.id === this.state.selectedDish)[0]}/>
            );
        }
        else{
            return(
                <div></div>                
            );
        }
    }
  render(){
      console.log(this.state.selectedDish);
  return (
    <div>
      <Header/>    
      <Menu dishes={this.state.dish} onClick={(dishId) => this.onDishselect(dishId)}/>
      <div className="container">
          <div className="row">
          {/* <Dishdetail selected={this.state.dish.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
          {this.onselectItem()}
          </div>

      </div>
      
    <Footer/>   
    </div>
  );
}
}
export default Main;
