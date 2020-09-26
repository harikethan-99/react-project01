import React from 'react'
import { Card, CardBody, CardImg, CardText,} from 'reactstrap';

function onrenderComments(commentmap){
    return(
        <div className="ml-5 mt-0 list-unstyled" key={commentmap.id}>
                {commentmap.comment}
                <br/>
                <br/>
                -- {commentmap.author} , 
                {new Intl.DateTimeFormat('en-us',
                 { year:'numeric', month:'short', day:'2-digit'}).format
                    (new Date(Date.parse(commentmap.date)))}
           </div>
    );
}

function Dishdetail(props){     
    const comment = props.selected.comments.map((commentmap) => {
        return(
            onrenderComments(commentmap)
            );
        }
        )
        return(
        <div>
            <div className="row col-12 col-md-12 mt-2">
                <Card className="col-12 col-md-5 p-0 ml-2" key={props.selected.id}>
                    <CardImg width="100%" src={props.selected.image} alt={props.selected.name}/>
                    <CardBody>
                        <h4 > {props.selected.name} </h4>
                        <CardText > {props.selected.description} </CardText>
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

export default Dishdetail;
// componentDidMount(){
//     console.log("dishDetail component DiD Mount invoked");
// }

// componentDidUpdate(){
//     console.log("dishDetail component DiD Update invoked");
// }
// console.log("dishDetail render invoked");