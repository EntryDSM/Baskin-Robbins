import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import Footer from "../../utils/Footer";
import { pickinLogo } from "./../../assets/index";

const Landing: React.FC = () => (
  <div>
    <S.LandingBackground>
      <S.LandingContainer>
        <Link to="/">
          <S.LandingLogo src={pickinLogo} alt="피킨 로고" />
        </Link>
        <S.LandingText>
          <S.LandingMainText>
            Hello <br /> This is Interview System
          </S.LandingMainText>
          <S.LandingSubText>Please sign up or sign in</S.LandingSubText>
          {/* <Link to="/signin"> */}
            <S.SignInButton>Sign in</S.SignInButton>
          {/* </Link> */}
          <S.SignInOrUp>or</S.SignInOrUp>
          <Link to="/signup">
            <S.SignUpLink>Sign up</S.SignUpLink>
          </Link>
        </S.LandingText>
      </S.LandingContainer>
    </S.LandingBackground>
    <Footer />
  </div>
);

export default Landing;
