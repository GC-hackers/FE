import React from 'react';
import { Counter } from './features/counter/Counter';
import D3 from './components/D3';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Fucks I give
        <Counter />
        <D3 />
      </header>
    </div>
  );
}

export default App;
