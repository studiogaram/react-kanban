import React from 'react';
import Modal from 'react-modal';
import KanbanActions from '../actions/KanbanActions';

export default class CreateListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ title: '' });

    this.createList = this.createList.bind(this);
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  createList() {
    KanbanActions.createList(this.state.title, 0);
    this.setState({ title: '' });
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
          <h4 className="modal-title" ref="subtitle">Create List</h4>
          <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="label-control">List Name</label>
            <input
              autoFocus
              name="listName"
              className="form-control input-block"
              value={this.state.title}
              onChange={this.handleChange.bind(this, 'title')}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={this.createList}
          >
          Create </button>
        </div>
      </Modal>
    );
  }
}


CreateListModal.propTypes = {
  currentFilterState: React.PropTypes.array.isRequired,
  listOrder: React.PropTypes.array.isRequired,
  lists: React.PropTypes.object.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  targetList: React.PropTypes.string.isRequired,
};

