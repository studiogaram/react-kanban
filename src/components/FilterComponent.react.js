import React from 'react';

export default class FilterComponent extends React.Component {
  render() {
    return (
      <div className="header-filter">
        <p className="filter-title">QUICK FILTERS</p>
        <ul className="filter-content">
          <li><a href="#">Improvement</a></li>
          <li><a className="active" href="#">Defect</a></li>
        </ul>
      </div>
    );
  }
}

FilterComponent.propTypes = {
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
