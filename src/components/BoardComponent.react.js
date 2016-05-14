import React from 'react';
import ListComponent from './ListComponent.react';

export default class BoardComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid content">
        <div className="row row-fluid">
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
        </div>
      </div>
    );
  }
}
