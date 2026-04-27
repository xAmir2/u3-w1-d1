import { Component } from "react";

class Img extends Component {
  render() {
    return <img src={this.props.url} alt={this.props.alt} />;
  }
}

export default Img;
