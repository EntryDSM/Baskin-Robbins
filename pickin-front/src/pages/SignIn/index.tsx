import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { pickinLogo } from "./../../assets";

const SignIn: React.FC = () => (
  <S.SignInContainer>
    <Link to="/">
      <S.SignInLogo src={pickinLogo} />
    </Link>
    <S.SignInInput placeholder="ID" />
    <S.SignInInput placeholder="Password" type="password" />
    <S.SignInBtn>Sign In</S.SignInBtn>
    <S.CreateAccountText>
      Do not have an account?
      <Link to="/signup">
        <p>Create Account</p>
      </Link>
    </S.CreateAccountText>
  </S.SignInContainer>
);

export default SignIn;
