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
  CreateInterview,
  Certification
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

  private handleLoginStatus = (isLogin: boolean): void => {
    this.setState({ isLogin: isLogin });
  };

  private handleAdminInfo = (isAdmin: boolean): void => {
    this.setState({ isAdmin: isAdmin });
  };

  private handleInterviewStatus = (status: string): void =>
    this.setState({ interviewStatus: status });

  private handleAgencyName = (name: string): void =>
    this.setState({ agencyName: name });

  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          {/* <Route exact path="/signup" component={SignUp} /> */}
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
          <Route exact path="/signup/agency" component={AgencySignUp} />
          <Route
            exact
            path="/signup/interviewer"
            component={InterviewerSignUp}
          />
          <Route
            exact
            path="/signin"
            component={() => (
              <SignIn
                handleAdminInfo={this.handleAdminInfo}
                handleLoginStatus={this.handleLoginStatus}
                isLogin={this.state.isLogin}
              />
            )}
          />
          <Route
            exact
            path="/create"
            component={
              this.state.isLogin
                ? () => (
                    <CreateInterview
                      handleLoginStatus={this.handleLoginStatus}
                    />
                  )
                : Landing
            }
          />
          <Route
            exact
            path="/certification"
            component={() => (
              <Certification handleLoginStatus={this.handleLoginStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
