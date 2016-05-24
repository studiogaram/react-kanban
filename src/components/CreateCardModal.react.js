import React from 'react';
import Modal from 'react-modal';
import KanbanActions from '../actions/KanbanActions';

export default class CreateCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ title: 'ISSUE-',
                    filter: props.currentFilterState[0].name,
                    list: props.listOrder[0],
                  });

    this.createCard = this.createCard.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    if (typeof this.props.listOrder[0] === 'undefined') {
      this.props.closeModal();
    } else {
      this.setState({
        title: 'ISSUE-',
        filter: this.props.currentFilterState[0].name,
        list: this.props.targetList.length ?
          this.props.targetList : this.props.listOrder[0],
      });
    }
  }
  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  createCard() {
    KanbanActions.createCard(this.state.title, this.state.filter, this.state.list);
    this.props.closeModal();
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
              value={this.state.title}
              onChange={this.handleChange.bind(this, 'title')}
            />
          </div>
          <div className="form-group">
            <label className="label-control">Issue Type</label>

            <select
              onChange={this.handleChange.bind(this, 'filter')}
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
              onChange={this.handleChange.bind(this, 'list')}
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


CreateCardModal.propTypes = {
  currentFilterState: React.PropTypes.array.isRequired,
  listOrder: React.PropTypes.array.isRequired,
  lists: React.PropTypes.object.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  targetList: React.PropTypes.string.isRequired,
};

