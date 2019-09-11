import * as React from "react";

import * as S from "./style";

interface Props {
  title: string;
  explanation: string;
}

const InterviewList: React.FC<Props> = ({ title, explanation }) => (
  <S.InterviewContainer>
    <S.InterviewTitle>{title}</S.InterviewTitle>
    <S.InterviewExplanation>{explanation}</S.InterviewExplanation>
  </S.InterviewContainer>
);

export default InterviewList;
