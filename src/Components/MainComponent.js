import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      dish : DISHES
    }
  }
  render(){
    const Homepage = () => {
      return(
        <Home/>
      );
      
    }
    return (
    <div>
      <Header/>      
      <Switch>
        <Route path='/home' component={Homepage}/>
        {/* to pass props we use the below method */}
        <Route exact path='/menu' component={ () => <Menu dishes = {this.state.dish}/>}/> 
        <Redirect to='/home'/>
      </Switch>
      <Footer/>   
    </div>
  );
}
}
export default Main;

// <Menu dishes={this.state.dish} onClick={(dishId) => this.onDishselect(dishId)}/>
//       <div className="container">
//           <div className="row">
//           {/* <Dishdetail selected={this.state.dish.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
//           {this.onselectItem()}
//           </div>

//       </div>
// onDishselect(dishId){
//   this.setState({selectedDish : dishId});
// }

// onselectItem(){
//       if(this.state.selectedDish != null){
//           return(
//               <Dishdetail selected={this.state.dish.filter((seldish) => seldish.id === this.state.selectedDish)[0]}/>
//           );
//       }
//       else{
//           return(
//               <div></div>                
//           );
//       }
//   }
