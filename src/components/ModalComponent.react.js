import React from 'react';
import Modal from 'react-modal';
import KanbanActions from '../actions/KanbanActions';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);


    this.state = ({ value: 'ISSUE-',
                    filter: props.currentFilterState[0].name,
                    list: props.listOrder[0],
                  });

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeList = this.handleChangeList.bind(this);
    this.createCard = this.createCard.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    if (typeof this.props.listOrder[0] === 'undefined') {
      this.props.closeModal();
    } else {
      this.setState({
        value: 'ISSUE-',
        filter: this.props.currentFilterState[0].name,
        list: this.props.listOrder[0],
      });
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeFilter(event) {
    this.setState({ filter: event.target.value });
  }

  handleChangeList(event) {
    this.setState({ list: event.target.value });
  }

  createCard() {
    console.log(this.state);
    KanbanActions.createCard(this.state.value, this.state.list);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
        closeTimeoutMS={150}
      >
        <button
          type="button"
          onClick={this.props.closeModal}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >×</button>
        <div className="modal-header">
          <h4 className="modal-title" ref="subtitle">Create Issue</h4>
          <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="label-control">Issue Name</label>
            <input
              name="issueName"
              className="form-control input-block"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label-control">Issue Type</label>

            <select
              onChange={this.handleChangeFilter}
              value={this.state.filter}
              className="form-control input-block"
            >
              {this.props.currentFilterState.map((filter, i) => {
                return (
                  <option key={i} value={filter.name}>
                    {filter.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="label-control">Issue List</label>
            <select
              onChange={this.handleChangeList}
              value={this.state.list}
              className="form-control input-block"
            >
              {this.props.listOrder.map((list, i) => {
                return (
                  <option key={i} value={list}>
                    {this.props.lists[list].name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={this.createCard}
          >
          Create </button>
        </div>
      </Modal>
    );
  }
}


ModalComponent.propTypes = {
  currentFilterState: React.PropTypes.array.isRequired,
  listOrder: React.PropTypes.array.isRequired,
  lists: React.PropTypes.object.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
};

