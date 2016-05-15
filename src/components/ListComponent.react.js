import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import CardComponent from './CardComponent.react';
import ButtonComponent from './ButtonComponent.react';
import Sortable from 'react-sortablejs';

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      cards: props.items,
      cardOrder: props.cardOrder,
      id: props.id,
    };
    this.createCard = this.createCard.bind(this);
  }

  createCard() {
    KanbanActions.createCard('asdfsfd', this.state.id);
  }

  sortCard(order, target) {
    KanbanActions.sortCard(order, target);
  }

  render() {
    const filterItems = this.props.filterState.filter(val =>
      val.state === true
    ).map(val =>
      val.name
    );

    const cardItems = this.props.cardOrder.filter(val =>
      filterItems.indexOf(this.state.cards[val].type) > -1
    ).map((val, key) => (
      <div key={key} data-id={val}>
        <CardComponent
          key={this.state.cards[val].id}
          itemCompleted={this.state.cards[val].completed}
          itemType={this.state.cards[val].type}
          itemTitle={this.state.cards[val].title}
          itemContent={this.state.cards[val].content}
          itemBirthTime={this.state.cards[val].birthTime}
        />
      </div>
    ));
    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>{this.props.cardOrder.length}</b> {this.state.name}
          </p>
        </div>
        <div className="list-body">
          <Sortable
            options={{
              group: {
                name: 'shared',
                pull: true,
                put: true,
              },
            }}
            ref={this.state.id}
            onChange={(items) => {
              this.sortCard(items, this.state.id);
            }}
          >
            {cardItems}
          </Sortable>
          <ButtonComponent
            text="Create Issue"
            state="primary"
            onClick={this.createCard}
          />
        </div>
        <div className="list-footer">
          <ButtonComponent
            text="Create Issue"
            state="primary"
            onClick={this.createCard}
          />
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

