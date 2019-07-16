import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { pickinLogo, interviewerIcon, agencyIcon } from "./../../assets/index";

const SignUp = () => (
  <S.SignUpContainer>
    <S.SignUpLogo src={pickinLogo} />
    <S.SignUpTypes>
      <Link to="/signup/interviewer">
        <S.SignUpTypeBtn>
          <S.SignUpTypeIcon src={interviewerIcon} />
          <p>면접관 가입</p>
          <p>면접관으로 가입하시려면 선택해 주세요.</p>
        </S.SignUpTypeBtn>
      </Link>
      <Link to="/signup/agency">
        <S.SignUpTypeBtn>
          <S.SignUpTypeIcon src={agencyIcon} />
          <p>기관 가입</p>
          <p>기관으로 가입하시려면 선택해 주세요.</p>
        </S.SignUpTypeBtn>
      </Link>
    </S.SignUpTypes>
  </S.SignUpContainer>
);

export default SignUp;
