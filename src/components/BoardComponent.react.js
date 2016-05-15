import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import ListComponent from './ListComponent.react';
import ButtonComponent from './ButtonComponent.react';

export default class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    const lists = props.items.lists;
    this.state = {
      name: props.items.name,
      lists,
    };
  }

  createList() {
    KanbanActions.createList('asdfsfd', 0);
  }

  render() {
    const { lists } = this.state;
    let listitems = [];
    Object.keys(lists).forEach((key) => {
      listitems.push(
        <ListComponent
          key={key}
          id={lists[key].id}
          name={lists[key].name}
          items={this.props.cards}
          cardOrder={lists[key].cardOrder}
          filterState={this.props.filterState}
        />
      );
    });
    return (
      <div className="container-fluid content">
        <div className="row row-fluid">
          {listitems}
          <ButtonComponent
            text="Create List"
            state="primary"
            onClick={this.createList}
          />
        </div>
      </div>
    );
  }
}

BoardComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
};
