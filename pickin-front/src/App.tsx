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
  SignIn
} from "./pages";

interface Props {}

interface State {
  isLogin: boolean;
  isAdmin: boolean;
  agencyName: string;
  interviewStatus: string;
}

class App extends React.Component<Props, State> {
  state = {
    isLogin: true,
    isAdmin: true,
    agencyName: "Pickin",
    interviewStatus: "Will pick"
  };

  private changeLoginStatus = (): void =>
    this.setState({ isLogin: !this.state.isLogin });

  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            component={
              this.state.isLogin
                ? () => (
                    <Main
                      isAdmin={this.state.isAdmin}
                      agencyName={this.state.agencyName}
                      interviewStatus={this.state.interviewStatus}
                      changeLoginStatus={this.changeLoginStatus}
                    />
                  )
                : Landing
            }
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/agency" component={AgencySignUp} />
          <Route
            exact
            path="/signup/interviewer"
            component={InterviewerSignUp}
          />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
