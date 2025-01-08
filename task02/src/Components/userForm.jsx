import { Button } from "@mui/material";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import {
  createStudent,
  createStudentPass,
  createStudentFail,
} from "../redux/studentActions";
import "../App.css";
import { useNavigate } from "react-router-dom";

class UserForm extends Component {
  constructor(props) {
    super(props);
  }
  
  submitHandler = async (values) => {
    const { createStudent, createStudentPass, createStudentFail, reset } =
      this.props;
    const { sub1, sub2, sub3 } = values;
  
    // Calculate average
    const avg = (parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3)) / 3;
  
    // Determine status based on avg
    const status = avg >= 33 ? "PASS" : "FAIL";
  
    // Create student data with calculated fields
    const studentData = {
      ...values,      // Spread the input fields from the form
      avg: avg.toFixed(2),   // Add the calculated average (fixed to 2 decimal places)
      status: status,        // Add the calculated status (PASS/FAIL)
    };
  
    try {
      createStudent();  // Action for loading state
      // Send the student data to your JSON server
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),  // Send the studentData with avg and status
      });
      const data = await response.json();  // Parse the response data from the server
      createStudentPass(data);  // Action for success
      reset();  // Reset the form after successful submission
    } catch (error) {
      createStudentFail(error.message);  // Action for failure
    }
  };
  

  renderField = ({
    input,
    label,
    meta: { touched, error },
    inputClassName,
  }) => (
    <div className="inputField">
      <label className="label-field">{label}</label>
      {touched && error && <span className="error">{error}</span>}
      <input
        {...input}
        className={`input-field ${inputClassName || ""}`}
        placeholder={label}
      />
    </div>
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="main">
        <h1 className="heading">USER-FORM</h1>
        <Button size="medium" color="primary">
          HOME
        </Button>
        <div className="body-main">
          <div className="body-content">
            <form onSubmit={handleSubmit(this.submitHandler)} className="form">
              <Field
                name="name"
                // className="inpfield"
                component={this.renderField}
                label="Name:"
              />
              <Field name="email" component={this.renderField} label="Email:" />
              <Field
                name="mobile"
                component={this.renderField}
                label="Phone :"
              />
              <Field name="sub1" component={this.renderField} label="Maths: " />
              <Field
                name="sub2"
                component={this.renderField}
                label="Physics:"
              />
              <Field
                name="sub3"
                component={this.renderField}
                label="Chemistry:"
              />
              {/* <Field name="avg" component={this.renderField} label="Average" /> */}
              {/* <Field name="status" component={this.renderField} label="Status" /> */}
              <button type="submit" className="submitbtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.name) errors.name = "*";
  if (!values.email) errors.email = "*";
  if (!values.mobile) errors.mobile = "*";
  if (!values.sub1) errors.sub1 = "*";
  if (!values.sub2) errors.sub2 = "*";
  if (!values.sub3) errors.sub3 = "*";
  return errors;
};

const mapDispatchToProps = {
  createStudent,
  createStudentPass,
  createStudentFail,
};

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: "userForm", // Unique form name
    validate,
  })(UserForm)
);
