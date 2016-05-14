import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/KanbanApp.react.js';

const App = () => (
  <AppWrapper />
);

ReactDOM.render(<App />, document.getElementById('app'));
