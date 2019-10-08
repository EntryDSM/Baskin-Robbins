import styled from "styled-components";

export const AddInterviewerContainer = styled.div`
  width: 402px;
  height: 500px;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  background-color: #fefefe;
  position: absolute;
  top: 218px;
  right: 390px;
  z-index: 2;
`;

export const AddInterviewerTitle = styled.p`
  margin: 48px 0 32px 24px;
  font-size: 18px;
  color: #db8175;
`;

export const AddInterviewerListContainer = styled.div`
  margin: 0 24px;
  height: 300px;
  overflow-y: scroll;
`;

export const AddInterviewerList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8px;
  font-size: 12px;
  color: #555555;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
`;

export const AddInterviewerChecked = styled.img`
  width: 12px;
  height: 12px;
`;

export const AddInterviewerFooter = styled.div`
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

export const AddInterviewDoneBtn = styled.button`
  margin: 0 24px;
  width: 100px;
  height: 36px;
  border-radius: 2px;
  background-color: #e5a39a;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;
