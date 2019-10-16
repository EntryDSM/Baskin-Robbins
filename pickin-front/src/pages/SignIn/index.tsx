import * as React from "react";
import { Link, Redirect } from "react-router-dom";

import * as S from "./style";
import { pickinLogo } from "./../../assets";
import { getUserToken } from "./../../services/post";

interface StorageKey {
  access: string;
  refresh: string;
  agencyCode: string;
}

interface Props {
  isLogin: boolean;
  handleAdminInfo(isAdmin: boolean): void;
  handleLoginStatus(isLogin: boolean): void;
}

interface State {
  email: string;
  password: string;
  isFail: boolean;
}

class SignIn extends React.Component<Props, State> {
  state: State = { email: "", password: "", isFail: false };

  private storageKey: StorageKey = {
    access: "access_token",
    refresh: "refresh_token"
  };

  private signInInfoSubmit = async () => {
    try {
      const response = await getUserToken({
        email: this.state.email,
        password: this.state.password
      });

      sessionStorage.setItem(
        this.storageKey.access,
        response.data.access_token
      );
      localStorage.setItem(
        this.storageKey.refresh,
        response.data.refresh_token
      );

      if (response.status === 200) {
        this.props.handleLoginStatus(true);
        this.props.handleAdminInfo(response.data.admin);
            agencyCode: response.data.agency_code
      }
    } catch (error) {
      if (error.response.status === 400) {
        this.setState({ isFail: true });
      } else {
        console.log(error.response);
      }
    }
  };

  render() {
    return (
      <div>
        {this.props.isLogin && <Redirect to="/" />}
        <S.SignInContainer>
          <Link to="/">
            <S.SignInLogo src={pickinLogo} />
          </Link>
          <S.SignInInput
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <S.SignInInput
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          {this.state.isFail && (
            <S.SignInError>
              이메일 혹은 비밀번호를 정확히 입력해 주세요
            </S.SignInError>
          )}
          <S.SignInBtn
            onClick={() => {
              this.signInInfoSubmit();
            }}
          >
            Sign In
          </S.SignInBtn>
          {/* <S.CreateAccountText>
      Do not have an account?
      <Link to="/signup">
        <p>Create Account</p>
      </Link>
    </S.CreateAccountText> */}
        </S.SignInContainer>
      </div>
    );
  }
}

export default SignIn;
