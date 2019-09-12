import styled from "styled-components";

export const InterviewContainer = styled.div`
  position: relative;
  margin-top: -1px;
  height: 166px;
  border-top: solid 1px #bfbfbf;
  border-bottom: solid 1px #bfbfbf;
`;

export const InterviewTitle = styled.p`
  display: inline-block;
  position: relative;
  bottom: 16px;
  font-size: 28px;
  font-weight: 300;
  color: #000000;
  margin-left: 39px;
  padding: 0 1px;
  background-color: white;
`;

export const InterviewContents = styled.div`
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
`;

export const InterviewExplanation = styled.p`
  margin: auto 0;
  font-size: 20px;
  font-weight: 300;
`;

export const InterviewExcelDownloadBtn = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 5px;
  background-color: #009344;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

export const InterviewSettingButton = styled.img`
  display: inline-block;
  width: 36px;
  height: 36px;
`;

export const InterviewPagenation = styled.ul`
  cursor: pointer;
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const InterviewPageNumber = styled.li`
  font-size: 18px;
  color: #000000;
`;
