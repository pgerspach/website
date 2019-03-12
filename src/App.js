import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FutureProjects from "./pages/FutureProjects";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";
import Skillset from "./pages/Skillset";
import EduAndExp from "./pages/EduAndExp";
import createHistory from "history/createBrowserHistory";

class App extends Component {
  render() {
    const history = createHistory({
      basename: process.env.PUBLIC_URL
    });
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/FutureProjects" component={FutureProjects} />
            <Route exact path="/Interests" component={Interests} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Skillset" component={Skillset} />
            <Route exact path="/EduAndExp" component={EduAndExp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;