import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";

export const SignUpInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  border: solid 0.5px #606060;
  margin-bottom: 40px;
`;

export const SignUpInputBox = styled.input`
  all: unset;
  width: 390px;
  height: 20px;
  font-size: 18px;
  font-weight: 300;
  margin: 30px 40px;
`;

export const SignUpBoxName = styled.p`
  display: inline-block;
  color: #606060;
  background-color: #ffffff;
  position: relative;
  left: 40px;
  bottom: -8px;
  padding: 0 3px;
  font-size: 14px;
  font-weight: 300;
`;

export const CheckAgencyBtn = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 18px;
  background-color: ${mainColor};
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  margin: 22px 36px;
  text-align: center;
`;

export const ClauseCheckbox = styled.div`
  display: inline-block;
  margin-right: 16px;
  width: 28px;
  height: 28px;
  border: solid 0.5px #606060;
  cursor: pointer;
`;

export const ClauseChecked = styled.img`
  display: inline-block;
  margin: 8.5px 6px;
  width: 16px;
  height: 12px;
`;

export const ClauseCheckText = styled.p`
  display: inline-block;
  position: relative;
  top: -8px;
  opacity: 0.6;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

export const ClauseDocument = styled.p`
  display: inline-block;
  position: relative;
  top: -8px;
  margin-left: 12px;
  font-size: 14px;
  line-height: 4;
  letter-spacing: 0.35px;
  cursor: pointer;
`;