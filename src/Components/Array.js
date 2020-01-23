import React, { Component } from "react";
import { Button, Icon, Input, Modal } from "antd";

// i have get elements from on array then multiply each element with 5 and save it to another array

class Array extends Component {
  state = {
    arr1: [18, 27, 36, 45, 54],
    arr2: []
  };

  //   handleMultiply = e => {
  //     let finalarr = [];
  //     for (var i = 0; i < this.state.arr1.length; i++) {
  //       finalarr.push(this.state.arr1[i] * 5);
  //     }
  //     this.setState({
  //       arr2: finalarr
  //     });
  //   };
  handleMultiply = e => {
    this.setState({
      arr2: this.state.arr1.map(num => num * 5)
    });
  };

  render() {
    return (
      <div className="App-header">
        <div className="header">
          <h3>Input:</h3>
          {this.state.arr1.map((item, index) => (
            <h3>{(index ? ", " : "") + item}</h3>
          ))}

          <br />
        </div>
        <div className="header">
          {" "}
          <h3>output:</h3>
          {this.state.arr2.map((item, index) => (
            <h3>{(index ? ", " : "") + item}</h3>
          ))}
        </div>
        <Button className="button" onClick={this.handleMultiply}>
          Result
        </Button>
        <div className="header">
          <br />
        </div>
      </div>
    );
  }
}

export default Array;
