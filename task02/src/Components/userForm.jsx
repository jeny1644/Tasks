// import React, { Component } from "react";
// // import { reduxForm, Field, reset } from "redux-form";
// // import { connect } from "react-redux";
// // import { Button } from "@mui/material";
// // // import { reset } from "redux-form";
// // import { initialize } from "redux-form";
// // import { useLocation, useNavigate, useParams } from "react-router-dom";
// // import {
// //   createStudent,
// //   createStudentPass,
// //   createStudentFail,
// //   updateStudent,
// //   updateStudentPass,
// //   updateStudentFail,
// // } from "../redux/studentActions";
// // import "../App.css";

// // class UserForm extends Component {
// //   constructor(props) {
// //     super(props);
// //     // this.state = {
// //     //   loading: true,
// //     // };
// //   }

// //   navigateHome = () => {
// //     this.props.navigate("/");
// //   };

// //   async componentDidMount() {
// //     const { initialize } = this.props;
// //     const { id: userId } = this.props.params;

// //     if (userId) {
// //       try {
// //         console.log("Fetching data for User ID:", userId);
// //         const response = await fetch(
// //           `http://localhost:3000/students/${userId}`
// //         );

// //         // Check for successful response before using the data
// //         if (!response.ok) {
// //           console.error("Response Status:", response.status);
// //           throw new Error("Failed to fetch user details");
// //         }

// //         const userDetails = await response.json();
// //         console.log("Fetched User Details:", userDetails);
// //         initialize("userForm", {
// //           name: userDetails.name,
// //           email: userDetails.email,
// //           mobile: userDetails.mobile,
// //           maths: userDetails.maths,
// //           physics: userDetails.physics,
// //           chemistry: userDetails.chemistry,
// //         });

// //         this.setState({ loading: false });
// //       } catch (error) {
// //         console.error("Error fetching user details:", error);
// //         this.setState({ loading: false });
// //       }
// //     } else {
// //       console.log("No User ID found, creating new user.");
// //       this.setState({ loading: false });
// //     }
// //   }

// //   // submitHandler = async (values) => {
// //   //   const {
// //   //     createStudent,
// //   //     createStudentPass,
// //   //     createStudentFail,
// //   //     updateStudent,
// //   //     updateStudentPass,
// //   //     updateStudentFail,
// //   //     reset,
// //   //   } = this.props;
// //   //   const { maths, physics, chemistry } = values;

// //   //   const avg =
// //   //     (parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry)) / 3;
// //   //   const status = avg >= 33 ? "PASS" : "FAIL";

// //   //   const studentData = { ...values, avg: avg.toFixed(2), status };

// //   //   const { id: userId } = this.props.params;

// //   //   try {
// //   //     if (userId) {
// //   //       const response = await fetch(`http://localhost:3000/students/${userId}`, {
// //   //         method: "PUT",
// //   //         headers: { "Content-Type": "application/json" },
// //   //         body: JSON.stringify(studentData),
// //   //       });

// //   //       const updatedStudent = await response.json();
// //   //       updateStudentPass(updatedStudent);
// //   //       console.log("Updated student successfully:", updatedStudent);
// //   //       updateStudent(updatedStudent);

// //   //     } else {
// //   //       const response = await fetch("http://localhost:3000/students", {
// //   //         method: "POST",
// //   //         headers: { "Content-Type": "application/json" },
// //   //         body: JSON.stringify(studentData),
// //   //       });

// //   //       const newStudent = await response.json();
// //   //       createStudentPass(newStudent);
// //   //       console.log("Created student successfully:", newStudent);
// //   //     }

// //   //     reset();
// //   //   } catch (error) {
// //   //     createStudentFail(error.message);
// //   //   }
// //   // };
// //   submitHandler = async (values) => {
// //     const { createStudent, createStudentPass, createStudentFail, reset } =
// //       this.props;
// //     const { maths, physics, chemistry } = values;

// //     const avg =
// //       (parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry)) / 3;
// //     const status = avg >= 33 ? "PASS" : "FAIL";

// //     const studentData = { ...values, avg: avg.toFixed(2), status };
// //     const { id: userId } = this.props.params;

// //     try {
// //       if (userId) {
// //         const response = await fetch(
// //           `http://localhost:3000/students/${userId}`,
// //           {
// //             method: "PUT",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(studentData),
// //           }
// //         );

// //         const updatedStudent = await response.json();
// //         updateStudentPass(updatedStudent);
// //         updateStudent(updatedStudent);
// //         reset();
// //       } else {
// //         const response = await fetch("http://localhost:3000/students", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(studentData),
// //         });

// //         const newStudent = await response.json();
// //         createStudentPass(newStudent);
// //       }

// //       reset();
// //     } catch (error) {
// //       createStudentFail(error.message);
// //     }
// //   };

// //   renderField = ({
// //     input,
// //     label,
// //     meta: { touched, error },
// //     inputClassName,
// //   }) => (
// //     <div className="inputField">
// //       <label className="label-field">{label}</label>
// //       {touched && error && <span className="error">{error}</span>}
// //       <input
// //         {...input}
// //         className={`input-field ${inputClassName || ""}`}
// //         placeholder={label}
// //       />
// //     </div>
// //   );

// //   render() {
// //     const { handleSubmit, initialValues } = this.props;

// //     return (
// //       <div className="main">
// //         <h1 className="heading">USER FORM</h1>
// //         <Button size="medium" color="primary" onClick={this.navigateHome}>
// //           HOME
// //         </Button>
// //         <div className="body-main">
// //           <div className="body-content">
// //             <form onSubmit={handleSubmit(this.submitHandler)} className="form">
// //               <Field name="name" component="input" label="Name:" />
// //               <Field name="email" component={this.renderField} label="Email" />
// //               <Field name="mobile" component={this.renderField} label="Phone" />
// //               <Field name="maths" component={this.renderField} label="Maths" />
// //               <Field
// //                 name="physics"
// //                 component={this.renderField}
// //                 label="Physics"
// //               />
// //               <Field
// //                 name="chemistry"
// //                 component={this.renderField}
// //                 label="Chemistry"
// //               />
// //               <button type="submit" className="submitbtn">
// //                 {this.props.params.id ? "Update" : "Create"}
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // const mapStateToProps = (state, ownProps) => {
// //   const userId = ownProps.params?.id;

// //   const students = Array.isArray(state.students) ? state.students : [];
// //   const userDetails = students.find((student) => student?.id === userId);
// //   // console.log(userDetails);
// //   return {
// //     initialValues: userDetails
// //       ? {
// //           name: userDetails.name,
// //           email: userDetails.email,
// //           mobile: userDetails.mobile,
// //           maths: userDetails.maths,
// //           physics: userDetails.physics,
// //           chemistry: userDetails.chemistry,
// //         }
// //       : {},
// //   };
// // };

// // const mapDispatchToProps = {
// //   createStudent,
// //   createStudentPass,
// //   createStudentFail,
// //   updateStudent,
// //   updateStudentPass,
// //   updateStudentFail,
// // };

// // export const withRouter = (Component) => {
// //   const Wrapper = (props) => {
// //     const location = useLocation() || " ";
// //     const navigate = useNavigate();
// //     const params = useParams();

// //     return (
// //       <Component
// //         {...props}
// //         location={location}
// //         navigate={navigate}
// //         params={params}
// //       />
// //     );
// //   };

// //   return Wrapper;
// // };

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(
// //   reduxForm({
// //     form: "userForm",
// //     enableReinitialize: true,
// //   })(withRouter(UserForm))
// // );
// import React, { Component } from "react";
// import { reduxForm, Field, reset } from "redux-form";
// import { connect } from "react-redux";
// import { Button } from "@mui/material";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   createStudent,
//   createStudentPass,
//   createStudentFail,
//   updateStudent,
//   updateStudentPass,
//   updateStudentFail,
// } from "../redux/studentActions";
// import "../App.css";

// class UserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//     };
//   }

//   navigateHome = () => {
//     this.props.navigate("/");
//   };

//   async componentDidMount() {
//     const { params } = this.props;
//     const userId = params.id;

//     if (userId) {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/students/${userId}`
//         );
//         const userDetails = await response.json();

//         this.props.initialize({
//           name: userDetails.name,
//           email: userDetails.email,
//           mobile: userDetails.mobile,
//           maths: userDetails.maths,
//           physics: userDetails.physics,
//           chemistry: userDetails.chemistry,
//           id: userDetails.id,
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     }
//   }

//   submitHandler = async (values) => {
//     const { maths, physics, chemistry, name, email, mobile } = values;
//     const { params } = this.props;
//     const userId = params?.id;
  
//     console.log("Input values:", { maths, physics, chemistry });
  
//     const mathsScore = parseFloat(maths);
//     const physicsScore = parseFloat(physics);
//     const chemistryScore = parseFloat(chemistry);

//     const avg = (mathsScore + physicsScore + chemistryScore) / 3;
//     const status = avg >= 33 ? 'PASS' : 'FAIL';
  
//     const studentData = {
//       ...values,  
//       avg: avg.toFixed(2), 
//       status,
//     };
  
//     console.log("Submitting student data:", studentData);  
  
//     try {
//       let response;
      
//       if (userId) {
//         // If userId exists, we're updating an existing student (PATCH)
//         response = await fetch(`http://localhost:3000/students/${userId}`, {
//           method: 'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(studentData),
//         });
//       } else {
//         // If userId doesn't exist, we're creating a new student (POST)
//         response = await fetch('http://localhost:3000/students', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(studentData),
//         });
//       }
  
//       if (!response.ok) {
//         throw new Error(userId ? 'Failed to update student' : 'Failed to create student');
//       }
  
//       const savedStudent = await response.json();
//       console.log('Saved/Updated Student:', savedStudent);  // Check if all fields are included in the response
  
//       // Dispatch actions for success
//       if (userId) {
//         this.props.updateStudentPass(savedStudent);
//         this.props.updateStudent(savedStudent);
//       } else {
//         this.props.createStudentPass(savedStudent);
//         this.props.createStudent(savedStudent);
//       }
  
//       this.props.reset();  // Reset the form after successful submission
//     } catch (error) {
//       console.error("Error during submission:", error);
//       this.props.updateStudentFail(error.message);
//     }
//   };
  
//   renderField = ({
//     input,
//     label,
//     meta: { touched, error },
//     inputClassName = "",
//   }) => (
//     <div className="inputField">
//       <label className="label-field">{label}</label>
//       {touched && error && <span className="error">{error}</span>}
//       <input
//         {...input}
//         className={`input-field ${inputClassName}`}
//         placeholder={label}
//       />
//     </div>
//   );

//   render() {
//     const { handleSubmit, initialValues } = this.props;

//     return (
//       <div className="main">
//         <h1 className="heading">USER FORM</h1>
//         <Button size="medium" color="primary" onClick={this.navigateHome}>
//           HOME
//         </Button>
//         <div className="body-main">
//           <div className="body-content">
//             {/* Added handleSubmit to form */}
//             <form onSubmit={handleSubmit(this.submitHandler)} className="form">
//               <Field name="name" component={this.renderField} label="Name" />
//               <Field name="email" component={this.renderField} label="Email" />
//               <Field name="mobile" component={this.renderField} label="Phone" />
//               <Field name="maths" component={this.renderField} label="Maths" />
//               <Field
//                 name="physics"
//                 component={this.renderField}
//                 label="Physics"
//               />
//               <Field
//                 name="chemistry"
//                 component={this.renderField}
//                 label="Chemistry"
//               />
//               {/* Removed onClick and directly using handleSubmit on form */}
//               <button type="submit" className="submitbtn">
//                 {this.props.params.id ? "Update" : "Create"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const userId = ownProps.params?.id;

//   const students = Array.isArray(state.students) ? state.students : [];
//   const userDetails = students.find((student) => student?.id === userId);

//   return {
//     initialValues: userDetails
//       ? {
//           name: userDetails.name,
//           email: userDetails.email,
//           mobile: userDetails.mobile,
//           maths: userDetails.maths,
//           physics: userDetails.physics,
//           chemistry: userDetails.chemistry,
//         }
//       : {},
//   };
// };

// const mapDispatchToProps = {
//   createStudent,
//   createStudentPass,
//   createStudentFail,
//   updateStudent,
//   updateStudentPass,
//   updateStudentFail,
// };

// export const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const location = useLocation() || " ";
//     const navigate = useNavigate();
//     const params = useParams();

//     return (
//       <Component
//         {...props}
//         location={location}
//         navigate={navigate}
//         params={params}
//       />
//     );
//   };

//   return Wrapper;
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
//   reduxForm({
//     form: "userForm",
//     enableReinitialize: true,
//   })(withRouter(UserForm))
// );
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  createStudent,
  createStudentPass,
  createStudentFail,
  updateStudent,
  updateStudentPass,
  updateStudentFail,
} from "../redux/studentActions";
import "../App.css";
import { connect } from "react-redux";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  navigateHome = () => {
    this.props.navigate("/");
  };

  async componentDidMount() {
    const { params } = this.props;
    const userId = params.id;

    if (userId) {
      try {
        const response = await fetch(
          `http://localhost:3000/students/${userId}`
        );
        const userDetails = await response.json();

        this.props.initialize({
          name: userDetails.name,
          email: userDetails.email,
          mobile: userDetails.mobile,
          maths: userDetails.maths,
          physics: userDetails.physics,
          chemistry: userDetails.chemistry,
          id: userDetails.id,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
  }

  submitHandler = async (values) => {
    const { maths, physics, chemistry, name, email, mobile } = values;
    const { params } = this.props;
    const userId = params?.id;
  
    console.log("Input values:", { maths, physics, chemistry });
  
    const mathsScore = parseFloat(maths);
    const physicsScore = parseFloat(physics);
    const chemistryScore = parseFloat(chemistry);

    const avg = (mathsScore + physicsScore + chemistryScore) / 3;
    const status = avg >= 33 ? 'PASS' : 'FAIL';
  
    const studentData = {
      ...values,  
      avg: avg.toFixed(2), 
      status,
    };
  
    console.log("Submitting student data:", studentData);  
  
    try {
      let response;
      
      if (userId) {
        // If userId exists, we're updating an existing student (PATCH)
        response = await fetch(`http://localhost:3000/students/${userId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(studentData),
        });
      } else {
        // If userId doesn't exist, we're creating a new student (POST)
        response = await fetch('http://localhost:3000/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(studentData),
        });
      }
  
      if (!response.ok) {
        throw new Error(userId ? 'Failed to update student' : 'Failed to create student');
      }
  
      const savedStudent = await response.json();
      console.log('Saved/Updated Student:', savedStudent);  // Check if all fields are included in the response
  
      if (userId) {
        this.props.updateStudentPass(savedStudent);
        this.props.updateStudent(savedStudent);
      } else {
        this.props.createStudentPass(savedStudent);
        this.props.createStudent(savedStudent);
      }
  
      this.props.reset();  
    } catch (error) {
      console.error("Error during submission:", error);
      this.props.updateStudentFail(error.message);
    }
  };
  
  renderField = ({
    input,
    label,
    meta: { touched, error },
    inputClassName = "",
  }) => (
    <div className="inputField">
      <label className="label-field">{label}</label>
      {touched && error && <span className="error">{error}</span>}
      <input
        {...input}
        className={`input-field ${inputClassName}`}
        placeholder={label}
      />
    </div>
  );

  render() {
    const { handleSubmit, initialValues } = this.props;

    return (
      <div className="main">
        <h1 className="heading">USER FORM</h1>
        <Button size="medium" color="primary" onClick={this.navigateHome}>
          HOME
        </Button>
        <div className="body-main">
          <div className="body-content">
            {/* Added handleSubmit to form */}
            <form onSubmit={handleSubmit(this.submitHandler)} className="form">
              <Field name="name" component={this.renderField} label="Name" />
              <Field name="email" component={this.renderField} label="Email" />
              <Field name="mobile" component={this.renderField} label="Phone" />
              <Field name="maths" component={this.renderField} label="Maths" />
              <Field
                name="physics"
                component={this.renderField}
                label="Physics"
              />
              <Field
                name="chemistry"
                component={this.renderField}
                label="Chemistry"
              />
              {/* Removed onClick and directly using handleSubmit on form */}
              <button type="submit" className="submitbtn">
                {this.props.params.id ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.params?.id;

  const students = Array.isArray(state.students) ? state.students : [];
  const userDetails = students.find((student) => student?.id === userId);

  return {
    initialValues: userDetails
      ? {
          name: userDetails.name,
          email: userDetails.email,
          mobile: userDetails.mobile,
          maths: userDetails.maths,
          physics: userDetails.physics,
          chemistry: userDetails.chemistry,
        }
      : {},
  };
};

const mapDispatchToProps = {
  createStudent,
  createStudentPass,
  createStudentFail,
  updateStudent,
  updateStudentPass,
  updateStudentFail,
};

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation() || " ";
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  };

  return Wrapper;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "userForm",
    enableReinitialize: true,
  })(withRouter(UserForm))
);
