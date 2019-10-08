import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from "./../public/GlobalStyle";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  Landing,
  SignUp,
  AgencySignUp,
  InterviewerSignUp
} from "./pages/index";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/signup/agency" component={AgencySignUp} />
          <Route
            exact
            path="/signup/interviewer"
            component={InterviewerSignUp}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
