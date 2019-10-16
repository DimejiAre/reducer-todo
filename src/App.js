import React from 'react';
import Todos from './components/Todos';
import './scss/App.scss'

function App() {
  return (
    <div className="main-page">
      <h2>Todo List</h2>
      <Todos />
    </div>
  );
}

export default App;
