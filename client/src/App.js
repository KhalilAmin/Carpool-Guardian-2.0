import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Demo from "./pages/Demo"
import Teacher from "./pages/Teacher"
import Parent from "./pages/Parent"
import Temp from "./pages/Temp";
import Nav from "./components/Nav";
import CardHeading from "./components/CardHeading";
import CardWrapper from "./components/CardWrapper";

const App = () => (
  <CardWrapper>
  <CardHeading>
    <h2> I am the heading </h2>
    </CardHeading>
  </CardWrapper>
  // <Router>
    {/* <div> */}
      {/* <Switch>
        <Route exact path="/" component={Temp} />
      </Switch> */}
      {/* <Container>
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
         {/* <Route exact path="/" component={Login} /> */}
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/Demo" component={Demo} />
        <Route exact path="/Teacher" component={Teacher} />
        <Route exact path="/Parent" component={Parent} />
        <Route exact path="/Temp" component={Temp} />
      </Switch> */}
  //   </div>
  // </Router> */}
// );

export default App;