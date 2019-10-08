import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets";
import { ClauseAdmit, InputBox } from "./../../../component";

export interface Props {}

export interface State {
  isChecked: boolean;
}

class AgencySignUp extends React.Component<Props, State> {
  state = {
    isChecked: false
  };

  public setChecked = isChecked =>
    this.setState({
      isChecked: !isChecked
    });

  render() {
    return (
      <S.SignUpFormContainer>
        <Link to="/">
          <S.SignUpFormLogo src={pickinLogo} alt="피킨 로고" />
        </Link>
        <S.SignUpInputBox placeholder="기관 이름" />
        <S.SignUpInputBox placeholder="기관 분류" />
        <InputBox boxType="이메일" btnType="인증" />
        <S.SignUpInputBox placeholder="비밀번호" type="password" />
        <S.SignUpInputBox placeholder="비밀번호 확인" type="password" />
        <S.SignUpAgencyExplainField placeholder="기관 설명" />
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
