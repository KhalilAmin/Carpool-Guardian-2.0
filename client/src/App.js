import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Demo from "./pages/Demo"
import Parent from "./pages/Parent"
import Guardian from "./pages/GuardianPortal"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import School from "./pages/School";

import CardHeading from "./components/CardHeading";
import CardWrapper from "./components/CardWrapper";
import TeacherSignUp from "./components/PatsTempComponents/TeacherSignUp";
import TeacherPortal from "./pages/TeacherPortal";
// import GuardianForm from "./components/Form/GuardianForm.js";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Demo" component={Demo} />
        <Route exact path="/Parent" component={Parent} />
        <Route exact path="/Guardian" component={Guardian} />
        <Route exact path="/Temp" component={Temp} />
        <Route exact path="/School" component={School} />
        <Route exact path="/TeacherSignUp" component={TeacherSignUp} /> 
        {/* TEACHER SIGN UP WILL NOT BE A PAGE IN THE FINAL PRODUCT - JUST HERE NOW SO WE CAN ADD TO THE DB */}
        <Route exact path="/TeacherPortal" component={TeacherPortal} />

      </Switch>
    </div>
  </Router>
);

export default App;