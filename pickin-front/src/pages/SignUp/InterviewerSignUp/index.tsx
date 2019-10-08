import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets";
import { ClauseAdmit, InputBox } from "./../../../component";

interface Props {}

interface State {
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
        <InputBox boxType="기관 코드" btnType="확인" />
        <S.SignUpInputBox placeholder="이름" />
        <InputBox boxType="이메일" btnType="인증" />
        <S.SignUpInputBox placeholder="비밀번호" type="password" />
        <S.SignUpInputBox placeholder="비밀번호 확인" type="password" />
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
