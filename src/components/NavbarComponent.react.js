import React from 'react';
import ButtonComponent from './ButtonComponent.react';
import FilterComponent from './FilterComponent.react';

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <div className="navbar navbar-fixed">
        <div className="container-fluid">
          <div className="row row-fluid">
            <div className="navbar-left">
              <p className="header-subtitle">navbar-left</p>
              <h1 className="header-title">header-title</h1>
              <FilterComponent
              />
            </div>
            <div className="navbar-right">
              <ButtonComponent
                text="Create Issue"
                state="primary"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
