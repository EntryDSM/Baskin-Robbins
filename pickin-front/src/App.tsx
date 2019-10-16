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

interface AgencyType {
  agencyName: string;
  agencyCode: string;
}

interface Props {}

interface State {
  isLogin: boolean;
  isAdmin: boolean;
  agency: AgencyType;
  interviewStatus: string;
}

class App extends React.Component<Props, State> {
  state = {
    isLogin: false,
    isAdmin: false,
    agency: {
      agencyName: "기관 이름",
      agencyCode: "asdfjkkl"
    },
    interviewStatus: "Pickin"
  };

  private handleLoginStatus = (isLogin: boolean): void => {
    if (!isLogin) {
      sessionStorage.clear();
    }
    this.setState({ isLogin: isLogin });
  };

  private handleAdminInfo = (isAdmin: boolean): void => {
    this.setState({ isAdmin: isAdmin });
  };

  private handleInterviewStatus = (status: string): void =>
    this.setState({ interviewStatus: status });

  private handleAgency = (agency: AgencyType): void =>
    this.setState({ agency: agency });

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
                      agencyName={this.state.agency.agencyName}
                      interviewStatus={this.state.interviewStatus}
                      handleLoginStatus={this.handleLoginStatus}
                      handleInterviewStatus={this.handleInterviewStatus}
                      handleAgency={this.handleAgency}
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
                handleAgency={this.handleAgency}
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
                      agencyCode={this.state.agency.agencyCode}
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
