import React from 'react';
export default class ButtonComponent extends React.Component {
  render() {
    return (
      <button className="btn btn-primary">Create Issue</button>
    );
  }
}

ButtonComponent.propTypes = {
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
