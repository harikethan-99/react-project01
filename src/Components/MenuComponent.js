import React, { Component } from 'react';
//const { Component } = require("react");
//import { Media } from 'reactstrap';
import Dishdetail from './DishdetailComponent'
import { Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish : null
        }
        }
    selectDish(dish){
        this.setState({selectedDish : dish});
    }     
    onselectItem(){
        if(this.state.selectedDish != null){
            return(
                <Dishdetail selected={this.state.selectedDish}/>
            );
        }
        else{
            return(
                <div></div>                
            );
        }
    }
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} 
                    onClick = {() => this.selectDish(dish)}
                    >
                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.onselectItem()}
                </div>
            </div>
        );
    }
}
export default Menu;

{/* <Dishdetail selected={this.state.selectedDish}/> */}
                    {/* <Media tag = "li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}
                            </Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media> */}