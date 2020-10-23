import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './LifeCycle';
import TodoList from './TodoList';


ReactDOM.render(
  <React.StrictMode>
    <TodoList />
    <LifeCycle />
  </React.StrictMode>,
  document.getElementById('root')
);

