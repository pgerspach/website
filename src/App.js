import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FutureProjects from "./pages/FutureProjects";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";
import Skillset from "./pages/Skillset";
import EduAndExp from "./pages/EduAndExp";
import {createBrowserHistory} from "history";

class App extends Component {
  render() {
    const browserHistory = createBrowserHistory();
    return (
      <Router basename={process.env.PUBLIC_URL}history={browserHistory}>
        <div>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/FutureProjects"} component={FutureProjects} />
            <Route path={"/Interests"} component={Interests} />
            <Route path={"/Projects"} component={Projects} />
            <Route path={"/Skillset"} component={Skillset} />
            <Route path={"/EduAndExp"} component={EduAndExp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
