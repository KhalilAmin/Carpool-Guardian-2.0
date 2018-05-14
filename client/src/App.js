import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Temp from "./pages/Temp";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Temp} />
      </Switch>
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
      </Container> */}
    </div>
  </Router>
);

export default App;