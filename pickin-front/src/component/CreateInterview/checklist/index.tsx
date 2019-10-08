import * as React from "react";

import * as S from "./style";
import { deleteIcon } from "./../../../assets";

interface Question {
  type: number;
  title: string;
  checkList: string[];
}

interface Props {
  questionIndex: number;
  questionList: Question[];
  setQuestionList(question: Question[]): void;
  HandleAddChecklist(questionIndex: number): void;
  HandleDeleteChecklist(questionIndex: number, target: number): void;
}

const Checklist: React.FC<Props> = ({
  questionList,
  questionIndex,
  setQuestionList,
  HandleAddChecklist,
  HandleDeleteChecklist
}) => {
  const HandleChangeListValue = (
    questionIndex: number,
    currentIndex: number,
    value: string
  ) =>
    setQuestionList(
      questionList.map((question, index) => {
        if (questionIndex === index) {
          return {
            type: question.type,
            title: question.title,
            checkList: question.checkList.map((item, index) => {
              if (currentIndex === index) {
                return value;
              } else {
                return item;
              }
            })
          };
        }
      })
    );

  const List = questionList[questionIndex].checkList.map((_, index) => (
    <S.ChecklistItem>
      <S.ChecklistItemCheckBox />
      <S.ChecklistItemContent
        value={questionList[questionIndex].checkList[index]}
        onChange={e =>
          HandleChangeListValue(questionIndex, index, e.target.value)
        }
        placeholder="체크리스트 항목을 입력해 주세요"
      />
      <S.ChecklistItemDeleteBtn
        onClick={() => HandleDeleteChecklist(questionIndex, index)}
        src={deleteIcon}
      />
    </S.ChecklistItem>
  ));
  return (
    <S.ChecklistContainer>
      {List}
      <S.ChecklistAdd
        onClick={() => {
          HandleAddChecklist(questionIndex);
          console.log(questionList[questionIndex].checkList);
        }}
      >
        <S.ChecklistAddBtn>
          <S.ChecklistAddIcon>+</S.ChecklistAddIcon>
        </S.ChecklistAddBtn>
        추가하기
      </S.ChecklistAdd>
    </S.ChecklistContainer>
  );
};

export default Checklist;
