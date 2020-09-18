import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

class Dishdetail extends Component{
    render(){
        const comment = this.props.selected.comments.map((commentmap) => {
        return(
            <div className="ml-5 mt-0 list-unstyled" key={commentmap.id}>
                    {commentmap.comment}
                    <br/>
                    <br/>
                    -- {commentmap.author} , {commentmap.date}
               </div> 
            );
        })

        return(
        <div>
            <div className="row col-12 col-md-12 mt-2">
                <Card className="col-12 col-md-5 p-0 ml-2" key={this.props.selected.id}>
                    <CardImg width="100%" src={this.props.selected.image} alt={this.props.selected.name}/>
                    <CardBody>
                        <h4 > {this.props.selected.name} </h4>
                        <CardText > {this.props.selected.description} </CardText>
                    </CardBody>
                </Card>                
                <div className="row col-12 col-md-5">
                <h4 className="ml-5 d-block">Comments</h4>
                {comment}
                </div>
            </div>         
        </div>
            );
    }
}
export default Dishdetail;