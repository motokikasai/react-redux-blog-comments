import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Router>
        <section className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Blog} />
            <Route>Error: 404 Not Found</Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
