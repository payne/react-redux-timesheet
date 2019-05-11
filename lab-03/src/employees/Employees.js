import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';

class Employees extends Component {
  state = {
    employees: [
      { _id: 1, name: 'Matt Payne' },
      { _id: 2, name: 'Tracey Payne' },
      { _id: 3, name: 'Tim Hemmer' }
    ]
  }
  render() {
    const { employees } = this.state;
    return (
      <div><h1>Employees</h1>
        <EmployeeTable employees={employees} />
      </div>
    );
  }
}

export default Employees;
