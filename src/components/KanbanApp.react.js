import React from 'react';
import KanbanStore from '../stores/KanbanStore';
import KanbanActions from '../actions/KanbanActions';
import NavbarComponent from './NavbarComponent.react';
import BoardComponent from './BoardComponent.react';
import CreateCardModal from './CreateCardModal.react';

const getKanbanState = () => ({
  allItems: KanbanStore.getAll(),
});


export default class KanbanApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = getKanbanState();
    this.state.modalIsOpen = false;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state.targetList = false;
  }

  componentDidMount() {
    KanbanStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    KanbanStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getKanbanState());
  }

  openModal(event) {
    this.setState({ targetList: event.target.value });
    this.setState({ modalIsOpen: true });
  }


  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <CreateCardModal
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          currentFilterState={this.state.allItems.currentFilterState}
          listOrder={this.state.allItems.teams.boards[0].listOrder}
          lists={this.state.allItems.lists}
          targetList={this.state.targetList}
        />
        <NavbarComponent
          items={this.state.allItems.teams}
          filterState={this.state.allItems.currentFilterState}
          openModal={this.openModal}
        />
        <BoardComponent
          items={this.state.allItems.teams.boards[0]}
          lists={this.state.allItems.lists}
          cards={this.state.allItems.cards}
          filterState={this.state.allItems.currentFilterState}
          openModal={this.openModal}
        />
      </div>
    );
  }
}
