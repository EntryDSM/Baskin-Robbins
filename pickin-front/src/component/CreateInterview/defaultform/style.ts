import styled from "styled-components";

export const DefaultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0 24px;
  border-top: solid 1px #bfbfbf;
  border-bottom: solid 1px #bfbfbf;
`;

export const DefaultTitleContainer = styled.div``;

export const DefaultNum = styled.h1`
  display: inline-block;
  margin-right: 5px;
  font-size: 28px;
  font-weight: normal;
`;

export const DefaultTitle = styled.input`
  all: unset;
  font-size: 28px;
  width: 500px;
`;

export const DefaultBtnContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4px;
  height: 38px;
  overflow: visible;
`;

export const DefaultDeleteBtn = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 5px;
  background-color: #e5a39a;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-right: 16px;
`;

export const DefaultMemo = styled.textarea`
  all: unset;
  width: calc(100% - 52px);
  display: block;
  font-size: 16px;
  padding: 24px 26px 31px;
  border-top: solid 1px #bfbfbf;
  border-bottom: solid 1px #bfbfbf;
  margin-bottom: 40px;
`;
