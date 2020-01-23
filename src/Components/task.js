import React, { Component } from "react";
import { Button, Icon, Input, Modal } from "antd";

// i have made a counter where it is showing 0 and made two buttons one is for increase the value and second is to decrease the value

class Task extends Component {
  state = {
    value: 0
  };

  handlePlus = e => {
    console.log(e);
    this.setState({
      value: this.state.value + 1
    });
  };
  handleMinus = e => {
    console.log(e);
    this.setState({
      value: this.state.value - 1
    });
  };

  render() {
    return (
      <div className="App-header">
        {this.state.value}
        <div>
          <Button className="button" onClick={this.handlePlus}>
            +
          </Button>
          <Button className="button" onClick={this.handleMinus}>
            -
          </Button>
        </div>
      </div>
    );
  }
}

export default Task;
