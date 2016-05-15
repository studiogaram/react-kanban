import React from 'react';
import KanbanStore from '../stores/KanbanStore';
import KanbanActions from '../actions/KanbanActions';
import NavbarComponent from './NavbarComponent.react';
import BoardComponent from './BoardComponent.react';

const getKanbanState = () => ({
  allItems: KanbanStore.getAll(),
});


export default class KanbanApp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = getKanbanState();
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

  render() {
    return (
      <div>
        <NavbarComponent
          items={this.state.allItems.teams}
          filterState={this.state.allItems.currentFilterState}
        />
        <BoardComponent
          items={this.state.allItems.teams.boards[0]}
          lists={this.state.allItems.lists}
          cards={this.state.allItems.cards}
          filterState={this.state.allItems.currentFilterState}
        />
      </div>
    );
  }
}
