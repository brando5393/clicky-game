import React from 'react';
import Header from './components/header';
import Scorebar from './components/scorebar';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <Scorebar />
      <Header />
      <Board />
    </div>
  );
}

export default App;
