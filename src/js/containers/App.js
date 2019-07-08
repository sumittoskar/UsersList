import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import TableContainer from "../components/TableContainer";
import Home from "../components/Home";
import ErrorNotFound from "../util/ui/ErrorNotFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listing" component={TableContainer} />
          <Route component={ErrorNotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
