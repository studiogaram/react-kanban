import React from 'react';
import CardComponent from './CardComponent.react';
import Sortable from 'react-sortablejs';

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    const cards = props.items;

    this.state = {
      name: props.name,
      cards,
    };
  }

  render() {
    const { cards } = this.state;
    let sortable = null; // sortable instance

    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>{this.state.cards.length}</b> {this.state.name}
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
              this.props.onChange(order);
            }}
          >
            {cards.map((card, i) => {
              return (
                <CardComponent
                  key={i}
                  data-id={card.order}
                  itemCompleted={card.completed}
                  itemType={card.type}
                  itemTitle={card.title}
                  itemContent={card.content}
                  itemBirthTime={card.birthTime}
                />
              );
            })}
          </Sortable>
        </div>
      </div>
    );
  }
}

ListComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
};

