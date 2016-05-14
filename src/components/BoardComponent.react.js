import React from 'react';
import ListComponent from './ListComponent.react';

export default class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    const lists = props.items.list;
    this.state = {
      name: props.items.name,
      lists,
    };
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="container-fluid content">
        <div className="row row-fluid">
          {lists.map((list, i) => {
            return (
              <ListComponent
                key={i}
                name={list.name}
                items={list.card}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

BoardComponent.propTypes = {
  items: React.PropTypes.object.isRequired,
  // areAllCompleted: React.PropTypes.bool.isRequired,
  // allTodos: React.PropTypes.object.isRequired,
  // statusFilter: React.PropTypes.oneOf(['all', 'completed', 'incompleted']),
};
