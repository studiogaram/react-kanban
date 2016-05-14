import React from 'react';
import NavbarComponent from './NavbarComponent.react';
import BoardComponent from './BoardComponent.react';
import JsonConstant from '../constants/JsonConstant';

export default class KanbanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = JsonConstant;
  }
  render() {
    return (
      <div>
        <NavbarComponent
          items={this.state.team}
          filterState={this.state.currentFilterState}
        />
        <BoardComponent items={this.state.team.board[0]} />
      </div>
    );
  }
}
