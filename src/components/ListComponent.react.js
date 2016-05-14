import React from 'react';
import CardComponent from './CardComponent.react';

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
    return (
      <div className="list">
        <div className="list-header">
          <p className="list-title">
            <b>{this.state.cards.length}</b> {this.state.name}
          </p>
        </div>
        <div className="list-body">
          {cards.map((card, i) => {
            return (
              <CardComponent
                key={i}
                itemCompleted={card.completed}
                itemType={card.type}
                itemTitle={card.title}
                itemContent={card.content}
                itemBirthTime={card.birthTime}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ListComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
};

