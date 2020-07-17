import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DashBoard } from './Components/Employee/DashBoard';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { GetEmployee } from './Components/Employee/GetEmployee';
import { AddEmployee } from './Components/Employee/AddEmployee';
import { UpdateEmployee } from './Components/Employee/UpdateEmployee';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={ Login} />
          <Route  path="/register" component={ Register} />
          <Route  path="/dashBoard" component={ DashBoard} />
          <Route  path="/getEmployee " component={ GetEmployee } />
          <Route  path="/addEmployee " component={ AddEmployee } />
          <Route  path="/updateEmployee " component={ UpdateEmployee } />
        </Router>
      </div>
    );
  }
}
export default App;
