import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { Button, Icon, Input, Modal } from "antd";
import EditForm from "./EditForm";
const { TextArea } = Input;

class Homepage extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Formik>
          {props => (
            <Form className="form">
              <h1>Details</h1>
              <div className="header">
                <h4>Name :</h4>
                <Field
                  name="name"
                  value={props.values.username}
                  className="field"
                  disabled
                />
                <Icon className="Icon" type="edit" onClick={this.showModal} />
              </div>
              <div className="header">
                <h4>RollNo :</h4>
                <Field
                  name="rollno"
                  value={props.values.password}
                  disabled
                  className="field"
                />
                <Icon className="Icon" type="edit" onClick={this.showModal} />
              </div>
              <div className="header">
                <h4>Class :</h4>
                <Field
                  name="rollno"
                  value={props.values.password}
                  disabled
                  className="field"
                />
                <Icon className="Icon" type="edit" onClick={this.showModal} />
              </div>
              <div className="header">
                <h4>Stream :</h4>
                <Field
                  name="rollno"
                  value={props.values.password}
                  disabled
                  className="field"
                />
                <Icon className="Icon" type="edit" onClick={this.showModal} />
              </div>
              <div className="header">
                <h4>DOB :</h4>
                <Field
                  name="rollno"
                  value={props.values.password}
                  disabled
                  className="field"
                />
                <Icon className="Icon" type="edit" onClick={this.showModal} />
              </div>
              <div className="header">
                <h4>Address :</h4>
                <TextArea
                  autosize={{ minRows: 0, maxRows: 15 }}
                  disabled
                  className="address"
                />
                <Icon type="edit" onClick={this.showModal} />
              </div>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                maskStyle={{ backgroundColor: "rgba(1, 30, 71,0.7)" }}
                // style={{ top: 40,right:400 }}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                className="loginwrapper"
              >
                <EditForm />
              </Modal>
            </Form>
          )}
        </Formik>
        <div style={{ marginLeft: "400px", marginTop: "-400px" }}></div>
      </div>
    );
  }
}

export default Homepage;
