 import React from 'react';
//const { Component } = require("react");
//import { Media } from 'reactstrap';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

//below method creation is using arrow functions mehtods can also be defined like this
//getting js objects dish and onClick
const RenderDishes = ({dish , onClick}) =>{
    return(
        <Card key={dish.id} onClick = {() =>onClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}
function Menu(props) {
        console.log("Menu Component render invoked");
        const menu = props.dishes.map((dish) => {
            return(
                <div className="col-12 col-md-5 m-1">
                    <RenderDishes dish={dish} onClick={props.onClick} />
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
export default Menu;

// {/* <Dishdetail selected={this.state.selectedDish}/> */}
//                     {/* <Media tag = "li">
//                         <Media left middle>
//                             <Media object src={dish.image} alt={dish.name} />
//                         </Media>
//                         <Media body className="ml-5">
//                             <Media heading>{dish.name}
//                             </Media>
//                             <p>{dish.description}</p>
//                         </Media>
//                     </Media> */}


 // use it with class to see the working
 //componentDidMount(){
    //     console.log("Menu component DiD Mount invoked");
    // }

    // componentDidUpdate(){
    //     console.log("Menu component DiD Update invoked");
    // }