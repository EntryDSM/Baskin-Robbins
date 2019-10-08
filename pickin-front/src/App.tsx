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
    interviewStatus: "Pickin"
  };

  private handleLoginStatus = (): void =>
    this.setState({ isLogin: !this.state.isLogin });

  private handleInterviewStatus = (status: string): void =>
    this.setState({ interviewStatus: status });

  private handleAgencyName = (name: string): void =>
    this.setState({ agencyName: name });

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
                      handleLoginStatus={this.handleLoginStatus}
                      handleInterviewStatus={this.handleInterviewStatus}
                      handleAgencyName={this.handleAgencyName}
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
          <Route
            exact
            path="/create"
            component={
              this.state.isLogin
                ? () => (
                    <CreateInterview
                      changeLoginStatus={this.handleLoginStatus}
                    />
                  )
                : Landing
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
