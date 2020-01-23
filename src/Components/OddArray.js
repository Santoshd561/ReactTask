import React, { Component } from "react";
import { Button, Icon, Input, Modal } from "antd";

// in this i have a array of numbers where i have to get only odd numbers from an array
// and put them in another array

class OddArray extends Component {
  state = {
    value: "",
    arr1: [2, 3, 4, 5, 6],
    arr2: []
  };

  handleAdd = e => {
    let finalarr = [];
    for (var i = 0; i < this.state.arr1.length; i++) {
      if (this.state.arr1[i] % 2 !== 0) {
        finalarr.push(this.state.arr1[i]);
      }
    }
    this.setState({
      arr2: finalarr
    });
  };
  //   handleMultiply = e => {
  //     this.setState({
  //       arr2: this.state.arr1.map(num => num * 5)
  //     });
  //   };

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
        <Button className="button" onClick={this.handleAdd}>
          Result
        </Button>
        <div className="header">
          <br />
        </div>
      </div>
    );
  }
}

export default OddArray;
