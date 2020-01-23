import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { Button, Icon, Input, Modal } from "antd";

class EditForm extends Component {
  render() {
    return (
      <div>
        <Formik>
          {props => (
            <Form className="form">
                <Field
                  name="name"
                  value={props.values.username}
                  className="field"
                />
                <Icon className="Icon" type="save" />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default EditForm;
