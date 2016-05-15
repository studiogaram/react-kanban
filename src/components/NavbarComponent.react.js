import React from 'react';
import ButtonComponent from './ButtonComponent.react';
import FilterComponent from './FilterComponent.react';
import ModalComponent from './ModalComponent.react';

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    const items = props.items;
    this.state = {
      teamName: items.name,
      boardName: items.boards[0].name,
      isShowingModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ isShowingModal: true });
  }
  handleClose() {
    this.setState({ isShowingModal: false });
  }

  render() {
    console.log(this.state.isShowingModal);
    return (
      <div className="navbar navbar-fixed">
        <ModalComponent
          isShowingModal={this.state.isShowingModal}
          handleClose={this.handleClose}
        />
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
                onClick={this.handleClick.bind(this)}
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
