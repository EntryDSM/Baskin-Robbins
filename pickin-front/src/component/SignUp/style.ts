import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";

export const SignUpInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border: solid 1px #bfbfbf;
  margin-bottom: 40px;
`;

export const SignUpInputBox = styled.input`
  all: unset;
  width: 390px;
  height: 20px;
  font-size: 18px;
  font-weight: 300;
  margin: 24px 32px;
`;

export const CheckBtn = styled.button`
  width: 80px;
  height: 26px;
  border-radius: 3px;
  background-color: ${mainColor};
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
  margin: 19px 16px;
  text-align: center;
`;

export const ClauseCheckbox = styled.div`
  display: inline-block;
  margin-right: 16px;
  width: 28px;
  height: 28px;
  border: solid 0.5px #bfbfbf;
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

export const InputError = styled.p`
  display: inline-block;
  font-size: 18px;
  color: ${mainColor};
  position: relative;
  top: 30px;
  left: 72px;
`;