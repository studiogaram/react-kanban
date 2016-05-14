import React from 'react';

export default class FilterComponent extends React.Component {

  constructor(props) {
    super(props);
    const items = props.filterState;
  }

  render() {
    const { filterState } = this.props;
    return (
      <div className="header-filter">
        <p className="filter-title">QUICK FILTERS</p>
        <ul className="filter-content">
          {filterState.map((filter, i) => {
            console.log(filter);
            return (
              <li key={i}>
                <a className={filter.state ? 'active' : ''} href="#">
                  {filter.name}
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
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
