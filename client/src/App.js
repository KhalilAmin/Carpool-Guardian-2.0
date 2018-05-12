import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Temp from "./pages/Temp";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
         {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Temp} />
      </Switch>
    </div>
  </Router>
);

export default App;