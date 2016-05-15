import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import CardComponent from './CardComponent.react';
import ButtonComponent from './ButtonComponent.react';
import Sortable from 'react-sortablejs';

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    const cards = props.items;
    this.state = {
      name: props.name,
      cards,
      id: props.id,
    };
    this.createCard = this.createCard.bind(this);
  }

  createCard() {
    KanbanActions.createCard('asdfsfd', this.state.id);
  }

  render() {
    const filterItems = [];

    for (let key in this.props.filterState) {
      if (this.props.filterState[key].state === true) {
        filterItems.push(this.props.filterState[key].name);
      }
    }

    const { cards } = this.state;

    let sortable = null; // sortable instance
    let carditems = [];

    for (let key in cards) {
      if (filterItems.indexOf(cards[key].type) > -1) {
        carditems.push(
          <CardComponent
            key={key}
            data-id={key}
            itemCompleted={cards[key].completed}
            itemType={cards[key].type}
            itemTitle={cards[key].title}
            itemContent={cards[key].content}
            itemBirthTime={cards[key].birthTime}
          />
        );
      }
    }

    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>{Object.keys(this.state.cards).length}</b> {this.state.name}
          </p>
        </div>
        <div className="list-body">
          <Sortable
            options={{
            }}
            ref={(c) => {
              if (c) {
                sortable = c.sortable;
              }
            }}
            tag="div"
            onChange={(order, sortable) => {
              console.log(order);
              console.log(sortable);
              this.props.onChange(order);
            }}
          >
            {carditems}
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
};

