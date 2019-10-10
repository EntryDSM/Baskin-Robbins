import * as React from "react";

import * as S from "./style";
import { settingIcon } from "./../../../assets";

interface Interview {
  title: string;
  explanation: string;
}

interface Props {
  interview: Array<Interview>;
  interviewStatus: string;
}

const InterviewList: React.FC<Props> = ({ interview, interviewStatus }) => {
  const Interviews = interview.map(item => (
    <S.InterviewContainer>
      <S.InterviewTitle>{item.title}</S.InterviewTitle>
      <S.InterviewContents>
        <S.InterviewExplanation>{item.explanation}</S.InterviewExplanation>
        {interviewStatus === "Will pick" && (
          <S.InterviewSettingButton src={settingIcon} />
        )}
        {interviewStatus === "Picked" && (
          <S.InterviewExcelDownloadBtn>
            EXCEL 다운로드
          </S.InterviewExcelDownloadBtn>
        )}
      </S.InterviewContents>
    </S.InterviewContainer>
  ));
  return <div>{Interviews}</div>;
};

export default InterviewList;
