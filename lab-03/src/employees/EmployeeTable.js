import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const { employees } = this.props;
    return (
      <Table border striped>
        <thead><tr><th>Name</th></tr></thead>
        <tbody>
          {employees.map(employee => (<EmployeeRow employee={employee} key={employee._id} />))}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
