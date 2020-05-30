import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App">
      <section className="header">
        <img src={logo} className="logo" alt="logo" />
      </section>
      <Router>
        <section className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Blog} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
