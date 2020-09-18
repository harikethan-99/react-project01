import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const commentlist = comments.map((comments) => {
        return (
          <li key={comments.id}>
            <div>
              <p>{comments.comment}</p>
              <p>
                -- {comments.author}, {comments.date}
              </p>
            </div>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentlist}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const { dishSelect } = this.props;

    return dishSelect ? (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dishSelect)}</div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dishSelect.comments)}
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Dishdetail;
