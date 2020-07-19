import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DashBoard } from './Components/Employee/DashBoard';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { UpdateEmployee } from './Components/Employee/UpdateEmployee';
import { AddEmployee } from './Components/Employee/AddEmployee';
import { DeleteEmployee } from './Components/Employee/DeleteEmployee';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={ Login} />
          <Route  path="/register" component={ Register} />
          <Route  path="/dashBoard" component={ DashBoard} />
          <Route  path="/addEmployee" component={ AddEmployee } />
          <Route  path="/updateEmployee" component={ UpdateEmployee } />
          <Route  path="/deleteEmployee" component={ DeleteEmployee } />
        </Router>
      </div>
    );
  }
}
export default App;
