import React from 'react';
import KanbanActions from '../actions/KanbanActions';
import ListComponent from './ListComponent.react';
import ButtonComponent from './ButtonComponent.react';
import Sortable from 'react-sortablejs';
import CreateListModal from './CreateListModal.react';

export default class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  createList() {
    KanbanActions.createList('asdfsfd', 0);
  }
  
  openModal(event) {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
            onClick={this.openModal}
          />
        </div>
        <CreateListModal 
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          />
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
