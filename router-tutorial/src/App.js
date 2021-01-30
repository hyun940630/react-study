import './App.css';
import React from 'react';
import About from './About';
import Home from './Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
