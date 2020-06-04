import React from 'react';
import Matrix from './components/Matrix/Matrix';
import Form from './components/Form/Form';
import logo from './logo.svg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
      <Matrix />
    </div>
  );
}

export default App;
