import React from 'react';
import KanbanActions from '../actions/KanbanActions';

export default class FilterComponent extends React.Component {

  toggleFilter(e) {
    KanbanActions.toggleFilter(e.target.value);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { filterState } = this.props;
    return (
      <div className="header-filter">
        <p className="filter-title">QUICK FILTERS</p>
        <ul className="filter-content">
          {filterState.map((filter, i) => {
            return (
              <li key={i}>
                <a
                  className={filter.state ? 'active' : ''}
                  href="#"
                  value={filter.name}
                  onClick={this.toggleFilter}
                >
                  {this.capitalizeFirstLetter(filter.name)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

FilterComponent.propTypes = {
  filterState: React.PropTypes.array.isRequired,
};
