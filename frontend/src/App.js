import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vou aprender react se Deus quiser, vou ser um otimo programador :)
        </p>
        <a
          className="App-link"
          href="http://rocketseat.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Semana Omnistack
        </a>
      </header>
    </div>
  );
}

export default App;
