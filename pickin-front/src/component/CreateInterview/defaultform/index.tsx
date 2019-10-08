import * as React from "react";

import * as S from "./style";
import { Checklist, Grade, Narrative, OX, Dropdown } from "./../..";

interface Question {
  title: string;
  type: number;
  checkList: string[];
}

interface Props {
  question: Question;
  questionList: Question[];
  index: number;
  setQuestionList(question: Question[]): void;
  HandleDeleteQuestion(index: number): void;
  HandleChangeType(questionIndex: number, newType: number): void;
  HandleAddChecklist(questionIndex: number): void;
  HandleDeleteChecklist(questionIndex: number, target: number): void;
}

const DefaultForm: React.FC<Props> = ({
  question,
  questionList,
  index,
  setQuestionList,
  HandleDeleteQuestion,
  HandleChangeType,
  HandleAddChecklist,
  HandleDeleteChecklist
}) => (
  <div>
    <S.DefaultHeader>
      <S.DefaultTitleContainer>
        <S.DefaultNum>Q{index + 1}.</S.DefaultNum>
        <S.DefaultTitle placeholder="질문을 입력해 주세요" />
      </S.DefaultTitleContainer>
      <S.DefaultBtnContainer>
        <S.DefaultDeleteBtn onClick={() => HandleDeleteQuestion(index)}>
          삭제
        </S.DefaultDeleteBtn>
        <Dropdown
          currentIndex={index}
          type={question.type}
          HandleChangeType={HandleChangeType}
        />
      </S.DefaultBtnContainer>
    </S.DefaultHeader>
    {0 === question.type && <Narrative />}
    {1 === question.type && (
      <Checklist
        questionList={questionList}
        questionIndex={index}
        setQuestionList={setQuestionList}
        HandleAddChecklist={HandleAddChecklist}
        HandleDeleteChecklist={HandleDeleteChecklist}
      />
    )}
    {2 === question.type && <OX />}
    {3 === question.type && <Grade />}
  </div>
);

export default DefaultForm;
