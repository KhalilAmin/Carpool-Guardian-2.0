import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Demo from "./pages/Demo"
import Teacher from "./pages/Teacher"
import Parent from "./pages/Parent"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import School from "./pages/School";
import CardHeading from "./components/CardHeading";
import CardWrapper from "./components/CardWrapper";
import TeacherSignUp from "./components/PatsTempComponents/TeacherSignUp";
// import GuardianForm from "./components/Form/GuardianForm.js";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Demo" component={Demo} />
        <Route exact path="/Teacher" component={Teacher} />
        <Route exact path="/Parent" component={Parent} />
        <Route exact path="/Temp" component={Temp} />
        <Route exact path="/School" component={School} />
        <Route exact path="/TeacherSignUp" component={TeacherSignUp} /> 
        {/* TEACHER SIGN UP WILL NOT BE A PAGE IN THE FINAL PRODUCT - JUST HERE NOW SO WE CAN ADD TO THE DB */}

      </Switch>
    </div>
  </Router>






// let variable = ["I am the heading", "It might be your heading", "I am not your heading"];

// const App = () => (
//   <CardWrapper>
//     <CardHeading>
//       <h2> {variable[0]} </h2>
//     </CardHeading>
//   </CardWrapper>
 
  // <Router>
  /* <div> */
  /* <Switch>
    <Route exact path="/" component={Temp} />
  </Switch> */
  /* <Container>
    <Row>
    <FormWrapper>
      <GuardianForm>
      </GuardianForm>
    </FormWrapper>
  </Row>
  
  <Row>
    <FormWrapper>
      <StudentForm>
      </StudentForm>
    </FormWrapper>
    </Row>
  </Container>
     {/* <Route exact path="/" component={Login} /> */
  /* <Route exact path="/" component={Login} />
    <Router>
      <div>
        <Switch>
           {/* <Route exact path="/" component={Login} /> */
  //  <Route exact path="/" component={Login} />
  //   <Route exact path="/Demo" component={Demo} />
  //   <Route exact path="/Teacher" component={Teacher} />
  //   <Route exact path="/Parent" component={Parent} />
  //   <Route exact path="/Temp" component={Temp} />
  // <Switch> 
  //   </div>
  // </Router> */}
  // );
  // </Switch>
  //   </div>
  // </Router>
);

export default App;