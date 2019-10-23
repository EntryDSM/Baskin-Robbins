import * as React from "react";

import * as S from "./style";
import Header from "./../../utils/Header";
import { AddInterviewer, DefaultForm, SettingDate } from "./../../component";

interface Date {
  year: string;
  month: string;
  day: string;
}

interface Question {
  type: number;
  title: string;
  checkList: string[];
}

interface Props {
  handleLoginStatus(loginStatus: boolean): void;
}

const CreateInterview: React.FC<Props> = ({ handleLoginStatus }) => {
  agencyCode
  const [isAddClicked, setIsAddClicked] = React.useState<boolean>(false);
  const [isDateClicked, setIsDateClicked] = React.useState<boolean>(false);
  const [interviewTitle, setInterviewTitle] = React.useState<string>(
    "제목 없음"
  );
  const [interviewSubtitle, setInterviewSubtitle] = React.useState<string>("");
  const [questionList, setQuestionList] = React.useState<Question[]>([
    { type: 0, title: "", checkList: [] }
  ]);
  const [startDate, setStartDate] = React.useState<Date>({
    year: "2019",
    month: "01",
    day: "01"
  });
  const [endDate, setEndDate] = React.useState<Date>({
    year: "2019",
    month: "01",
    day: "01"
  });

  const HandleAddQuestion = () =>
    setQuestionList([...questionList, { title: "", type: 0, checkList: [] }]);

  const HandleDeleteQuestion = (target: number) =>
    setQuestionList(questionList.filter((_, index) => index !== target));

  const HandleChangeType = (questionIndex: number, newType: number) =>
    setQuestionList(
      questionList.map((question, index) => {
        if (questionIndex === index) {
          return { title: question.title, type: newType, checkList: [] };
        } else {
          return question;
        }
      })
    );

  const HandleAddChecklist = (questionIndex: number) =>
    setQuestionList(
      questionList.map((question, index) => {
        if (questionIndex === index) {
          return {
            title: question.title,
            type: question.type,
            checkList: [...question.checkList, "새 항목"]
          };
        } else {
          return question;
        }
      })
    );

  const HandleDeleteChecklist = (questionIndex: number, target: number) =>
    setQuestionList(
      questionList.map((question, index) => {
        if (questionIndex === index) {
          return {
            title: question.title,
            type: question.type,
            checkList: question.checkList.filter(
              checkItem => question.checkList.indexOf(checkItem) !== target
            )
          };
        } else {
          return question;
        }
      })
    );

  const Questions = questionList.map((question, index) => (
    <DefaultForm
      question={question}
      questionList={questionList}
      index={index}
      setQuestionList={setQuestionList}
      HandleDeleteQuestion={HandleDeleteQuestion}
      HandleChangeType={HandleChangeType}
      HandleAddChecklist={HandleAddChecklist}
      HandleDeleteChecklist={HandleDeleteChecklist}
    />
  ));

  return (
    <div>
      <Header handleLoginStatus={handleLoginStatus} isAdmin={false} />
      <S.CreateInterviewContainer>
        <S.CreateInterviewTitle
          placeholder="면접 이름을 입력해 주세요"
          value={interviewTitle}
          onChange={e => setInterviewTitle(e.target.value)}
        />
        <S.CreateInterviewHeader>
          <S.CreateInterviewSubtitle
            placeholder="면접 설명을 입력해 주세요"
            onChange={e => setInterviewSubtitle(e.target.value)}
          />
          <S.CreateInterviewSettingBtn
            onClick={() => setIsDateClicked(!isDateClicked)}
          >
            면접일 설정
          </S.CreateInterviewSettingBtn>
          <S.CreateInterviewSettingBtn
            onClick={() => setIsAddClicked(!isAddClicked)}
          >
            면접관 추가
          </S.CreateInterviewSettingBtn>
          <div>
            <S.CreateInterviewSettingBtn
              onClick={() => setIsDateClicked(!isDateClicked)}
            >
              면접일 설정
            </S.CreateInterviewSettingBtn>
            <S.CreateInterviewSettingBtn
              onClick={() => setIsAddClicked(!isAddClicked)}
            >
              면접관 추가
            </S.CreateInterviewSettingBtn>
          </div>
        </S.CreateInterviewHeader>
        {isAddClicked && (
          <AddInterviewer
            agencyCode="09f3cb"
            setIsAddClicked={() => setIsAddClicked(!isAddClicked)}
          />
        )}
        {isDateClicked && (
          <SettingDate
            setIsDateClicked={setIsDateClicked}
            isDateClicked={isDateClicked}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
        {Questions}
        <S.CreateInterviewBtnContainer>
          <S.CreateInterviewBtnContainerSpace />
          <S.CreateInterviewAddQuestionBtn onClick={() => HandleAddQuestion()}>
            추가하기
          </S.CreateInterviewAddQuestionBtn>
          <S.CreateInterviewDoneBtn>완료</S.CreateInterviewDoneBtn>
        </S.CreateInterviewBtnContainer>
      </S.CreateInterviewContainer>
    </div>
  );
};

export default CreateInterview;
