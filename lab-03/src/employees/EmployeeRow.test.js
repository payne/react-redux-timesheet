import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
  let wrapper;
  beforeEach(() => {
    const employee = { _id: 1, name: 'Matt Payne' };
    wrapper = shallow(<EmployeeRow employee={employee}></EmployeeRow>);
  });
  it('should instantiante', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render values into expected cells', () => {
    expect(wrapper.find('td').at(0).text()).toEqual('Matt Payne');
  });
});
