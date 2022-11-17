import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/new-york"
          render={() => (
            <div className="App">
              <Weather city="New York" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/london"
          render={() => (
            <div className="App">
              <Weather city="London" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/tokyo"
          render={() => (
            <div className="App">
              <Weather city="Tokyo" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/berlin"
          render={() => (
            <div className="App">
              <Weather city="Berlin" />
            </div>
          )}
        />
      </div>
    );
  }
}
