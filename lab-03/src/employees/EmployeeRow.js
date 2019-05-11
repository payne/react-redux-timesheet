import React from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <tr><td>{employee.name}</td></tr>
    );
  }
}

export default EmployeeRow;
