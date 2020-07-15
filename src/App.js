import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </div>
    );
  }
}
export default App;
