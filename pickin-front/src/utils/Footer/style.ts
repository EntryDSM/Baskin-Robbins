import styled from "styled-components";
import { mainColor } from "./../../../public/GlobalStyle";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 170px;
  background-color: ${mainColor};
  color: #ffffff;
  user-select: none;
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 20px 390px 0 390px;
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EntryLogo = styled.img`
  width: 100px;
  height: 33px;
`;

export const Copyright = styled.p`
  font-size: 9px;
  padding: 6.6px 0 15.4px 0;
`;

export const FooterInfo = styled.p`
  display: block;
  line-height: 1.8;
  letter-spacing: -0.25px;
  font-size: 10px;
  white-space: pre;

  & span {
    padding-left: 16px;
  }
`;

export const EntryInfo = styled.p`
  text-align: right;
  font-size: 14px;
  margin-bottom: 14px;
  line-height: 1.29;
`;

export const EntryInfoIndex = styled(EntryInfo)`
  opacity: 0.6;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const SNSLogo = styled.img`
  float: right;
  width: 20px;
  height: 20px;
  margin: 14px 0 0 12px;
`;
