import React from 'react';
import './App.css';
import Navigation from './nav/Navigation';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
          <div className="container">
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/employees" component={Employees} />
              <Route path="/timesheets" component={Timesheets} />
              <Redirect to="/employees" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
