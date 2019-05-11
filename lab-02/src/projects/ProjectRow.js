import React from 'react';
import PropTypes from 'prop-types';

class ProjectRow extends React.Component {
  state = { count: 0 };
  // Really use a function when passing to setSTate
  clickCount = () => { this.setState({ count: this.state.count + 1 }); }
  render() {
    const { project } = this.props;

    return (
      <tr>
        <td>
          <button onClick={this.clickCount}>XXX</button>
        </td>
        <td>
          {project.name} click: {this.state.count}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectRow;
