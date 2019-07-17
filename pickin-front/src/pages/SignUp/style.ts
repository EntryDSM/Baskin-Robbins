import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 530px;
`;

export const SignUpLogo = styled.img`
  display: block;
  margin: 0 auto 100px;
  width: 260px;
  height: 68px;
`;

export const SignUpLinks = styled.div`
  overflow: auto;
  display: flex;
  justify-content: space-between;
`;

export const SignUpLinkBtn = styled.button`
  display: inline-block;
  width: 380px;
  height: 480px;
  border-radius: 10px;
  border: solid 1px #606060;
  transition: 0.5s;

  & p {
    font-size: 24px;
    margin: 0 40px;
  }

  & p:nth-last-child(odd) {
    margin-top: 12px;
    opacity: 0.4;
    font-size: 12px;
    font-weight: 300;
  }

  &:hover {
    border-color: ${mainColor};
    background-color: ${mainColor};
    color: #ffffff;
  }
`;

export const SignUpLinkIcon = styled.img`
  display: block;
  width: 200px;
  height: 210px;
  margin: 0 auto 70px;
`;