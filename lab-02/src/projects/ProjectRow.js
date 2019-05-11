import React from 'react';
import PropTypes from 'prop-types';

class ProjectRow extends React.Component {
  count = 0;
  clickCount() { this.count++; }
  render() {
    const { project } = this.props;

    return (
      <tr>
        <td>
          <button onClick={this.clickCount}>XXX</button>
        </td>
        <td>
          {project.name} click: {this.count}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectRow;
