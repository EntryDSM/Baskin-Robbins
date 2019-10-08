import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from "./../public/GlobalStyle";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  Landing,
  SignUp,
  AgencySignUp,
  InterviewerSignUp,
  Main,
  SignIn,
  CreateInterview
} from "./pages";

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
          <Route exact path="/main" component={() => <Main isAdmin={true} />} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/create" component={CreateInterview} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
