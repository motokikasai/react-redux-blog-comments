import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <section className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:slug" component={Blog} />
            <Route>Error: 404 Not Found</Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
