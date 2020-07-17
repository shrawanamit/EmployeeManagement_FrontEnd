import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DashBoard } from './Components/Employee/DashBoard';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={ Login} />
          <Route  path="/register" component={ Register} />
          <Route  path="/dashBoard" component={ DashBoard} />
        </Router>
      </div>
    );
  }
}
export default App;
