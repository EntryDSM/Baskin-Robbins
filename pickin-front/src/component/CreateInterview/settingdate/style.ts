import styled from "styled-components";

interface InputProps {
  isYear: boolean;
}

export const SettingDateContainer = styled.div`
  display: flex;
  width: 402px;
  height: 200px;
  align-items: center;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  background-color: #fefefe;
  position: absolute;
  top: 218px;
  right: 526px;
  z-index: 3;
`;

export const SettingDateItem = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  color: #252525;
  margin: 12px 32px 70px;
`;

export const SettingDateType = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  color: #db8175;
`;

export const SettingDateInput = styled.input`
  all: unset;
  font-size: 16px;
  text-align: center;
  color: #555555;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  width: ${(props: InputProps) => (props.isYear ? "48px" : "24px")};
`;

export const SettingDateWaveIcon = styled.p`
  font-size: 16px;
  text-align: center;
  color: #555555;
`;

export const SettingDateFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 68px;
  background-color: #fcfcfc;
  position: absolute;
  bottom: 0;
  border-radius: 0 5px 5px;
`;

export const SettingDateDoneBtn = styled.button`
  margin: 0 24px;
  width: 100px;
  height: 36px;
  border-radius: 2px;
  background-color: #e5a39a;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;
