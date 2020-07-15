import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register } from './Components/Register/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Register} />
        </Router>
      </div>
    );
  }
}
export default App;
