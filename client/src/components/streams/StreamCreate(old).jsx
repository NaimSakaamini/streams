// import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions/index";

// class StreamCreate extends Component {
//   // renderInput(formProps) {
//   //   return (
//   //     <input
//   //       onChange={formProps.input.onChange}
//   //       value={formProps.input.value}
//   //     />
//   //   );
//   // }

//   //simpler syntax to render the input.
//   //destructure the formProps and pass all the input properties with spread operator.
//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} />
//         {/* render the error to the user */}
//         <div className=" ui error message">
//           {meta.touched ? meta.error : null}
//         </div>
//       </div>
//     );
//   };

//   onSubmit = formValues => {
//     this.props.createStream(formValues).then(() => {
//       this.props.history.push("/");
//     });
//   };

//   render() {
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// //validate helper function
// const validate = formValues => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "you must enter a title";
//   }
//   if (!formValues.description) {
//     errors.description = "you must enter a description";
//   }
//   return errors;
// };

// // export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
// // wrap the form and pass it to connect
// const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);
// export default connect(
//   null,
//   { createStream }
// )(formWrapped);
