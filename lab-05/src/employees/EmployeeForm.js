import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldWrapper from '../form/FieldWrapper';
import FormControls from '../form/FormControls';
import EmployeeContext from './EmployeeContext';

class EmployeeForm extends React.Component {

  componentDidMount() {
    console.log("**************");
    console.log(this.context);
    console.log("**************");
  }

  handleSave = (values) => {
    this.props.handleSave(values);
  };
  validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }

    return errors;
  };


  render() {
    const { employee } = this.props;

    return (
      <EmployeeContext.Consumer>

        {employee => (
          <Formik
            initialValues={employee && {
              username: employee.username || '',
              email: employee.email || '',
              firstName: employee.firstName || '',
              lastName: employee.lastName || '',
              admin: employee.admin || '',
              _id: employee._id
            }
            }
            validate={this.validate}
            onSubmit={this.handleSave}
            enableReinitialize
          >
            {({ isValid, errors, touched, handleReset, handleSubmit }) => (
              <Form>
                <FieldWrapper type="text" name="username" label="Username" invalid={errors.username} touched={touched.username} />
                <FieldWrapper type="text" name="email" label="Email" invalid={errors.email} touched={touched.email} />
                <FieldWrapper type="text" name="firstName" label="First Name" invalid={errors.firstName} touched={touched.firstName} />
                <FieldWrapper type="text" name="lastName" label="Last Name" invalid={errors.lastName} touched={touched.lastName} />
                <FieldWrapper type="checkbox" name="admin" label="Admin" invalid={errors.admin} touched={touched.admin} />
                <FormControls
                  allowSubmit={isValid}
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                />
              </Form>
            )}
          </Formik>
        )}
      </EmployeeContext.Consumer>
    );
  }

}

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  handleSave: PropTypes.func
};

export default EmployeeForm;
