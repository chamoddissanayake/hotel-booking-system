import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './components/search.jsx';
import SearchResults from './components/searchResults.jsx';
import SelectedHotel from './components/selectedHotel.jsx';
import Header from './components/header.jsx';

import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/logout" exact component={Logout}></Route>

        <Route path="/" exact component={Search}></Route>
        <Route path="/searchResults" exact component={SearchResults}></Route>
        <Route path="/select/:hotelId" exact component={SelectedHotel}></Route>

      </div>
    </Router>

  );
}

export default App;
