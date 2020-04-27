import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import "./css/app.scss";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/project/:id" component={Project} />
          <Route path="/" exact={true} component={Main} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
