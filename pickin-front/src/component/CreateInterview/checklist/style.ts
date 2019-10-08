import styled from "styled-components";

export const ChecklistContainer = styled.div`
  padding: 40px 26px;
  border-bottom: solid 1px #bfbfbf;
  margin-bottom: 40px;
`;

export const ChecklistItem = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 32px;
`;

export const ChecklistItemCheckBox = styled.div`
  display: inline-block;
  width: 27px;
  height: 27px;
  border-radius: 3px;
  border: solid 1px #606060;
  margin-right: 16px;
`;

export const ChecklistItemContent = styled.input`
  all: unset;
  width: 700px;
  display: inline-block;
  font-size: 24px;
`;

export const ChecklistItemDeleteBtn = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.4;
`;

export const ChecklistAdd = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

export const ChecklistAddBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 27px;
  height: 27px;
  border-radius: 3px;
  border: solid 1px #cccccc;
  background-color: #f5f5f5;
  margin-right: 16px;
`;

export const ChecklistAddIcon = styled.p`
  padding-top: 3px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.4);
`;
