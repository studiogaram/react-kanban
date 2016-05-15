import React from 'react';
import ButtonComponent from './ButtonComponent.react';
import FilterComponent from './FilterComponent.react';

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    const items = props.items;
    this.state = {
      teamName: items.name,
      boardName: items.boards[0].name,
    };
  }

  render() {
    return (
      <div className="navbar navbar-fixed">
        <div className="container-fluid">
          <div className="row row-fluid">
            <div className="navbar-left">
              <p className="header-subtitle">{this.state.teamName}</p>
              <h1 className="header-title">{this.state.boardName}</h1>
              <FilterComponent
                filterState={this.props.filterState}
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
  items: React.PropTypes.object.isRequired,
  filterState: React.PropTypes.array.isRequired,
};
