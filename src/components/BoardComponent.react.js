import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import ListComponent from './ListComponent.react';
import ButtonComponent from './ButtonComponent.react';
import Sortable from 'react-sortablejs';

export default class BoardComponent extends React.Component {
  createList() {
    KanbanActions.createList('asdfsfd', 0);
  }

  sortList(order, target) {
    KanbanActions.sortList(order, target);
  }

  render() {
    const listItems = this.props.items.listOrder.map((val, key) => (
      <div key={key} className={'tempStyleDiv'} data-id={val}>
        <ListComponent
          key={key}
          id={val}
          data-id={val}
          name={this.props.lists[val].name}
          items={this.props.cards}
          cardOrder={this.props.lists[val].cardOrder}
          filterState={this.props.filterState}
          openModal={this.props.openModal}
        />
      </div>
    ));
    return (
      <div className="container-fluid content">
        <div className="row row-fluid">
          <Sortable
            options={{
              group: {
                name: 'lists',
                pull: true,
                put: true,
              },
            }}
            className={'tempStyleDiv'}
            ref={this.props.items.id}
            onChange={(items) => {
              console.log(items);
              this.sortList(items, 0);
            }}
          >
            {listItems}
          </Sortable>
          <ButtonComponent
            text="Create List"
            state="list"
            onClick={this.createList}
          />
        </div>
      </div>
    );
  }
}

BoardComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
  lists: React.PropTypes.object.isRequired,
  cards: React.PropTypes.object.isRequired,
  filterState: React.PropTypes.array.isRequired,
};
