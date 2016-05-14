import React from 'react';
import NavbarComponent from './NavbarComponent.react';
import BoardComponent from './BoardComponent.react';

export default class KanbanApp extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BoardComponent />
      </div>
    );
  }
}
