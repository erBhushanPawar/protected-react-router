import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import Application from "./components/Application";
import { ProtectedRoute } from "./components/protected.route";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Demo for react router</h1>
        <ul>
          <li>Topics covered</li>
          <li>Router</li>
          <li>Switch</li>
          <li>Protected Route</li>
          <li>LocalStorage</li>
        </ul>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <ProtectedRoute path="/app" component={Application} exact />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
