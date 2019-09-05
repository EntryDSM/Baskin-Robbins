import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets";
import { ClauseAdmit, InputBox } from "./../../../component";
import { checkAgencyCode } from "./../../../services/get";
import { signUpToInterviewer } from "./../../../services/post";

interface Props {}

interface State {
  isChecked: boolean;
  agencyCode: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

class AgencySignUp extends React.Component<Props, State> {
  state = {
    isChecked: false,
    agencyCode: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  private setChecked = isChecked =>
    this.setState({
      isChecked: !isChecked
    });

  private handleAgencyCode = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ agencyCode: e.target.value });

  private handleName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ name: e.target.value });

  private handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ email: e.target.value });

  private handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ password: e.target.value });

  private handlePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => this.setState({ passwordConfirm: e.target.value });

  render() {
    return (
      <S.SignUpFormContainer>
        <Link to="/">
          <S.SignUpFormLogo src={pickinLogo} alt="피킨 로고" />
        </Link>
        <InputBox
          boxType="기관 코드"
          value={this.state.agencyCode}
          changeState={this.handleAgencyCode}
          btnType="확인"
        />
        <S.SignUpInputBox
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleName}
        />
        <InputBox
          boxType="이메일"
          value={this.state.email}
          changeState={this.handleEmail}
          btnType="인증"
        />
        <S.SignUpInputBox
          placeholder="비밀번호"
          type="password"
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <S.SignUpInputBox
          placeholder="비밀번호 확인"
          type="password"
          onChange={this.handlePasswordConfirm}
        />
        <ClauseAdmit
          isChecked={this.state.isChecked}
          setChecked={this.setChecked}
        />
        <S.SignUpFormBtn>Sign Up</S.SignUpFormBtn>
      </S.SignUpFormContainer>
    );
  }
}

export default AgencySignUp;
