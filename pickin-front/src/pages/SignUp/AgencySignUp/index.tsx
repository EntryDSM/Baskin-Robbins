import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets";
import { ClauseAdmit, InputBox } from "./../../../component";
import { signUpToAgency } from "./../../../services/post";

export interface Props {}

export interface State {
  isChecked: boolean;
  agencyName: string;
  agencyKind: string;
  email: string;
  password: string;
  passwordConfirm: string;
  agencyExplanation: string;
}

class AgencySignUp extends React.Component<Props, State> {
  state = {
    isChecked: false,
    agencyName: "",
    agencyKind: "",
    email: "",
    password: "",
    passwordConfirm: "",
    agencyExplanation: ""
  };

  private setChecked = isChecked =>
    this.setState({
      isChecked: !isChecked
    });

  private handleAgencyName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ agencyName: e.target.value });

  private handleAgencyKind = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ agencyKind: e.target.value });

  private handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ email: e.target.value });

  private handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ password: e.target.value });

  private handlePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => this.setState({ passwordConfirm: e.target.value });

  private handleAgencyExplanation = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => this.setState({ agencyExplanation: e.target.value });

  render() {
    return (
      <S.SignUpFormContainer>
        <Link to="/">
          <S.SignUpFormLogo src={pickinLogo} alt="피킨 로고" />
        </Link>
        <S.SignUpInputBox
          placeholder="기관 이름"
          value={this.state.agencyName}
          onChange={this.handleAgencyName}
        />
        <S.SignUpInputBox
          placeholder="기관 분류"
          value={this.state.agencyKind}
          onChange={this.handleAgencyKind}
        />
        <InputBox
          boxType="이메일"
          btnType="인증"
          value={this.state.email}
          changeState={this.handleEmail}
        />
        <S.SignUpInputBox
          placeholder="비밀번호"
          value={this.state.password}
          onChange={this.handlePassword}
          type="password"
        />
        <S.SignUpInputBox
          placeholder="비밀번호 확인"
          value={this.state.passwordConfirm}
          onChange={this.handlePasswordConfirm}
          type="password"
        />
        <S.SignUpAgencyExplainField
          placeholder="기관 설명"
          value={this.state.agencyExplanation}
          onChange={this.handleAgencyExplanation}
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
