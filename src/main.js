import React from 'react';
import ReactDOM from 'react-dom';
import KanbanApp from './components/KanbanApp.react.js';

const App = () => (
  <KanbanApp />
);

ReactDOM.render(<App />, document.getElementById('app'));
