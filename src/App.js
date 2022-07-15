import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./Components/pages/about";
import Jobs from "./Components/pages/jobs";
import Home from "./Components/pages/Home";
import Models from "./Components/pages/models";

function App() {
  return (
    <>
      <Router>
       
       <div className="sticky-top" style={{ zIndex: 1090 }}> <Navbar> </Navbar> </div> 
        <Switch>
          <Route path="/Jobs" exact component={Jobs} />
          <Route path="/Models" exact component={Models} />
          <Route path="/About" exact component={About} />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route />
        </Switch>
      </Router>
    </>
  );
}

export default App;
