import React, { Component } from 'react';
import './Contador.css';
// Semanti UI
import { Button } from 'semantic-ui-react';

export default class Contador extends Component {
  constructor() {
    super();
    this.stock = 10;
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    if (this.state.count >= this.stock) {
        return} else {
    this.setState({ count: this.state.count + 1 });
  };
  };
  handleDecrement = () => {
if (this.state.count <= 0) {
    return} else {

    this.setState({ count: this.state.count - 1 });
  };
};

  render() {
    return (
      <div className="Contador-container">
        <p>{this.state.count}</p>
        <div className="Buttons-container">
          <Button primary onClick={this.handleIncrement}>
            +
          </Button>
          <Button primary onClick={this.handleDecrement}>
            -
          </Button>
        </div>
      </div>
    );
  }
}