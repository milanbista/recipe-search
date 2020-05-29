import React, { useState } from "react";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="root">
        <switch>
          <Route path="/" exact component={HomePage}></Route>

          <Route path="/recipe" component={RecipePage}></Route>
        </switch>
      </div>
    </Router>
  );
};

export default App;
