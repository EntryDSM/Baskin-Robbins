import * as React from "react";

import * as S from "./style";
import { checkedEmail } from "./../../../assets";
import { interviewerlist } from "./interviewerlist";

interface Props {
  setIsAddClicked(e: boolean): void;
}

const AddInterviewer: React.FC<Props> = ({ setIsAddClicked }) => {
  const [isAssigned, setIsAssigned] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    const assignedArray = [];
    for (let i = 0; i < interviewerlist.length; i++) {
      assignedArray.push(false);
    }
    setIsAssigned(assignedArray);
    console.log(isAssigned);
  }, []);

  const HandleIsAssigned = (interviewIndex: number) =>
    setIsAssigned(
      isAssigned.map((assigned, index) => {
        if (index === interviewIndex) {
          return !assigned;
        } else {
          return assigned;
        }
      })
    );

  const InterviewList = interviewerlist.map((interviewer, index) => (
    <S.AddInterviewerList
      onClick={() => {
        HandleIsAssigned(index);
        console.log(isAssigned[index]);
      }}
    >
      {interviewer.interviewer_name} 님 ({interviewer.email})
      {isAssigned[index] && <S.AddInterviewerChecked src={checkedEmail} />}
    </S.AddInterviewerList>
  ));

  return (
    <S.AddInterviewerContainer>
      <S.AddInterviewerTitle>면접관 목록</S.AddInterviewerTitle>
      <S.AddInterviewerListContainer>
        {InterviewList}
      </S.AddInterviewerListContainer>
      <S.AddInterviewerFooter>
        <S.AddInterviewDoneBtn onClick={e => setIsAddClicked(!e)}>
          Done
        </S.AddInterviewDoneBtn>
      </S.AddInterviewerFooter>
    </S.AddInterviewerContainer>
  );
};

export default AddInterviewer;
