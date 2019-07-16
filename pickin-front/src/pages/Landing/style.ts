import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";
import { landingImg } from "./../../assets/index";

export const LandingBackground = styled.div`
  height: 100vh;
  background-image: url("${landingImg}");
  background-repeat: no-repeat;
  background-size: 1200px;
  background-position: 835px -455px;
`;

export const LandingContainer = styled.div`
  padding: 37px 390px 0;
`;

export const LandingLogo = styled.img`
  width: 100px;
  height: 26px;
`;

export const LandingText = styled.div`
  transform: translateY(55%);
`;

export const LandingMainText = styled.p`
  font-size: 56px;
  line-height: 1.43;
  letter-spacing: 1.4px;
`;

export const LandingSubText = styled.p`
  margin-top: 40px;
  opacity: 0.2;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0.8px;
`;

export const SignInButton = styled.button`
  text-align: center;
  font-size: 24px;
  margin-top: 72px;
  width: 320px;
  height: 80px;
  border-radius: 3px;
  color: #ffffff;
  background-color: ${mainColor};
`;

export const SignInOrUp = styled.p`
  margin: 32px;
  display: inline-block;
  opacity: 0.87;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

export const SignUpLink = styled.p`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: ${mainColor};
`;
