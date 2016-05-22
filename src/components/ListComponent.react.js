import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import CardComponent from './CardComponent.react';
import ButtonComponent from './ButtonComponent.react';
import Sortable from 'react-sortablejs';

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.createCard = this.createCard.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  createCard() {
    KanbanActions.createCard('asdfsfd', this.props.id);
  }

  sortCard(order, target) {
    KanbanActions.sortCard(order, target);
  }

  removeList() {
    KanbanActions.removeList(this.props.id);
  }

  render() {
    const filterItems = this.props.filterState.filter(val =>
      val.state === true
    ).map(val =>
      val.name
    );

    const cardItems = this.props.cardOrder.filter(val =>
      filterItems.indexOf(this.props.items[val].type) > -1
    ).map((val, key) => (
      <div key={key} data-id={val}>
        <CardComponent
          key={this.props.items[val].id}
          itemCompleted={this.props.items[val].completed}
          itemType={this.props.items[val].type}
          itemTitle={this.props.items[val].title}
          itemContent={this.props.items[val].content}
          itemBirthTime={this.props.items[val].birthTime}
        />
      </div>
    ));
    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>{this.props.cardOrder.length}</b> {this.props.name}
          </p>
          <button
            className="btn-create"
            onClick={this.createCard}
          />
          <button
            className="btn-trash"
            onClick={this.removeList}
          />
        </div>
        <div className="list-body">
          <Sortable
            options={{
              group: {
                name: 'cards',
                pull: true,
                put: true,
              },
            }}
            className="sortable"
            ref={this.props.id}
            onChange={(items) => {
              this.sortCard(items, this.props.id);
            }}
          >
            {cardItems}
          </Sortable>
        </div>
      </div>
    );
  }
}

ListComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  cardOrder: React.PropTypes.array.isRequired,
  filterState: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired,
};

