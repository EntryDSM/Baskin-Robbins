import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";

export const SignInLogo = styled.img`
  width: 240px;
  height: 62px;
  margin-bottom: 46px;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  height: 100vh;
  margin: 0 auto;
`;

export const SignInInput = styled.input`
  all: unset;
  flex-shrink: 1;
  height: 80px;
  border: solid 0.5px rgba(95, 95, 95, 0.9);
  padding: 0 40px;
  margin-top: 48px;
  font-size: 18px;
  font-weight: 300;
`;

export const SignInBtn = styled.button`
  display: block;
  width: 100%;
  height: 100px;
  background-color: ${mainColor};
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-top: 98px;
`;

export const CreateAccountText = styled.p`
  margin-top: 56px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  > p {
    padding-left: 15px;
    display: inline-block;
    font-weight: normal;
    color: ${mainColor};
  }
`;
