import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { pickinLogo, interviewerIcon, agencyIcon } from "./../../assets/index";

const SignUp: React.FC = () => (
  <S.SignUp>
    <S.SignUpLogo src={pickinLogo} alt="피킨 로고" />
    <S.SignUpLinks>
      <Link to="/signup/interviewer">
        <S.SignUpLinkBtn>
          <S.SignUpLinkIcon src={interviewerIcon} />
          <p>면접관 가입</p>
          <p>면접관으로 가입하시려면 선택해 주세요.</p>
        </S.SignUpLinkBtn>
      </Link>
      <Link to="/signup/agency">
        <S.SignUpLinkBtn>
          <S.SignUpLinkIcon src={agencyIcon} />
          <p>기관 가입</p>
          <p>기관으로 가입하시려면 선택해 주세요.</p>
        </S.SignUpLinkBtn>
      </Link>
    </S.SignUpLinks>
  </S.SignUp>
);

export default SignUp;
