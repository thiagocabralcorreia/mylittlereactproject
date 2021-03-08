import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1 className="mainTitle">My Little React Project</h1>
          <p>Header</p>
        </header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <footer>
          <p>Footer</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
