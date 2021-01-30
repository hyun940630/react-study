import './App.css';
import React from 'react';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;
