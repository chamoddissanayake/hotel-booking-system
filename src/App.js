import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './components/search.jsx';
import SearchResults from './components/searchResults.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <p>Logo</p>
        <Route path="/" exact component={Search}></Route>
        <Route path="/searchResults" exact component={SearchResults}></Route>

      </div>
    </Router>

  );
}

export default App;
