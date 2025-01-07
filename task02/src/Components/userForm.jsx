import { TextField, Button } from "@mui/material";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { reduxForm } from 'redux-form'
import { Field, FormSection } from 'redux-form'
import "../App.css";

export default class UserForm extends Component {
  render() {
    // const handleSubmit = this.props;
 
    return (
      <div className="main">
        <h1 className="heading">USER-FORM</h1>                                        
        <Button size="md" color="primary">
          HOME                          
        </Button>
        {/* <div className="body-content">
        <form>
        <Field name="name" component={this.renderField} label="Name" />
        <Field name="email" component={this.renderField} label="Email" />
        <Field name="phone" component={this.renderField} label="Phone" />
        <Field name="marks" component={this.renderField} label="Marks" />
        <Field name="status" component={this.renderField} label="Status" />
        <button type="submit">Submit</button>
      </form> 
        </div> */}
      </div>
    );
  }
}
